import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-black focus:ring-0 placeholder-gray-500 text-black"
    />
  );
};
