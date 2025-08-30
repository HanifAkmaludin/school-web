import { PrismaClient } from "@/app/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(products);
}

// export async function POST(req) {
//   const body = await req.json();
//   const product = await prisma.product.create({ data: body });
//   return NextResponse.json(product);
// }
