import React from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import About from "./About";
import Body from "@/components/Body";
import Layout from '../components/Layout'
import Contact from "./Contact";


// import { 
//   createBrowserRouter, RouterProvider } from 'react-router-dom';

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout/>,
  //     children:[
  //       {path: "/", element:<Home/>},
  //       {path: "login", element: <LogIn/>},
  //       {path:"about", element: <About/>},
  //       {path:"contact", element: <Contact/>},
  //     ]
  //   },
    
  // ]);





  export default function Home() {
  return (
    <>
    
      <h1>Hello World</h1>
      <Body/>
      {/* <About/> */}
      {/* <RouterProvider router={router} /> */}
     <Footer/>
    </>
  );
}
