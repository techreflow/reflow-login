import React, { Suspense } from 'react'
import Hero from "../../components/Hero";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Reset from './reset';

function page() {
  return (
    <>
      <Header />
      <Suspense fallback={<p className='transition-all duration-300 ease-in-out loading'></p>}>
         <Reset />
        </Suspense> 
      <Footer />
    </>
    
  )
}

export default page