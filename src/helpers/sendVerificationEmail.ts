import { resend } from "../lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  firstName: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    const { data, error } = await resend.emails.send({
      from: "Reflow-verify <onboarding@resend.dev>",
      to: email,
      subject: "verification code",
      react: VerificationEmail({ firstName: firstName, otp: verifyCode }),
    });
    return {
      success: true,
      message: "Verification email sent",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Failed to send verification email",
    };
  }
}
