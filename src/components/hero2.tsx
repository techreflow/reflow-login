"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { PinContainer } from "../components/ui/3d-pin";
import Globe from "./globeComp";
import Alphaxmodel from "./alphaxmodel";
import { Spotlight } from './ui/Spotlight';
import Typewriter from "./typewriter";

const content = [
  {
    title: "Welcome to ReFlow Technologies",
    description:
      "At ReFlow Technologies, we specialize in enhancing process industries through cutting-edge Industrial IoT 4.0 products. Our flagship product, the Alpha X series, revolutionizes industrial operations by integrating advanced technologies for real-time analytics and efficient management. Designed to optimize workflow integration, our products ensure seamless data analysis and robust security protocols, empowering industries to achieve unparalleled operational efficiency.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/lname.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Transforming Industrial Operations",
    description:
      "Our mission at ReFlow Technologies is to transform industrial operations by addressing common challenges such as costly installations, frequent maintenance requirements, and downtime due to equipment wear and tear. The Alpha X series offers cost-effective installations and reduces maintenance needs, minimizing downtime and ensuring accurate performance even in challenging environments. By leveraging our products, industries can enhance productivity, reduce operational costs, and maintain high standards of efficiency.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        x
      </div>
    ),
  },
  {
    title: "Key Features of the Alpha X Series",
    description:
      "The Alpha X series is engineered to deliver comprehensive products tailored to the needs of modern industries. It supports multi-protocol compatibility, seamlessly integrating with various sensors including Pt-100, pressure sensors, and more. Featuring wireless connectivity and online calibration capabilities, it enables real-time monitoring of critical parameters. Our products provide minimum/maximum threshold alerts, ensuring proactive maintenance and optimizing equipment performance. With its plug & play model and no configuration setup required, the Alpha X series offers a hassle-free one-time setup experience.",
    content: (
      <div className="h-full w-full bg-black flex items-center justify-center">
        {/* <Image
          src="/ALPHAX.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        /> */}
        <Spotlight
        className="-top-20 left-0 md:left-60 md:-top-20"
        fill="#ffff"
      />
        <Alphaxmodel />
      </div>
    ),
  },
  {
    title: "Remote Connectivity",
    description:
      "Connect effortlessly to the ReFlow server, ensuring 24/7 uptime and regular maintenance to guarantee optimal performance. Our products come with 6 months of free software updates and are available on a quarterly software fee basis, with UI/UX enhancements provided yearly.",
    content: (
      // <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
      //   Running out of content
      // </div>
      <PinContainer
            title="Dashbaord"
            href="/loginned"
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
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-black via-sky-500 to-white">
              
                </div> 

            </div>
          </PinContainer>

    ),
  },
  {
    title: "Why Choose ReFlow Technologies?",
    description:
      "Choosing ReFlow Technologies means partnering with a leader in Industrial IoT 4.0 products dedicated to innovation and reliability. Our team combines deep industry expertise with a commitment to delivering tailored products that meet the unique challenges of each industrial environment. Backed by our customer-centric approach and a track record of success, we empower industries to thrive in the era of digital transformation.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Get in Touch",
    description:
      "Ready to revolutionize your industrial operations with ReFlow Technologies? Contact us today to learn more about how the Alpha X series can optimize your workflow, enhance efficiency, and drive growth. Join leading industries worldwide who trust ReFlow Technologies for cutting-edge products in Industrial IoT 4.0.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Globe/>
        {/* <Image
          src="/handshake.avif"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        /> */}
      </div>
      
    ),
  },
];
export default function Hero2() {
  return (
    <div className="mt-1 ">
      <StickyScroll content={content} />
      
    </div>
  );
}
