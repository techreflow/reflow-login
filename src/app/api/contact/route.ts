import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

   
    const contactPromise = db.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    // Nodemailer configuration
  

    const transporter2 = nodemailer.createTransport({
      host: 'smtp.zoho.in',
      port: 465,
      secure: true, // use SSL
      auth: {
          user: `contact@reflowtech.in`,
          pass: process.env.NEXT_PUBLIC_EMAIL_PASS2,
      }
  });

    // Concurrent email sending to speed up the process
    const userMailPromise = transporter2.sendMail({
      from: `contact@reflowtech.in`,
      to: email,
      subject: "Thank you for contacting ReflowTech",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to us. We have received your message and our team will get back to you shortly.</p>
        <p><strong>Your Query:</strong> ${message}</p>
        <p>If you need immediate assistance, feel free to reply to this email or contact us directly.</p>
        <p>Best regards,</p>
        <p>ReflowTech</p>
      `,
    });

    const adminMailPromise = transporter2.sendMail({
      from: `contact@reflowtech.in`,
      to: `contact@reflowtech.in`,
      subject: "Contact Query",
      html: `
        <p><strong>Contact Query:</strong> ${message}</p>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      `,
    });

    // Await all promises concurrently
    const [contact, userMail, adminMail] = await Promise.all([
      contactPromise,
      userMailPromise,
      adminMailPromise,
    ]);

    if (!contact) {
      throw new Error("Failed to create contact");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
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
        message: "Failed to send message",
      },
      {
        status: 500,
      }
    );
  }
}
