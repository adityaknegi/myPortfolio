"use client"

import Header from "@/components/common/header";
import Home from '@/components/HomePage/home';
import Journey from '@/components/HomePage/Journey';
import AboutMe from '@/components/HomePage/AboutMe';

import Contact from '@/components/HomePage/Contact';

import Footer from '@/components/Footer/Footer';
import { useEffect, useState} from 'react'

// export const metadata = {
//     title: 'Aditya Kumar',
//   };

  
export default function indexPage(props) {

  const [navigationChange, setNavigationChange]= useState('')
  const [mode, setMode]= useState("Light")


 // Update local storage when the mode changes


  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {

      const hash = window?.location?.hash;
      if (hash) document.querySelector(hash).scrollIntoView();
      }
    }, 0);
  }, [navigationChange])

  return (
    <>
      <Header mode={mode} setMode={setMode} setNavigationChange={setNavigationChange}/>
      <Home     mode={mode}/>
      <AboutMe  mode={mode}/>
      <Journey  mode={mode}/>
      <Contact  mode={mode}/>
      <Footer   mode={mode}/>
    </>
  )
}
