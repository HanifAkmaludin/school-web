import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Simpan ke database via Prisma
    await prisma.contacts.create({
      data: { name, email, subject, message },
    });

    // Kirim email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`,
    });

    return NextResponse.json({ message: "Message sent & saved successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error submitting form" }, { status: 500 });
  }
}
