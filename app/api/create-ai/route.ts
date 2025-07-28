import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  const apiKey = process.env.GOOGLE_GENAI_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json(
      { error: "Google GenAI API Key is not configured." },
      { status: 500 }
    );
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  try {
    const body = await req.json();
    const { title } = body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
      return NextResponse.json(
        { error: "Title is required and must be a non-empty string" }, 
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `Write a short, engaging script for a 5-minute content-based video on "${title.trim()}". Use simple and friendly language for students. Include an introduction, main content points, and a conclusion.`;

    const result = await model.generateContent(prompt);
    console.log(result)
    const response = await result.response;
    const script = response.text();
    console.log(script)

    if (!script) {
      return NextResponse.json(
        { error: "Failed to generate script content" },
        { status: 500 }
      );
    }

    return NextResponse.json({ script: script.trim() });

  } catch (error) {
    console.error("Error in create-ai route:", error);
    
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to generate script" },
      { status: 500 }
    );
  }
}