import React, { Suspense } from 'react'
import Hero from "../../components/Hero";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Login from './Loggedin';
import "./loggedin.css"

function page() {
  return (
    <>
      <Header />
      <Suspense fallback={<p className='transition-all duration-300 ease-in-out loading'></p>}>
         <Login />
        </Suspense> 
      <Footer />
    </>
    
  )
}

export default page