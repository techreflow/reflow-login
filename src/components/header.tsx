import Link from 'next/link';
import Image from "next/image";
import { auth } from '@/auth';
import { doSignOut } from "../app/actions/help";

export function SignOut() {
  return (
    <form action={doSignOut}>
      <button className="text-white bg-black py-2 px-5 rounded-3xl hover:text-black hover:bg-white hover:border-black hover:border text-sm lg:text-base" type="submit">Sign Out</button>
    </form>
  );
}

export default async function Header() {
  let flag = false;
  const session = await auth();
  if (session) {
    flag = true;
  }
  return (
    <header className="w-[100vw]  h-[118px] bg-white border border-solid border-neutral-300">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center mb-6 ">
          <Image 
            src="/translogo.png" 
            alt="Logo" 
            width={237} 
            height={68}
            className='mt-[25px] self-center' 
          />
      
        </div>

        <nav className="hidden lg:flex lg:items-center  text-xl justify-end space-x-[30px] ">
          <Link href="/#home" className='group text-[#1d1d1d] transition-all duration-300 ease-in-out'>
            <p className="bg-left-bottom bg-gradient-to-r from-[#00afef] to-[#00afef] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Home</p>
          </Link>
          <Link href="/about" className='group text-[#1d1d1d] transition-all duration-300 ease-in-out'>
            <p className="bg-left-bottom bg-gradient-to-r from-[#00afef] to-[#00afef] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">About Us</p>
          </Link>
          <Link href="/#products" className='group text-[#1d1d1d] transition-all duration-300 ease-in-out'>
            <p className="bg-left-bottom bg-gradient-to-r from-[#00afef] to-[#00afef] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Products</p>
          </Link>
          <Link href="/servc" className='group text-[#1d1d1d] transition-all duration-300 ease-in-out'>
            <p className="bg-left-bottom bg-gradient-to-r from-[#00afef] to-[#00afef] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Services</p>
          </Link>
          <Link href="/contact" className='group text-[#1d1d1d] transition-all duration-300 ease-in-out'>
            <p className="bg-left-bottom bg-gradient-to-r from-[#00afef] to-[#00afef] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Contact Us</p>
          </Link>
        </nav>

        <div className="flex items-center justify-evenly space-x-[30px]  ">
          {flag ? <SignOut /> : <a href="/login" className="text-[#1d1d1d] bg-white py-3 px-6 rounded-3xl border border-[#1d1d1d] hover:bg-[#1d1d1d] hover:text-white text-sm lg:text-base">Login</a>}
          {flag ? null : <Link href="/register" className="bg-white text-[#1d1d1d] border border-[#1d1d1d] hover:bg-[#1d1d1d] hover:text-white py-3 px-6 rounded-3xl text-sm lg:text-base">Register</Link>}
        </div>
      </div>
    </header>
  );
}
