"use server";
import { signIn, signOut } from "@/auth";
import { auth } from "@/auth";
import { toast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

type datacheck = {
  email: string;
  password: string;
};
export async function doSign(formData: datacheck) {
  "use server";
  await signIn("credentials", {
    email: formData.email,
    password: formData.password,
    redirect: true,
    redirectTo: "/loginned",
  });
}

export async function doSignOut() {
  await signOut({ redirectTo: "/login" });
}

export const signOutBtnFn = async () => {
  "use server";
  await signOut({ redirectTo: "/" });
};

interface User {
  firstName: string;
  lastName: string;
  email: string;
  isVerified: boolean;
}
export const getAuth = async () => {
  const session = await auth();

  const user1 = session?.user;
  return session;
};

export const toProtect = async () => {
  const session = await auth();
  if (session?.user) {
    redirect("/loginned");
  } else {
    redirect("/login");
  }
};

export const toProtectLogin = async () => {
  const session = await auth();
  if (session?.user) {
    return true;
  } else {
    return false;
  }
};

const currentEnv = process.env.NODE_ENV;
export const getCookies = () => {
  if (currentEnv === "development") {
    const reqCookie = cookies().get("authjs.session-token");
    return reqCookie?.value;
  } else {
    const reqCookie = cookies().get("__Secure-authjs.session-token");
    return reqCookie?.value;
  }
};
