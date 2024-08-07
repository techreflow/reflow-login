import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <img src="/lname.png" alt="ReFlow Logo" className="w-32 mb-4" />
          <div className="flex flex-col md:flex-row items-center">
            <span className="font-bold text-xl text-sky-500">Re</span>
            <span className="font-bold text-xl text-white">Flow Tech</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full md:w-auto space-y-8 md:space-y-0 md:space-x-16">
          <div>
            <h3 className="text-white text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">Terms & Condition</a></li>
              <li><a href="/login" className="text-gray-400 hover:text-white">Support Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-gray-400 hover:text-white">Alpha X Series</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white">Alpha X Series</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Alpha X Series</a></li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Dashboard</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
        <p className="text-sm">
          Copyright © 2024 Re Flow | All Rights Reserved | <a href="#" className="hover:text-white">Terms and Conditions</a> | <a href="#" className="hover:text-white">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;








// import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
// export default function Footer() {
//   return (
//     <footer className="bg-black text-white py-10">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
//           <div className="col-span-1 flex-col">
          
//           <img src="lname.png" alt="ok" />
          
          
          
          
//           </div>
          
          
//           <div className="mb-6 col-span-1">
//             <h2 className="text-lg font-semibold mb-2">Company</h2>
//             <ul>
//               <li className="mb-4"><a href="#" className="hover:underline">About Us</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">Contact Us</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">News</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">Leads</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">Commercial Policies</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">Terms & Conditions</a></li>
//             </ul>
//           </div>
//           <div className="mb-6 col-span-1">
//             <h2 className="text-lg font-semibold mb-2">Partnerships</h2>
//             <ul>
//               <li className="mb-4"><a href="#" className="hover:underline">x</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">y</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">z</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">l</a></li>
//             </ul>
//           </div>
//           <div className="mb-6 col-span-1">
//             <h2 className="text-lg font-semibold mb-2">Site Support</h2>
//             <ul>
//               <li className="mb-4"><a href="#" className="hover:underline">FAQs</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">Dashboard</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">Need Help</a></li>
//             </ul>
//           </div>
//           <div className="mb-6 col-span-1">
//             <h2 className="text-lg font-semibold mb-2">Related Businesses</h2>
//             <ul>
//               <li className="mb-4"><a href="#" className="hover:underline">Sensor Solutions</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">Utilities</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">Y</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">Real Time Analysis</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="mt-6 flex justify-center space-x-4">
//         <a href="#" className="text-black hover:text-gray-400">
//             <FaLinkedin size={24} />
//           </a>
//           <a href="#" className="text-black hover:text-gray-400">
//             <FaFacebook size={24} />
//           </a>
//           <a href="#" className="text-black hover:text-gray-400">
//             <FaTwitter size={24} />
//           </a>
//           <a href="#" className="text-black hover:text-gray-400">
//             <FaInstagram size={24} />
//           </a>
//           <a href="#" className="text-black hover:text-gray-400">
//             <FaYoutube size={24} />
//           </a>
//         </div>
//       </div>
//     </footer>
//   )
// }