"use client";
import Link from "next/link";
import Alphaxmodel from "./alphaxmodel";
import FAQ from "./faq";
import { getAuth } from "../app/actions/help";
import React, { useEffect, useState } from "react";

export default function Home() {

   
  const [session, SetSession] = useState<any>("");
  useEffect(() => {
    getAuth().then((session) => {
      SetSession(session);
    });
  }, []);


  return (
    <div className="bg-white">
      <section
        id="home"
        className="bg-[url('/industry.jpg')] w-[100vw] h-[60vh] bg-contain flex flex-col justify-center"
      >
        <div className="text-black text-4xl mb-4 mt-[1.5rem] font-semibold leading-[2.75rem] tracking-wide h-[100%] w-[40%] my-5 mx-[2rem] px-8 ">
          <span className="inline-block">Revolutionizing Chemical</span>
          <span className="inline-block">Efficiency with</span>
          <span className="block">Automation</span>
          <div className="text-lg text-gray-800 my-5 leading-[1.5rem] font-normal  ">
            <span className="inline-block">
              Achieve Zero Downtime, Zero Injuries, and{" "}
            </span>
            <span className="inline-block">
              {`Zero Financial Losses with Reflow's`}{" "}
            </span>
            <span className="inline-block">Cutting-Edge Control Systems </span>
          </div>
          <div className="flex items-center h-[30%] text-sm space-x-3 ">
            {session?<Link
              href="/#products"
              className="bg-white text-black border border-black hover:bg-black hover:text-white py-2 px-2 rounded-3xl"
            >
              Explore
            </Link>:<><Link
              href="/login"
              className="text-white bg-black py-2 px-5 rounded-3xl hover:text-black hover:bg-white hover:border-black hover:border"
            >
              Login
            </Link>
            
            <Link
              href="/#products"
              className="bg-white text-black border border-black hover:bg-black hover:text-white py-2 px-2 rounded-3xl"
            >
              Explore
            </Link> </>}

          </div>
        </div>
      </section>
      <div className="h-[0.3rem] bg-white"></div>
      <section
        id="products"
        className="flex  h-[48vh] ml-4 w-[100vw] justify-around bg-white"
      >
        <div className=" w-[40%] h-full flex items-center justify-center bg-contain overflow-hidden">
          <Alphaxmodel />
        </div>
        <div className=" flex flex-col h-[100vh] w-[55%] text-black  mb-4  p-8">
          <h1 className="text-4xl font-semibold">Our Product</h1>
          <p className="text-gray-600 my-5 leading-[1.5rem] text-lg w-[80%] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            molestiae, repellat officia natus at quas quisquam blanditiis dolore
            aspernatur nam illo quasi velit sit aperiam dolor aliquid
            consectetur, laborum sunt.
          </p>
          <div className="flex items-center h-[30%] mx-4">
            <Link
              href="/#products"
              className="text-sm bg-white text-black border border-black hover:bg-black hover:text-white py-2 px-2 rounded-3xl"
            >{`view more >`}</Link>
          </div>
        </div>
      </section>
      <div className="h-[2rem] bg-black flex justify-center text-xl ">
        {`"automate to innovate"`}
      </div>

      <section id="services" className="w-full h-[55vh] flex bg-[#00afef] items-center justify-between">
      <div className=" flex flex-col h-[100] w-[45%] text-white m-7 ml-9 p-8">
          <h1 className="text-4xl font-semibold">Services</h1>
          <p className="text-gray-600 mt-5 leading-[1.5rem] text-lg w-[90%] ">
          Use data to increase yield, make production faster, and cheaper with fewer resources than ever before. ReFlowMetrics -- Capture and analyse real-time data from your production to deliver actionable insights to drive the decisions that matte
          </p>
          <p className="text-white my-5 font-semibold leading-[1.5rem] text-lg w-[90%]">
           No expensive integrators, no custom development, no physical configuration. Finally, the production monitoring and analytics platform you deserve.
          </p>
          <div className="flex items-center h-[30%] mx-4">
            <Link
              href="/register"
              className="text-sm bg-black text-white border border-black hover:bg-white hover:text-black py-2 px-2 rounded-3xl"
            >{`view more >`}</Link>
          </div>
        </div>
       <div className="bg-[url('/placeholder.webp')] bg-contain h-[70%] rounded-3xl m-8 mr-[5rem] w-[35%]">
 

       </div>
      </section>

      <section id="faq">
        <FAQ/>
      </section>
      <div id="about" className="h-[3rem] bg-[#00afef] text-white flex justify-start items-center text-2xl ">
        <p className="px-[2rem]">Meet Our Fouders</p>
      </div>
      <section id="aboutus" className="w-full h-[55vh] flex bg-white items-center justify-between">
      <div className=" flex flex-col h-[100] w-[55%] text-black m-7 ml-9 p-8">
          <h1 className="text-4xl font-semibold">About Us</h1>
          <p className="text-gray-600 my-5 leading-[1.5rem] text-lg w-[80%] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            molestiae, repellat officia natus at quas quisquam blanditiis dolore
            aspernatur nam illo quasi velit sit aperiam dolor aliquid
            consectetur, laborum sunt.
          </p>
          <div className="flex items-center h-[20%] mx-4">
            <Link
              href="/register"
              className="text-sm bg-black text-white border border-black hover:bg-white hover:text-black py-2 px-2 rounded-3xl"
            >{`Contact Us`}</Link>
          </div>
        </div>
       <div className="bg-[url('/placeholder.webp')] bg-contain h-[50%] rounded-3xl m-3 mr-[2rem] w-[25%]">
       
 

       </div>
       <div className="bg-[url('/placeholder.webp')] bg-contain h-[50%] rounded-3xl m-3  mr-[2rem] w-[25%]">
       
 

       </div>
      </section>


    </div>
  );
}
