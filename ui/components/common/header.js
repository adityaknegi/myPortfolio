import { useEffect, useState } from "react";
const { default: Logo } = require("atoms/Logo")
import Link from 'next/link'
import { useRouter } from "next/router";

const Header = ({  ...properties }) => {
	const router = useRouter();

    useEffect(() => {

    },[])


	const menus = [
		{
			label : 'Home',
			url : '/'
		},
		{
			label : 'Skill',
			url : '/'
		},
		{
			label : 'Projects',
			url : '/'
		},
		{
			label : 'About Me',
			url : '/'
		},
        {
			label : 'Contact',
			url : '/'
		},
	]
    return (
        <>
        <header className={`header w-full bg-orange-400	 h-40 md:h-20.25 relative  pt-2.5 md:py-4 z-20`}>
            <div className="flex items-center justify-between container m-auto px-4 md:px-6 xl:px-0">

                <Link href={`/`} >
                    <Logo 
                        desktopLogoClassName="hidden md:inline-block "
                        mobileLogoClassName="inline-block md:hidden w-9"
                        alt="portfolio Logo"
                        src={`/images/portfolio_logo.svg`}
                        mobileLogoSrc={`/images/portfolio_logo.svg`}
                        isMobileLogo={true}
                        width="154"
                        height="36"
                        M_width="32"
                        M_height="33"
                        />
                </Link>
                {
                menus.map((menu, index) => {
                    return (
                        <Link key={index} href={menu.url}>
                            <div className={`text-white mr-6 font-bold ${router.pathname === menu.url ? 'md:active-border-bottom active-border-bottom' : ''}`}>
                                {menu.label}
                            </div>
                        </Link>
                    )
                })
            }
        </div>

        </header>
        </>
    )
}
export default Header;