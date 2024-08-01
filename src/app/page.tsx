import Image from "next/image";
import Hero from "../components/Hero";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero2 from "../components/hero2";
import Home2 from "../components/home"
import { SidebarDemo } from "@/components/SidebarDemo";




export default function Home() {
  return (
    <>
    
    
    <Header />
    {/* <SidebarDemo/> */}
    <Home2/>
    {/* <Hero />
    <Hero2 /> */}
    {/* <HomePage/> */}
    <Footer/>
   
    </>
  );
}
