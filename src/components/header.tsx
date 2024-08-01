import Link from 'next/link'
import {cn} from "@/utils/cn";
import { auth,signOut } from '@/auth';
import {redirect} from 'next/navigation';
import { set } from 'mongoose';
import { doSignOut } from "../app/actions/help";


export function SignOut()
{
  return(
    <form action={ doSignOut}>
     <button className="text-white bg-black py-2 px-5 rounded-3xl hover:text-black hover:bg-white hover:border-black hover:border" type="submit"> sign Out</button>
    </form>
  )
}




export default async function Header() {
  let flag=false;
  const session = await auth()
  if(session){
    flag=true;
  }
  return (
    <header className="bg-white p-4 shadow-sm border-b-[1px] ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
        <div className="text-lg">
          <Link href="/" className="font-bold text-2xl text-sky-500">Re</Link>
          <Link href="/" className="font-bold text-2xl  text-black">Flow Tech <sup className='text-gray-600 text-sm '>TM</sup></Link>
          </div>
        </div>
        <nav className="flex space-x-6">
          
        <Link href="/#home" className='group text-gray-600 transition-all duration-300 ease-in-out'>
        <p className="bg-left-bottom bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Home</p>
        </Link>
        <Link href="/#about" className='group text-gray-600 transition-all duration-300 ease-in-out'>
        <p className="bg-left-bottom bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">About Us</p>
        </Link>
        <Link href="/#products" className='group text-gray-600 transition-all duration-300 ease-in-out'>
        <p className="bg-left-bottom bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Products</p>
        </Link>
        <Link href="/#services" className='group text-gray-600 transition-all duration-300 ease-in-out'>
        <p className="bg-left-bottom bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Services</p>
        </Link>
        <Link href="/#" className='group text-gray-600 transition-all duration-300 ease-in-out' >
        <p className="bg-left-bottom bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Contact Us</p>
        </Link>
          
           
          
         
          
        </nav>
        <div className="flex items-center justify-evenly  space-x-4">
          {flag?<SignOut/>:<a href="/login" className="text-white bg-black py-2 px-5 rounded-3xl hover:text-black hover:bg-white hover:border-black hover:border">Login</a> }
          
          {flag?null:<Link href="/register" className="bg-white text-black border border-black hover:bg-black hover:text-white py-2 px-4 rounded-3xl">Register</Link>}
        </div>
      </div>

      
    </header>
  );
}