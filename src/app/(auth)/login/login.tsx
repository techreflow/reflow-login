
"use client";


import React, { use } from "react";
import { useState, useEffect } from "react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";
import { doSign,toProtectLogin } from "../../actions/help";
import { useSession } from "next-auth/react";
import { getAuth } from "../../actions/help";
import { set } from "mongoose";
import { useToast } from "@/components/ui/use-toast"

export function VerifyCode() {}

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
  const { toast } = useToast()
  useEffect(() => {
    toProtectLogin().then((res) => {setCheck(res)});
      getAuth().then((session) => {
        setSession(session);
        setUser(session?.user);
      });
      router.refresh();
    // generate
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const toastID=toast({
      title: "logging in"});
  
    if(!userInfo.email || !userInfo.password){
      toast({variant:"destructive",
        title: "please enter crediantials"})
      setLoading(false);
      return;
    }

    try {
      const {email,password}=userInfo;
     await doSign(userInfo);
      
        toast({title:"Logged In successfully",variant:"default"})

        console.log("Form submitted successfully");
      } 
      
    catch (error) {
     
      toast({title:"Please enter valid credentials",variant:"destructive"})
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }

    console.log("Form submitted");
  };

  return (
    <>
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-[40rem] h-15 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>

        <div className="max-w-md w-full mx-auto p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            WELCOME TO{" "}
            <span className="font-bold text-3xl text-sky-500">Re</span>
            <span className="font-bold text-3xl text-white">Flow Tech</span>
          </h2>
          {check ? (
            <p>Already Logged In </p>
          ) : (
            <>
              <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Login
              </p>

              <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    placeholder="prashant@xyz.com"
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={(e) =>
                      setUserInfo((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    placeholder="••••••••"
                    type="password"
                    name="password"
                    value={userInfo.password}
                    onChange={(e) =>
                      setUserInfo((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                  />
                </LabelInputContainer>

                <button
                  className={cn(
                    "bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]",
                    { "cursor-not-allowed": loading }
                  )}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="loader"></div>
                  ) : (
                    <>
                      Log In &rarr;
                      <BottomGradient />
                    </>
                  )}
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

// Add the loader CSS
const styles = {
  loader: {
    border: "2px solid #f3f3f3", // Light grey
    borderTop: "2px solid #3498db", // Blue
    borderRadius: "50%",
    width: "16px",
    height: "16px",
    animation: "spin 2s linear infinite",
  },
};

const globalStyle = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default function GlobalStyles() {
  return (
    <style jsx global>{`
      ${globalStyle}
    `}</style>
  );
}
