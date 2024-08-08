import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    // Check if user exists
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 }
      );
    }

    // Generate OTP and expiry time
    const otp = crypto.randomInt(100000, 999999).toString();
    const expiryTime = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes from now

    // Update user with OTP and expiry time
    await db.user.update({
      where: { id: user.id },
      data: {
        verifyCode: otp,
        verifyCodeExpiry: expiryTime,
      },
    });

    // Setup nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email with OTP
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP for password reset is ${otp}. It is valid for 15 minutes.`,
    });

    return NextResponse.json(
      {
        success: true,
        message: "OTP sent to email",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send OTP",
      },
      { status: 500 }
    );
  }
}
