"use client"

import React, {useEffect, useLayoutEffect} from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Container from '@/atoms/Container';
import Logo from '@/atoms/Logo';
import {ToggleOff, ToggleOn} from '@mui/icons-material';
import {HeaderColors} from '@/utils/constants'

const Header = ({mode='Dark', setMode, setNavigationChange}) => {
  const router = useRouter();

  

  const menus = [
    {
      label: 'Contact',
      url: '#contact',
    },
    {
      label: 'AboutMe',
      url: '#aboutMe',
    },
    {
      label: 'Journey',
      url: '#journey',
    },
    {
      label: 'Home',
      url: '#home',
    }
  ];
  useEffect(() => {
    setMode(initialMode)
    console.log(HeaderColors.sectionBg[mode])
  }, []);

  const initialMode = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("mode") || "Light";
    } else {
      return "Light";
    }
  };
  useEffect(() => {
    localStorage?.setItem('mode', mode);
  }, [mode]);

 

  
  return (
    <header
      className={`header fixed top-0 w-full  h-24 md:h-20.25 relative  pt-2.5 md:py-6 z-50 shadow-md sticky  ${HeaderColors.sectionBg[mode]}`}
    >
      
      <Container className='flex items-center justify-between py-2 ' type='type1'>    
        <div className='flex items-center justify-between container m-auto px-4 md:px-6 xl:px-0 '>
          <Link href={`/`} className='w-2/12 hidden md:block'>
            <Logo
              desktopLogoClassName={`hidden md:inline-block flex rounded-2xl p-2 ${HeaderColors.Logo[mode]}`}
              mobileLogoClassName='inline-hidden md:hidden w-9'
              alt='portfolio Logo'
              src={`/images/portfolio_logo.svg`}
              mobileLogoSrc={`/images/portfolio_logo.svg`}
              isMobileLogo={true}
              width='84'
              height='26'
              M_width='32'
              M_height='33'
            />
          </Link>
          <div className='md:w-10/12 flex flex-row-reverse text-sm mt-5 md:mt-0 '>
            {menus.map((menu, index) => {
              return (
                <Link key={index} href={menu.url} onClick={()=>setNavigationChange(menu.url)}>
                  <div
                    className={` hover-rotate mr-6 font-bold  text-[#4FBFD7] ${
                      router.asPath === menu.url ? 'md:active-border-bottom active-border-bottom  ' : ''
                    }`}
                  >
                    {menu.label}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className={`ml-2 cursor-pointer ${mode ==='Dark' ?'text-white':'text-black'}`}  onClick={()=>setMode(prev=> {
            if(prev==='Dark'){
              return 'Light' 
              }else {
                return 'Dark'
                }
                }
                )
                }>
            {mode =='Dark' ? 'Light' : 'Dark'}
            {mode =='Dark' ? 
            <ToggleOff  fontSize="large" style={{ fontSize: 33, color:'white' }}  >
            </ToggleOff>:
            <ToggleOn fontSize="large" style={{ fontSize: 33 }}  >
            </ToggleOn>
            }
          </div>
         
          
        </div>
      </Container>
    </header>
  );
};

export default Header;
