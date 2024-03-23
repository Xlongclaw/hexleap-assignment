import { NextResponse } from "next/server";
import ADVERTISEMENT from "./ADVERTISEMENT";

export async function GET() {
  return NextResponse.json(ADVERTISEMENT);
}
