import dbConnect from "../../../lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "../../../helpers/sendVerificationEmail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      activationCode,
      activationCodeExpiry,
    } = await req.json();

    const existingUser = await UserModel.findOne({
      email,
      isVerified: true,
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    const existingUserNotVerified = await UserModel.findOne({
      email,
    });

    const verifyCode = Math.floor(1000 + Math.random() * 9000).toString();

    if (existingUserNotVerified) {
      if (existingUserNotVerified.isVerified) {
        return NextResponse.json(
          {
            success: false,
            message: "User already exists with this email",
          },
          {
            status: 400,
          }
        );
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        existingUserNotVerified.password = hashedPassword;
        existingUserNotVerified.verifyCode = verifyCode;
        existingUserNotVerified.verifyCodeExpiry = new Date(
          Date.now() + 3600000
        );
        await existingUserNotVerified.save();
      }
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const expiryDate = new Date();
      expiryDate.setHours(expiryDate.getHours() + 1);

      const newUser = new UserModel({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        isAdmin: false,
        verifyCode: verifyCode,
        verifyCodeExpiry: expiryDate,
        isVerified: true,
        activationCode: activationCode,
        activationCodeExpiry: activationCodeExpiry,
        isActivated: false,
        organizationId: null,
        products: [],
      });

      await newUser.save();
    }

    const emailResponse = await sendVerificationEmail(email, firstName,verifyCode);

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
