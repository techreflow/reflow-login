import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 lg:py-10">
      <div className="container mx-auto px-4 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col justify-start items-start">
          <img
            src="/invertedlname.png"
            alt="ReFlow Logo"
            className="h-[150px] w-[200px]"
          />
        </div>
        <div>
          <h3 className="text-white text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
            <li><a href="/terms" className="text-gray-400 hover:text-white">Terms & Condition</a></li>
            <li><a href="/support" className="text-gray-400 hover:text-white">Support Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg mb-4">Products</h3>
          <ul className="space-y-2">
            <li><a href="#products" className="text-gray-400 hover:text-white">Alpha X Series</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg mb-4">Platform</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Dashboard</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-10 mt-16 border-t border-gray-700 pt-4 text-start text-gray-400">
        <p className="text-sm">
          Copyright © 2024 ReFlow Technologies Pvt Ltd | All Rights Reserved | 
          <a href="#" className="hover:text-white"> Terms and Conditions </a> | 
          <a href="#" className="hover:text-white"> Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
