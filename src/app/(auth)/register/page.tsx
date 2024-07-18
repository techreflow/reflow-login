import React from 'react'
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import {Signup} from "./signup";
import { InputOTPControlled } from './inputotp';
import { Input } from 'postcss';

function page() {
  return (
    <>
      <Header />
      <Signup />
      <Footer />
    </>
    
  )
}

export default page