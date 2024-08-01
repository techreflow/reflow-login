import React from "react";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-gray-500 font-medium text-sm mb-1"
    >
      {children}
    </label>
  );
};
