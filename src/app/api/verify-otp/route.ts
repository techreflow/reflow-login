import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, otp, newPassword } = await req.json();

    // Fetch the user with the provided email and OTP
    const user = await db.user.findFirst({
      where: {
        email: email,
        verifyCode: otp,
        verifyCodeExpiry: {
          gte: new Date(), // Ensure OTP is not expired
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or expired OTP",
        },
        { status: 400 }
      );
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user's password and clear OTP fields
    await db.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        verifyCode: null,
        verifyCodeExpiry: null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Password reset successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to verify OTP",
      },
      { status: 500 }
    );
  }
}
