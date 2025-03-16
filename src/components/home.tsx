import Link from "next/link";
import Alphaxmodel from "./alphaxmodel";
import FAQ from "./faq";
import { getAuth } from "../app/actions/help";
import React from "react";
import Products from "./products";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-gray-800">ReFlow</a>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#home" className="text-gray-600 hover:text-blue-500">Home</a></li>
            <li><a href="#why-reflow" className="text-gray-600 hover:text-blue-500">Why ReFlow?</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-[url('/industry.jpg')] w-full h-screen bg-cover flex flex-col justify-center items-center px-4 py-[5rem] lg:px-8 text-center"
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 text-white text-2xl lg:text-4xl mb-4 font-semibold leading-[2rem] tracking-wide w-full lg:w-[50%] my-5 mx-auto px-8">
          <span className="inline-block">Increasing Manufacturing Performance</span>
          <span className="inline-block">of Pharma Industries using AI Devices</span>

          <div className="text-base lg:text-lg text-gray-200 my-[50px] leading-[1.5rem]">
            <span className="inline-block">Achieve Zero Downtime, Zero Injuries, and </span>
            <span className="inline-block">{`Zero Financial Losses with ReFlow's`} </span>
            <span className="inline-block">Cutting-Edge Control Systems</span>
          </div>
        </div>
      </section>

      {/* Why ReFlow Section */}
      <section id="why-reflow" className="py-16 bg-white">
        <div className="container mx-auto text-center px-6 lg:px-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-10">Why Choose ReFlow?</h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-100 shadow-md rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Automated Process Optimization</h3>
              <p className="text-gray-600">Maximize efficiency with AI-driven process control.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-gray-100 shadow-md rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Real-Time Monitoring</h3>
              <p className="text-gray-600">Stay ahead with instant data insights and analytics.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-gray-100 shadow-md rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Predictive Maintenance</h3>
              <p className="text-gray-600">Prevent breakdowns before they happen with AI-powered predictions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-300 mb-8">Let's revolutionize your factory together.</p>
          <a href="mailto:contact@reflow.com" className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
