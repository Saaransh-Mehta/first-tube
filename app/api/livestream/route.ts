import { NextResponse } from "next/server";
import {Livepeer} from 'livepeer';
export async function POST(){
    const livepeerClient = new Livepeer({apiKey:process.env.LIVEPEER_API_KEY});
    try{
        const streamData = {
            name:"FreeTube Demo Stream"
        }
        livepeerClient.stream.create(streamData)
        .then((stream)=>{
            console.log("Stream created ", stream)
        })

    }catch(error){
        return NextResponse.json(error)
    }
} 