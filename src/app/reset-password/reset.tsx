"use client";
import { Label } from "../../components/ui/labelLogin";
import { Input } from "../../components/ui/InputLogin";
import React, { useState } from "react";
import Image from "next/image";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

function Reset() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: "", otp: "", newPassword: "" });
  const [otpSent, setOtpSent] = useState(false); // Track if OTP is sent
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!otpSent) {
      // First step: Send OTP
      try {
        const response = await fetch("/api/forgot-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: userInfo.email }),
        });

        const data = await response.json();

        if (data.success) {
          setOtpSent(true); // Move to the next step to enter OTP
        } else {
          setErrorMessage(data.message);
        }
      } catch (error) {
        console.error("Error sending OTP:", error);
        setErrorMessage("Failed to send OTP");
      } finally {
        setLoading(false);
      }
    } else {
      // Second step: Verify OTP and reset password
      try {
        const response = await fetch("/api/verify-otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userInfo.email,
            otp: userInfo.otp,
            newPassword: userInfo.newPassword,
          }),
        });

        const data = await response.json();

        if (data.success) {
          toast({ title: "Password reset successfully", variant: "default" });
          router.push("/login")
          // Optionally redirect to the login page or reset form state
        } else {
          setErrorMessage(data.message);
        }
      } catch (error) {
        console.error("Error verifying OTP:", error);
        setErrorMessage("Failed to reset password");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className="h-full w-full flex flex-col lg:flex-row justify-evenly pr-[3rem] bg-white items-center">
        <div className="h-full w-full lg:w-[40%] bg-white p-6">
          <h1 className="text-black font-bold tracking-wide text-4xl">Reset Password</h1>
          <p className="text-gray-600 mt-[1rem]">
            {otpSent ? "Enter the OTP and your new password" : "Enter your registered email"}
          </p>
          <div className="bg-gray-100 mt-8 p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {!otpSent ? (
                <div>
                  <Label htmlFor="email">
                    <p className="text-gray-500">Email ID</p>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                    className="border border-gray-300 focus:border-black placeholder-gray-500 text-black"
                    required
                  />
                </div>
              ) : (
                <>
                  <div>
                    <Label htmlFor="otp">
                      <p className="text-gray-500">OTP</p>
                    </Label>
                    <Input
                      type="text"
                      id="otp"
                      placeholder="Enter the OTP"
                      value={userInfo.otp}
                      onChange={(e) => setUserInfo({ ...userInfo, otp: e.target.value })}
                      className="border border-gray-300 focus:border-black placeholder-gray-500 text-black"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">
                      <p className="text-gray-500">New Password</p>
                    </Label>
                    <Input
                      type="password"
                      id="newPassword"
                      placeholder="Enter your new password"
                      value={userInfo.newPassword}
                      onChange={(e) => setUserInfo({ ...userInfo, newPassword: e.target.value })}
                      className="border border-gray-300 focus:border-black placeholder-gray-500 text-black"
                      required
                    />
                  </div>
                </>
              )}
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <button
                type="submit"
                className={`py-2 px-4 bg-black text-white rounded-xl ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={loading}
              >
                {loading ? "loading..." : otpSent ? "Reset Password" : "Submit"}
              </button>
            </form>
          </div>
        </div>

        <div className="w-full lg:w-[40%] text-black h-[80vh] flex flex-col justify-center items-center">
          <h2 className="font-bold text-xl text-neutral-800">
            WELCOME TO{" "}
          </h2>
          <Image
            src="/lname.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  );
}

export default Reset;
