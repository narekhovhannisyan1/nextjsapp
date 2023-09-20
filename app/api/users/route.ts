import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log("hello world");
  const users = prisma.user.findMany();
  console.log(users);
  return NextResponse.json(users);
}
