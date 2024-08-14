"use client";
import { useState } from "react";

const questions: string[] = [
  "What does ReFlow Technologies specialize in?",
  "What is the ReFlow Alpha X series?",
  "How does ReFlow Technologies help industries reduce downtime and maintenance costs?",
  "What makes ReFlow Technologies' solutions unique?",
  "What kind of industries benefit from ReFlow Technologies' solutions?"
];

const answers: string[] = [
  "ReFlow Technologies specializes in enhancing industrial processes through advanced Industrial IoT (IIoT) 4.0 solutions. Our products and services focus on real-time data acquisition, monitoring, and analysis to optimize efficiency and reduce operational costs.",
  "The ReFlow Alpha X series is a suite of IIoT devices designed to collect and transmit data from industrial sensors. It offers seamless integration, real-time analytics, and online calibration, helping industries monitor and optimize their processes with minimal downtime.",
  "Our solutions provide real-time monitoring and predictive analytics, enabling early detection of potential issues. This proactive approach minimizes unplanned downtime and reduces the frequency and cost of maintenance.",
  "We offer a combination of robust hardware and intelligent software that seamlessly integrates with existing systems. Our focus on cost-effective installations, minimal maintenance, and comprehensive data analysis ensures that industries can operate smoothly and efficiently.",
  "Our solutions cater to a wide range of industries, including manufacturing, process industries, and utilities. Any industry that relies on accurate data collection and analysis to optimize their operations can benefit from our offerings."
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white flex flex-col w-full justify-center items-center px-4">
      <h1 className="text-black font-semibold text-4xl mt-9 mb-4">Frequently Asked Questions</h1>
      <div className="w-full max-w-5xl mb-6">
        {questions.map((q, index) => (
          <div key={index} className="border-t border-gray-300 py-[1.5rem]">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-700">{q}</h2>
              <button 
                className="text-2xl font-bold text-gray-700"
                onClick={() => toggleAnswer(index)}
              >
                {openIndex === index ? '×' : '+'}
              </button>
            </div>
            {openIndex === index && (
              <p className="text-gray-700 mt-4">{answers[index]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
