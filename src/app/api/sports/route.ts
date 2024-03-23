import { NextResponse } from "next/server";
import SPORTS from "./SPORTS";

export async function GET(){
  return NextResponse.json(SPORTS)
}