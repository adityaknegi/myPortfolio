"use client"

import React, {useEffect, useLayoutEffect, useState, useRef} from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Container from '@/atoms/Container';
import Logo from '@/atoms/Logo';
import {MenuTwoTone, ToggleOff, ToggleOn} from '@mui/icons-material';
import LeftSideNav from './LeftSide';
import debounce from 'lodash.debounce'; // Import the debounce function

const Header = ({mode='Dark', setMode, setNavigationChange, sectionRefs}) => {
  const router = useRouter();
  const [showSideBar, setShowSideBar] = useState(false)
	const wrapperRef = useRef(null);

  

  useLayoutEffect(() => {
    setMode(initialMode)
    console.log(HeaderColors.sectionBg[mode])
  }, [mode, setMode]);
    // ...
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

   const HeaderColors = {
    sectionBg: {
      Dark: ' bg-[#272b33] md:bg-gray-900 ',
      Light: '  md:bg-blue-50'
    },
    ButtonOptionsCol:{
      Dark: ' text-white  items-center leading-5 text-sm p-2 whitespace-pre  hover:md:bg-black ',
      Light: ' text-[#4FBFD7]  items-center leading-5 text-sm p-2 whitespace-pre  hover:md:bg-[white] '
    },
    textColor:{
      Dark: 'text-white ',
      Light: 'text-gray-800 '
    },
    Logo: {
      Dark: 'bg-[#4FBFD7] ',
      Light: 'text-gray-800 '
    },
    MenuBarSec:{
      Dark: ' bg-[#1e2128] md:bg-white ',
      Light: ' bg-gray-50'

    }
  }
  
  const onChangeMode = () => setMode(prev=> {if(prev==='Dark'){return 'Light' }else {return 'Dark'}})

  const [menus, setMenus] = useState([
    {
      label: 'Contact',
      value: 'Contact Me',
      url: '#contact',
      isActive: false
    },
   
    {
      label: 'Journey',
      url: '#journey',
      value: 'My Journey',
      isActive: false

    },
    {
      label: 'AboutMe',
      url: '#aboutMe',
      value: 'About Me',
      isActive: false
    },
    {
      label: 'Home',
      url: '#home',
      value: 'Home',
      isActive: false
    }
  ]);
 
  useEffect(() => {
		function handler(event) {
      if (wrapperRef.current && wrapperRef.current.contains(event.target)) {
        setShowSideBar(false)
      	}
    }
    function compareIsActiveChanges(list1, list2) {
      if (list1.length !== list2.length) {
          return false;
      }

      return list1.some((item1, index) => item1.isActive !== list2[index].isActive);

  }
  
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const windowPostion = {
        Home:[0,400],
        AboutMe: [400,800],
        Journey: [800,1400],
        Contact: [1400, 2200]
      }

      let  updatedMenus = menus.map((menu) => {
        return {
          ...menu,
          isActive: !!(scrollPosition >= windowPostion[menu.label][0] && scrollPosition <= windowPostion[menu.label][1])
        }

        
        
      });

      if((compareIsActiveChanges(menus, updatedMenus))){
        setMenus(updatedMenus)
      }
    }
    const debouncedHandleScroll = debounce(handleScroll, 100);

   
    window.addEventListener("scroll", debouncedHandleScroll)
		window.addEventListener('click', handler, false)
		return () => {
      window.removeEventListener('click', handler, false);       
      window.removeEventListener("scroll", handleScroll)
  }
	}, [])


  return (
    <header
      className={`header fixed top-0 w-full  h-12 md:h-24 md:h-20.25 relative  pt-2.5 md:py-6 z-50 shadow-md sticky   ${HeaderColors.sectionBg[mode]} `}
    >

      
      <Container className='flex items-center justify-between py-2   hidden md:block' type='type1'>    
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
          <div className='flex flex-row w-full flex-row-reverse	 justify-between text-sm mt-5 md:mt-0  px-20 '>
            {menus.map((menu, index) => {
              return (
                <Link key={index} href={menu.url} onClick={()=>setNavigationChange(menu.url)}>
                  <div
                    className={` mr-6 font-bold    p-3 min-w-20
                    rounded-full 
                    hover:animate-pulse
                    ${HeaderColors.ButtonOptionsCol[mode]}
                   
                    ${
                      menu.isActive && (mode ==='Dark' ? 'md:bg-black  ': 'md:bg-[#4FBFD7] md:bg-opacity-20')
                    }`
                  
                  
                  }
                  >
                    {menu.value}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className={`ml-2 cursor-pointer ${mode ==='Dark' ?'text-white':'text-black'}`}  onClick={onChangeMode}>
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
      <div className={`block md:hidden  ${showSideBar ? 'hidden': 'block'} ${HeaderColors.textColor[mode]} `} onClick={()=>setShowSideBar(true)}>
              <MenuTwoTone fontSize="large" style={{ fontSize: 33}}  >
            </MenuTwoTone>
      </div>
      <div className={`h-screen -mt-2 block md:hidden w-[310px] z-50  ${HeaderColors.MenuBarSec[mode]}  ${showSideBar ? 'block': 'hidden'} ` } >
          <LeftSideNav onChangeMode={onChangeMode} setShowSideBar={setShowSideBar} mode={mode} wrapperRef={wrapperRef} HeaderColors={HeaderColors}/>
        </div>
    </header>
  );
};

export default Header;
