import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { subscriptionSchema } from "@/lib/validators";

export async function GET() {
  const data = await prisma.subscription.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: {
        select: { id: true, name: true, email: true },
      },
    },
    take: 20,
  });

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = subscriptionSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const created = await prisma.subscription.create({
    data: {
      ...parsed.data,
      status: "PENDING",
    },
  });

  return NextResponse.json(created, { status: 201 });
}
