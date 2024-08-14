import Link from "next/link";
import Alphaxmodel from "./alphaxmodel";
import FAQ from "./faq";
import { getAuth } from "../app/actions/help";
import React, { useEffect, useState } from "react";
import { get } from "http";
import Products from "./products";
import Image from "next/image";
export default async function  Home() {
  const session=await getAuth();

  return (
    <div className="bg-white">
      <section
        id="home"
        className="bg-[url('/industry.jpg')] w-[100vw] h-[100vh] bg-contain flex flex-col justify-center px-4 py-[5rem] lg:px-8"
      >
        <div className="text-black text-2xl lg:text-4xl mb-4 mt-[1.5rem] font-semibold leading-[1.75rem] lg:leading-[2.75rem] tracking-wide h-[100%] w-full lg:w-[48%] my-5 mx-0 lg:mx-[2rem] lg:px-8">
          <span className="inline-block">Revolutionizing Chemical</span>
          <span className="inline-block">Efficiency with Automation</span>
          
          <div className="text-base lg:text-lg text-gray-800 my-[50px] leading-[1.25rem] lg:leading-[1.5rem] font-normal">
            <span className="inline-block">Achieve Zero Downtime, Zero Injuries, and{" "}</span>
            <span className="inline-block">{`Zero Financial Losses with Reflow's`}{" "}</span>
            <span className="inline-block">Cutting-Edge Control Systems </span>
          </div>
          <div className="flex items-end h-[30%] text-[#1d1d1d] text-sm space-x-[30px]">
            {session ? (
              <Link
                href="/#products"
                className="bg-white text-black border border-black hover:bg-black hover:text-white py-3.5 px-6 rounded-3xl"
              >
                Explore
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                   className="bg-black text-white border border-black hover:bg-white hover:text-black py-3.5 px-6 rounded-3xl"
                >
                  Login
                </Link>

                <Link
                  href="/#products"
                  className="bg-white text-black border border-black hover:bg-black hover:text-white py-3.5 px-6 rounded-3xl"
                >
                  Explore
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
      <div className="h-[0.3rem] bg-white"></div>
      <Products />
      <div className="h-[105px] bg-black flex justify-center items-center font-[200] text-lg lg:text-[32px]">
        {`"Automate to Innovate"`}
      </div>

      <section id="services" className="w-full h-auto lg:h-[820px] flex flex-col lg:flex-row bg-[#00afef] items-center justify-between">
  <div className="flex flex-col h-full w-full justify-center lg:w-[35%]  text-white m-7 mt-[5rem] ml-9 p-8">
    <h1 className="text-2xl lg:text-4xl font-semibold">Services</h1>
    <p className="text-gray-600 mt-5 leading-[1.25rem] lg:leading-[1.5rem] text-base lg:text-lg w-full lg:w-[90%]">
      Use data to increase yield, make production faster, and cheaper with fewer resources than ever before. ReFlowMetrics, Capture and analyse real-time data from your production to deliver actionable insights to drive the decisions that matter.
    </p>
    <p className="text-white my-5 font-semibold leading-[1.25rem] lg:leading-[1.5rem] text-base lg:text-lg w-full lg:w-[90%]">
      No expensive integrators, no custom development, no physical configuration. Finally, the production monitoring and analytics platform you deserve.
    </p>
    <div className="flex items-center h-[30%] ">
      <Link
        href="/servc"
        className="text-sm bg-black text-white border border-black hover:bg-white hover:text-black py-3 px-6 rounded-3xl"
      >{`View More `}</Link>
    </div>
  </div>

  <div className="relative flex items-center justify-center h-[50%] lg:h-[70%] rounded-3xl m-7 mr-[2rem] mt-0 lg:mr-[7rem] w-full lg:w-[60%] overflow-hidden">
    <img 
      src="/newdash.png" 
      alt="Table" 
       
     
    
      className="rounded-3xl h-[500px] w-[900px]"
    />
  </div>
</section>


      <section id="faq" className="min-h-[600px] flex items-center">
        <FAQ />
      </section>
      <div id="about" className="h-[128px] bg-[#00afef] text-white flex justify-start items-center text-xl lg:text-2xl">
        <p className="px-[4rem] flex justify-start items-center">Meet Our Founders</p>
      </div>
      <section
  id="aboutus"
  className="w-full h-auto lg:h-[70vh] flex flex-col lg:flex-row bg-white items-center justify-between"
>
  <div className="flex flex-col h-full w-full lg:w-[55%] text-black m-7 mt-[15rem] ml-9 p-8">
    <h1 className="text-2xl lg:text-4xl font-semibold">About Us</h1>
    <p className="text-gray-600 my-5 leading-[1.25rem] lg:leading-[1.5rem] text-base lg:text-lg w-full lg:w-[80%]">
      {`ReFlow Technologies is a leading provider of Industrial IoT solutions that help industries optimize their operations and reduce costs. Our cutting-edge products and services are designed to enhance efficiency, safety, and sustainability across various sectors.`}
    </p>
    <div className="flex items-center h-[20%]">
      <Link
        href="/register"
        className="text-sm bg-black text-white border border-black hover:bg-white hover:text-black py-3 px-6 rounded-3xl"
      >
        {`Contact Us`}
      </Link>
    </div>
  </div>



  <div className="relative h-[50%] w-full lg:w-[50%] m-3 mr-[6rem] rounded-3xl ">
    <Image
      src="/lastimage.jpeg"
      alt="Founder Image 2"
      layout="fill"
      objectFit="cover"
      className="rounded-3xl"
    />
  </div>
</section>
    </div>
  );
}
