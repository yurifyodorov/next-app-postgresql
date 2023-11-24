import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

export async function POST(
  request: Request,
) {
  const body = await request.json();
  const {
    email,
    name,
  } = body;


  const user = await prisma?.user.create({
    data: {
      email,
      name,
    }
  });

  return NextResponse.json(user);
}