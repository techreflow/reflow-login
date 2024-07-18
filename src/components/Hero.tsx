"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import Typewriter from "./typewriter";
import { WavyBackground } from "../components/ui/wavy-background";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import Alphaxmodel from "./alphaxmodel";
import { getAuth } from "../app/actions/help";
// import { Boxes } from "../components/ui/background-boxes";
// import { cn } from "@/utils/cn";



function Hero() {

 
  return (
    <>
    {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#0BA5E9"
      /> */}
      <div
        className="h-[50rem] w-full dark:bg-white bg-white  dark:bg-dot-black/[0.2] bg-dot-black/[0.2] relative
    grid grid-cols-3 gap-2 justify-items-center content-center"
      >
        {/* <Boxes/> */}
        <div className=" col-span-3 min-h-screen min-w-full flex justify-center items-center">
          {/* <span className="font-bold text-4xl text-sky-500">Re</span>
      <span className="font-bold text-4xl  text-black">Flow Tech</span> */}


{/* new style typewriter */}

/
<Typewriter />





{/* <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-4xl"
      >
        we enhance process industries using  <br />advanced industrial iot
        4.0 technologies.
      </motion.h1>
    </LampContainer> */}
      
          {/* <PinContainer
            title="/reflowtech.com"
            href="https://github.com/prashant-2204"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                <span className="font-bold text-4xl text-sky-500">Re</span>
                <span className="font-bold text-4xl  text-white">
                  Flow Tech
                </span>
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  we enhance process industries using advanced industrial iot
                  4.0 technologies.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-black via-sky-500 to-white" />
            </div>
          </PinContainer> */}
        </div>
        {/* <div className="bg-white col-span-1 min-h-screen min-w-full flex justify-center items-center">
          <img src="lname.png" alt="ok" />
        </div> */}
      </div>
      
    </>
  );
}

export default Hero;
