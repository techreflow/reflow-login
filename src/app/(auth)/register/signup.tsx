"use client";
import React from "react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { cn } from "@/utils/cn";
import { Spotlight } from "../../../components/ui/Spotlight";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

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
  const [loading, setLoading] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState<UserInfo>({
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
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Register to get started
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  placeholder="prashant"
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
                  placeholder="sharma"
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
                placeholder="prashant@xyz.com"
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
              <Label htmlFor="activationCode">Activation code</Label>
              <Input
                id="activationCode"
                placeholder="••••••••"
                type="text"
                value={userInfo.activationCode}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, activationCode: e.target.value })
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
                  Register &rarr;
                  <BottomGradient />
                </>
              )}
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
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
    border: "2px solid #0BA5E9", // Light grey
    borderTop: "2px solid #0BA5E9", // Blue
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
