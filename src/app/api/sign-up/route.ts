// app/api/sign-up/route.ts

import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail"; 
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      activationCode,
      activationCodeExpiry,
    } = await req.json();

    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      if (existingUser.isActivated) {
        return NextResponse.json(
          {
            success: false,
            message: "User already exists",
          },
          {
            status: 400,
          }
        );
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.user.update({
          where: { email },
          data: {
            password: hashedPassword,
            verifyCode: Math.floor(1000 + Math.random() * 9000).toString(),
            verifyCodeExpiry: new Date(Date.now() + 3600000), // 1 hour
          },
        });
      }
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await db.user.create({
        data: {
          firstName,
          lastName,
          email,
          password: hashedPassword,
          activationCode,
          activationCodeExpiry,
          isActivated: false,
          isVerified: true,
          verifyCode: Math.floor(1000 + Math.random() * 9000).toString(),
          verifyCodeExpiry: new Date(Date.now() + 3600000), // 1 hour
        },
      });

      if (!newUser) {
        throw new Error("Failed to create user");
      }
    }

    const emailResponse = await sendVerificationEmail(email, firstName, activationCode);

    if (!emailResponse.success) {
      return NextResponse.json(
        {
          success: false,
          message: emailResponse.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "User created successfully. Please verify your email",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create user",
      },
      {
        status: 500,
      }
    );
  }
}
