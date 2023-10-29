"use client"

import Header from "@/components/common/header";
import Home from '@/components/HomePage/home';
import Journey from '@/components/HomePage/Journey';
import AboutMe from '@/components/HomePage/AboutMe';

import Contact from '@/components/HomePage/Contact';

import Footer from '@/components/Footer/Footer';
import { useEffect, useState, useRef} from 'react'
import EclipseShape from '@/components/common/EclipseShape'

// export const metadata = {
//     title: 'Aditya Kumar',
//   };

  
function IndexPage(props) {

  const [navigationChange, setNavigationChange]= useState('')
  const [mode, setMode]= useState("Light")




 // Update local storage when the mode changes
 const sectionRefs = {
  Contact: useRef(null),
  Journey: useRef(null),
  AboutMe: useRef(null),
  Home: useRef(null)
};


  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {

      const hash = window?.location?.hash;
      if (hash) document.querySelector(hash)?.scrollIntoView();
      if(hash=='#home') window.scrollTo(0, 0);;
      }
    }, 0);
  }, [navigationChange])

  return (
    <>
      <Header mode={mode} setMode={setMode}  setNavigationChange={setNavigationChange} sectionRefs={sectionRefs}/>
      <div className=" fixed h-[800px] w-full  ">
      <Home     mode={mode} useRef={sectionRefs['Home']}/>

      </div>
      {/* <div className="mb-[800px] md:mb-[800px]"></div> */}
     
      <AboutMe  mode={mode} useRef={sectionRefs['AboutMe']}/>
      {/* <EclipseShape alt='ba'/> */}
      <Journey  mode={mode} useRef={sectionRefs['Journey']}/>

      <Contact  mode={mode} useRef={sectionRefs['Contact']}/>
      <Footer   mode={mode} />
    </>
  )
}

export default IndexPage
