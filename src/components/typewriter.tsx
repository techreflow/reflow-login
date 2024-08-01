"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { getAuth } from "../app/actions/help";
import React, { useEffect, useState } from "react";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  isVerified: boolean;
}

export default function Typewriter() {
  const [session, setSession] = useState<any>("");
  useEffect(() => {
    getAuth().then((session) => {
      setSession(session);
    });
  }, []);
  const words = [
    {
      text: "Grow",
    },
    {
      text: "your",
    },
    {
      text: "Business",
    },
    {
      text: "with",
    },
    {
      text: "ReFlow.",
      className: "text-sky-500 dark:text-sky-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-black dark:text-black text-xl sm:text-xl  ">
        we enhance process industries using advanced industrial iot 4.0
        technologies.
      </p>
      <TypewriterEffectSmooth words={words} />
      {session ? <>
        <Link className="text-black text-xl flex justify-end items-center gap-3" href={"/loginned"}>
          <span>Head to Dashboard {session?.user?.firstName}</span>
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white hover:bg-white hover:text-black text-l hover:border-black"> Dashboard </button>
            
        </Link>
        </>: (
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <Link href="/login">
            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
              Register
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
