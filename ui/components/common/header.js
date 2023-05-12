import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Container from '@/atoms/Container';
import Logo from '@/atoms/Logo';

const Header = () => {
  const router = useRouter();

  

  const menus = [
    {
      label: 'Contact',
      url: '#contact',
    },
    {
      label: 'About Me',
      url: '#aboutMe',
    },
    {
      label: 'Journey',
      url: '#journey',
    },
    {
      label: 'Home',
      url: '#home',
    },
  ];

  return (
    <header
      className={`header fixed top-0 w-full  h-24 md:h-20.25 relative  pt-2.5 md:py-6 z-50 shadow-md sticky border-2 bg-gray-50 `}
    >
      <Container className='flex items-center justify-between py-2 '>
        <div className='flex items-center justify-between container m-auto px-4 md:px-6 xl:px-0 '>
          <Link href={`/`} className='w-2/12 hidden md:block'>
            <Logo
              desktopLogoClassName='hidden md:inline-block flex '
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
                <Link key={index} href={menu.url}>
                  <div
                    className={` hover-rotate mr-6 font-bold  ${
                      router.asPath === menu.url ? 'md:active-border-bottom active-border-bottom ' : ''
                    }`}
                  >
                    {menu.label}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
