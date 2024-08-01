"use client";
import { useState } from "react";

const questions: string[] = [
  "What is Webflow and why is it the best website builder?",
  "What is your favorite template from BRIX Templates?",
  "How do you clone a Webflow Template?",
  "Why is BRIX Templates the best Webflow agency?"
];

const answers: string[] = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere.',
  'Answer for your favorite template from BRIX Templates.',
  'Answer for how to clone a Webflow Template.',
  'Answer for why BRIX Templates is the best Webflow agency.'
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white flex flex-col w-full justify-center items-center px-4">
      <h1 className="text-black text-4xl mt-9 mb-4">Frequently Asked Questions</h1>
      <p className="text-center text-gray-500 mb-8 w-[50%]">Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere.</p>
      <div className="w-full max-w-2xl mb-6">
        {questions.map((q, index) => (
          <div key={index} className="border-t border-gray-300 py-4">
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
              <p className="text-gray-700 mt-2">{answers[index]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
