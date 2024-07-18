import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="bg-white text-black py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 flex-col">
          
          <img src="lname.png" alt="ok" />
          <a href="mailto:prashantair10@gmail.com">
          <button className="bg-black mx-12  hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded">
            Contact Us
          </button>
          </a>
          
          
          
          </div>
          
          
          <div className="mb-6 col-span-1">
            <h2 className="text-lg font-semibold mb-2">Company</h2>
            <ul>
              <li className="mb-4"><a href="#" className="hover:underline">About Us</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Contact Us</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">News</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Leads</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Commercial Policies</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="mb-6 col-span-1">
            <h2 className="text-lg font-semibold mb-2">Partnerships</h2>
            <ul>
              <li className="mb-4"><a href="#" className="hover:underline">x</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">y</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">z</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">l</a></li>
            </ul>
          </div>
          <div className="mb-6 col-span-1">
            <h2 className="text-lg font-semibold mb-2">Site Support</h2>
            <ul>
              <li className="mb-4"><a href="#" className="hover:underline">FAQs</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Dashboard</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Need Help</a></li>
            </ul>
          </div>
          <div className="mb-6 col-span-1">
            <h2 className="text-lg font-semibold mb-2">Related Businesses</h2>
            <ul>
              <li className="mb-4"><a href="#" className="hover:underline">Sensor Solutions</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Utilities</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Y</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Real Time Analysis</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
        <a href="#" className="text-black hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-black hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-black hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-black hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-black hover:text-gray-400">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}