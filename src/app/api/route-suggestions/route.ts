import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { routeSuggestionSchema } from "@/lib/validators";

export async function GET() {
  const data = await prisma.routeSuggestion.findMany({
    orderBy: [{ rankScore: "desc" }, { createdAt: "desc" }],
    take: 20,
  });

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = routeSuggestionSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const created = await prisma.routeSuggestion.create({
    data: parsed.data,
  });

  return NextResponse.json(created, { status: 201 });
}
