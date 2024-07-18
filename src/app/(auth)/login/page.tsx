import React from 'react'
import Hero from "../../../components/Hero";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import {Login} from './login';

function page() {
  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
    
  )
}

export default page