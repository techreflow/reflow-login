"use client";
import React, { useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Label } from "../../../components/ui/labelLogin";
import { Input } from "../../../components/ui/InputLogin";
import { cn } from "@/utils/cn";

interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  activationCode: string;
}

export function Signup() {
  const router = useRouter();
  const session = useSession();
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    activationCode: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (session.status === "authenticated") {
      router.push("/");
      return;
    }

    const { firstName, lastName, email, password, activationCode } = userInfo;
    const user = {
      firstName,
      lastName,
      email,
      password,
      activationCode,
      activationCodeExpiry: new Date(Date.now() + 3600000),
    };

    try {
      const res = await fetch("/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      console.log(data);
      console.log("Form submitted successfully");
      router.push("/login");
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-full w-full flex flex-col md:flex-row justify-evenly md:pr-[3rem] bg-white items-center">
        <div className="h-full w-full md:w-[40%] bg-white p-6">
          <h1 className="text-black font-bold tracking-wide text-4xl">Register</h1>
          <p className="text-gray-600 mt-[1rem]">Register to get started</p>
          <div className="bg-gray-100 mt-8 p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input
                    id="firstname"
                    placeholder="first name"
                    type="text"
                    value={userInfo.firstName}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, firstName: e.target.value })
                    }
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input
                    id="lastname"
                    placeholder="last name"
                    type="text"
                    value={userInfo.lastName}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, lastName: e.target.value })
                    }
                  />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  placeholder="Your Email ID"
                  type="email"
                  value={userInfo.email}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  value={userInfo.password}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, password: e.target.value })
                  }
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-8">
                <Label htmlFor="activationCode">Company Name</Label>
                <Input
                  id="activationCode"
                  placeholder="company name"
                  type="text"
                  value={userInfo.activationCode}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, activationCode: e.target.value })
                  }
                />
              </LabelInputContainer>
              <button
                className={`py-2 px-4 bg-black text-white rounded-xl ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                type="submit"
                disabled={loading}
              >
                {loading ? "Registering..." : `Register ->`}
              </button>
            </form>
          </div>
        </div>

        <div className="w-full md:w-[40%] text-black h-[80vh] flex flex-col justify-center items-center">
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

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
