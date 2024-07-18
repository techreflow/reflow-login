import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // Initialize the GoogleGenerativeAI client
    console.log(req.json().then((data)=>console.log(data.body)));
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY as string);

    // Retrieve the model (ensure the method and parameters are correct)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

    // Parse the incoming request body
    const data = await req.json();
    const prompt = data.body;

    // Generate content based on the prompt
    const result = await model.generateContent(prompt );  // Ensure correct method and parameters
    const response = result.response;
    const output=response.text();  // Adjust according to the actual response structure

    console.log(output);

    // Return the generated output as a JSON response
    return NextResponse.json({ output });
  } catch (err) {
    console.error("Error generating text:", err);  // Improved error logging
    return NextResponse.json({ error: "Failed to generate text" });
  }
}
