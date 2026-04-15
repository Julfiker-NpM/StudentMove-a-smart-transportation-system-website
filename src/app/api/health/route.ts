import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "studentmove-next",
    timestamp: new Date().toISOString(),
  });
}
