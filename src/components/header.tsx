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
     <button className="bg-sky-100 text-sky-600 hover:bg-sky-200 py-2 px-4 rounded-lg" type="submit"> sign Out</button>
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
    <header className="bg-gray-100 p-4 shadow-sm ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
        <div className="text-lg">
          <Link href="/" className="font-bold text-2xl text-sky-500">Re</Link>
          <Link href="/" className="font-bold text-2xl  text-black">Flow Tech</Link>
          </div>
        </div>
        <nav className="flex space-x-6">
          <a href="#product" className="text-gray-600 hover:text-black">Services</a>
          <a href="#features" className="text-gray-600 hover:text-black">Pricing</a>
          <a href="#pricing" className="text-gray-600 hover:text-black">Support</a>
          <a href="#company" className="text-gray-600 hover:text-black">Contact us</a>
        </nav>
        <div className="flex items-center space-x-4">
          {flag?<SignOut/>:<a href="/login" className="text-gray-600 hover:text-black">Log In</a> }
          
          {flag?null:<Link href="/register" className="bg-sky-100 text-sky-600 hover:bg-sky-200 py-2 px-4 rounded-lg">Register</Link>}
        </div>
      </div>

      
    </header>
  );
}