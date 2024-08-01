"use client";
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { doSign, toProtectLogin } from "../../actions/help";
import { getAuth } from "../../actions/help";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "../../../components/ui/labelLogin";
import { Input } from "../../../components/ui/InputLogin";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Importing icons

interface User {
  firstName: string;
  lastName: string;
  email: string;
  isVerified: boolean;
}

export function Login() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({ email: "", password: "" });
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<any>("");
  const [check, setCheck] = useState<boolean>();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    toProtectLogin().then((res) => setCheck(res));
    getAuth().then((session) => {
      setSession(session);
      setUser(session?.user);
    });
    router.refresh();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const toastID = toast({
      title: "Logging in",
    });

    if (!userInfo.email || !userInfo.password) {
      toast({ variant: "destructive", title: "Please enter credentials" });
      setLoading(false);
      return;
    }

    try {
      await doSign(userInfo);
      toast({ title: "Logged In successfully", variant: "default" });
      console.log("Form submitted successfully");
    } catch (error) {
      toast({ title: "Invalid credentials", variant: "destructive" });
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }

    console.log("Form submitted");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="h-full w-full flex justify-evenly pr-[3rem] bg-white items-center">
        <div className="h-full w-[40%] bg-white p-6">
          <h1 className="text-black font-bold tracking-wide text-4xl">Login</h1>
          <p className="text-gray-600 mt-[1rem]">Fill in the details to login</p>
          <div className="bg-gray-100 mt-8 p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                />
              </div>
              <div className="relative">
                <Label htmlFor="password">
                  <p className="text-gray-500">Password</p>
                </Label>
                <div className="flex items-center relative border border-gray-300 focus-within:border-black rounded">
                  <Input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    value={userInfo.password}
                    onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                    className="border-none flex-grow placeholder-gray-500 text-black pr-10"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-0 p-2 text-gray-500 text-2xl"
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                  >
                    {passwordVisible ? (
                      <AiFillEyeInvisible />
                    ) : (
                      <AiFillEye />
                    )}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className={`py-2 px-4 bg-black text-white rounded-xl ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={loading}
              >
                {loading ? "Logging in..." : `Login ->`}
              </button>
              <a href="/forgot-password" className="text-black hover:underline">Forgot Password?</a>
            </form>
          </div>
        </div>

        <div className="w-[40%] text-black h-[80vh] flex flex-col justify-center items-center">
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
