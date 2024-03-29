"use client";

import React from "react";
import Image from "next/image";
import { HeaderList } from "@/utils/constants";
import { useRouter } from "next/navigation";
// import Logo from '@atoms/Logo';
import Link from "next/link";
import Logo from "@/atoms/Logo";
import { ToggleOff, ToggleOn } from "@mui/icons-material";

function LeftSideNav({
  isMobileView,
  onChangeMode,
  setShowSideBar,
  mode,
  wrapperRef,
  HeaderColors,
}) {
  const router = useRouter();
  const activeRoute = (route) => {
    // const routePaths = route.split('/');
    // const paths = router?.qyery?.split('/');
    // console.log('HeaderList', HeaderList, route, paths)
    // if (paths && paths.length > 2) {
    //     if (/^[[][a-zA-z0-9]*$/.test(paths[2])) {
    //         return routePaths[0] === paths[1];
    //     }
    //     return routePaths[1] === paths[2]
    // } else if (routePaths && routePaths.length < 2) {
    //     return routePaths[0] === paths[1]
    // } else {
    //     return false
    // }
  };

  return (
    <div
      className={`w-full block md:hidden pt-10 text-center h-screen w-[280px] opacity-100 `}
    >
      <div
        className={`py-5  pl-7 ml-20   rounded-2xl w-40  
        ${ mode === "Dark" ? "bg-white " : "bg-[#4FBFD7] "}

        `}
      >
        <Link href={`/`} className=" bg-blue md:block">
          <Logo
            desktopLogoClassName={`hidden md:inline-block flex rounded-2xl p-2 `}
            mobileLogoClassName="inline-hidden md:hidden w-20"
            alt="portfolio Logo"
            src={`/images/portfolio_logo.svg`}
            mobileLogoSrc={`/images/portfolio_logo.svg`}
            isMobileLogo={true}
            width="84"
            height="26"
            M_width="80"
            M_height="10"
          />
        </Link>
      </div>

      <div
        className={`pl-[30px] pb-12 pt-8  h-[calc(100%-4rem)] no-scrollbar overflow-y-auto border-b border-[#F0F1F1] `}
        ref={wrapperRef}
      >
        {HeaderList?.map((item) => (
          <React.Fragment key={item.name}>
            <div
              className={`flex flex-row mt-[30px] items-center h-13 hover:text-black   rounded-xl w-11/12  p-2
             ${ mode === "Dark" ? "border-2 " : "border-2 border-black	 "}

              `}
              onClick={() => router.push(`/${item.route}`)}
            >
              {item.icon && (
                <item.icon
                  fontSize="large"
                  style={{
                    fontSize: 25,
                    color: `${mode == "Dark" ? "white" : "black"}`,
                  }}
                ></item.icon>
              )}
              <span
                className={`font-Nunito font-bold md:text-base text-3xl cursor-pointer w-full text-left ms-2 ${
                  mode === "Dark" ? "text-white " : "text-black "
                }`}
              >
                {" "}
                {item.value}{" "}
              </span>
            </div>
          </React.Fragment>
        ))}
        <div
          className={`text-start cursor-pointer   text-3xl mt-10 ${
            mode === "Dark" ? "text-white " : "text-black"
          }`}
          onClick={onChangeMode}
        >
          {mode == "Dark" ? "Light" : "Dark"}
          {mode == "Dark" ? (
            <ToggleOff
              fontSize="large"
              style={{ fontSize: 80, color: "white" }}
            ></ToggleOff>
          ) : (
            <ToggleOn fontSize="large" style={{ fontSize: 80 }}></ToggleOn>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftSideNav;

LeftSideNav.defaultProps = {
  isMobileView: false,
};
