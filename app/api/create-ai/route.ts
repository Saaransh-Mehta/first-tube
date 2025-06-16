import { NextRequest,NextResponse } from "next/server";
import {CohereClientV2} from 'cohere-ai'


export async function POST(req: NextRequest) {
    const cohere = new CohereClientV2({ token: process.env.COHERE_API_KEY });
    try {
        const { title } = await req.json();
        if (!title) {
            return new Response("Title is required", { status: 400 });
        }
        const response = await cohere.chat({
    model: 'command-r',
    messages: [
      {
        role: 'user',
        content: `Write a short, engaging script for a 60-second educational video on "${title}". Use simple and friendly language for students.`
      }
    ],
    temperature: 0.7,
    maxTokens: 500,
  })

  const script = response.message?.content ?? "";
  return NextResponse.json({ script })
    } catch (error) {
        console.error("Error in create-ai route:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}