import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    console.log(data);
    return NextResponse.json({ message: "Hello from POST", data });
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
