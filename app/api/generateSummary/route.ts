import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    //todos in the body of the POST req
    // const {todos} = await request.json();
    // console.log(todos);

    // //communicating with OPENAI
    // // const response = await openai.createChatCompletion({
    // const response = await openai.chat.completions.create({
    //     model: "gpt-3.5-turbo",
    //     temperature: 0.8,
    //     n:1,
    //     stream: false,
    //     messages: [
    //         {
    //             role: "system",
    //             content: `when responding welcome the user always as Mr.Soumya Das and say welcome to the an Awesome TODO APP in the world created with love. Limit the response to 200 charecters`,
    //         },
    //         {
    //             role: "user",
    //             content: `Hi there, provide a summary of the following todos. Count how many todos are in each categgory such as To do, in progress and done, then tell the user to have a productive day! Here's the data: ${JSON.
    //                 stringify(
    //                     todos
    //                 )}`
    //         },
    //     ],
    // });

    // const {data} = response;

    // console.log("DATA->", response);
    // console.log(response.choices[0].message);

    // return NextResponse.json(response.choices[0].message);
    
    
}