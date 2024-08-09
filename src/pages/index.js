import React from "react";
import Link from "next/link";
import Header from '../components/Header';
import Body from "@/components/Body";
import Footer from "@/components/Footer";


  export default function Home() {
  return (
    <>
    <div>
    <Header/>
      <Body/> 
     <Footer/>
    </div>
      
    </>
  );
}