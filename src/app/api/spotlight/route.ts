import { NextResponse } from "next/server";
import SPOTLIGHT from "./SPOTLIGHT";

export async function GET(){
  return NextResponse.json(SPOTLIGHT)
}