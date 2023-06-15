"use client"

import Header from "@/components/common/header";
import Home from '@/components/HomePage/home';
import Journey from '@/components/HomePage/Journey';
import AboutMe from '@/components/HomePage/AboutMe';

import Contact from '@/components/HomePage/Contact';

import Footer from '@/components/Footer/Footer';
import {useState} from 'react'

// export const metadata = {
//     title: 'Aditya Kumar',
//   };

  
export default function indexPage(props) {

  const [mode, setMode]= useState('Dark')

  return (
    <>
      <Header mode={mode} setMode={setMode}/>
      <Home/>
      
      <AboutMe/>
      <Journey/>
      <Contact/>
      
      <Footer/>

    </>
  )
}
