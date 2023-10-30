"use client";

import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Container from "@/atoms/Container";
import { MenuTwoTone, ToggleOff, ToggleOn } from "@mui/icons-material";
import LeftSideNav from "./LeftSide";
import debounce from "lodash.debounce"; // Import the debounce function

const Header = ({
  mode = "Dark",
  setMode,
  setNavigationChange,
  sectionRefs,
}) => {
  const router = useRouter();
  const [showSideBar, setShowSideBar] = useState(false);
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    setMode(initialMode);
    console.log(HeaderColors.sectionBg[mode]);
  }, [mode, setMode]);
  // ...
  const initialMode = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("mode") || "Dark";
    } else {
      return "Dark";
    }
  };
  useEffect(() => {
    localStorage?.setItem("mode", mode);
  }, [mode]);

  const HeaderColors = {
    sectionBg: {
      Dark: " bg-[#272b33] md:bg-black  ",
      Light: " bg-gray-50 border-b",
    },
    ButtonOptionsCol: {
      Dark: `text-white  items-center leading-5  p-3 whitespace-pre
        hover:bg-gray-50 hover:text-black   bg-white bg-opacity-10  `,
      Light:
        " text-black  items-center leading-5 text-lg p-2 whitespace-pre  hover:md:bg-gray-300   bg-black bg-opacity-10 border-b-black",
    },
    textColor: {
      Dark: "text-white ",
      Light: "text-gray-800 ",
    },
    Logo: {
      Dark: "bg-[#4FBFD7] ",
      Light: "text-gray-800 ",
    },
    MenuBarSec: {
      Dark: " bg-black md:bg-gray-300 ",
      Light: " bg-gray-50",
    },
  };

  const onChangeMode = () =>
    setMode((prev) => {
      if (prev === "Dark") {
        return "Light";
      } else {
        return "Dark";
      }
    });

  const [menus, setMenus] = useState([
    {
      label: "Contact",
      value: "Contact Me",
      url: "#contact",
      isActive: false,
    },

    {
      label: "Journey",
      url: "#journey",
      value: "My Journey",
      isActive: false,
    },
    {
      label: "AboutMe",
      url: "#aboutMe",
      value: "About Me",
      isActive: false,
    },
    {
      label: "Home",
      url: "#home",
      value: "Home",
      isActive: false,
    },
  ]);

  useEffect(() => {
    function handler(event) {
      if (wrapperRef.current && wrapperRef.current.contains(event.target)) {
        setShowSideBar(false);
      }
    }
    function compareIsActiveChanges(list1, list2) {
      if (list1.length !== list2.length) {
        return false;
      }

      return list1.some(
        (item1, index) => item1.isActive !== list2[index].isActive
      );
    }

    function handleScroll() {
      const scrollPosition = window.scrollY;

      const windowPostion = {
        Home: [0, 200],
        AboutMe: [201, 1254],
        Journey: [1255, 1699],
        Contact: [1700, 8900],
      };

      let updatedMenus = menus.map((menu) => {
        return {
          ...menu,
          isActive: !!(
            scrollPosition >= windowPostion[menu.label][0] &&
            scrollPosition <= windowPostion[menu.label][1]
          ),
        };
      });

      if (compareIsActiveChanges(menus, updatedMenus)) {
        setMenus(updatedMenus);
      }
    }
    const debouncedHandleScroll = debounce(handleScroll, 100);

    window.addEventListener("scroll", debouncedHandleScroll);
    window.addEventListener("click", handler, false);
    return () => {
      window.removeEventListener("click", handler, false);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dropRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropRef.current && !dropRef.current.contains(event.target)) {
        setShowSideBar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside, false);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, false);
    };
  }, [dropRef]);

  return (
    <header
      className={`header fixed top-0 w-full    relative  pt-2.5 md:py-3 z-50  sticky bg-black  ${HeaderColors.sectionBg[mode]} `}
    >
      <Container
        className="flex items-center justify-between py-2   hidden md:block font-bold text-lg"
        type="type1"
      >
        <div className="flex items-center justify-between ">
          <div className="flex flex-row w-full flex-row-reverse	 justify-between   ">
            {menus.map((menu, index) => {
              return (
                <Link
                  key={index}
                  href={menu.url}
                  onClick={() => {
                    setNavigationChange(menu.url);
                    // setMenus((prevState) => [
                    //   ...prevState.map((d) => ({
                    //     ...d,
                    //     ...(menu.id === d.id
                    //       ? { isActive: true }
                    //       : { isActive: false }),
                    //   })),
                    // ]);
                  }}
                >
                  <div
                    className={` mr-6  md:min-w-10 lg:min-w-[190px] p-3 text-center  text-[20px] border-b rounded-xl
                    
                    ${HeaderColors.ButtonOptionsCol[mode]}
                   
                    ${
                      menu.isActive &&
                      (mode === "Dark"
                        ? "md:bg-white md:text-black  "
                        : "md:bg-[#4FBFD7] ")
                    }
                    `}
                  >
                    {menu.value}
                  </div>
                </Link>
              );
            })}
          </div>
          <div
            className={`ml-2 cursor-pointer flex items-center gap-2 text-lg font-bold ${
              mode === "Dark" ? "text-white" : "text-black"
            }`}
            onClick={onChangeMode}
          >
            {mode === "Dark" ? "Light" : "Dark"}
            {mode === "Dark" ? (
              <>
                <ToggleOff
                  fontSize="large"
                  style={{ fontSize: 50, color: "white" }}
                />
              </>
            ) : (
              <>
                <ToggleOn fontSize="large" style={{ fontSize: 50 }} />
              </>
            )}
          </div>
        </div>
      </Container>
      <div
        className={`block md:hidden  ${showSideBar ? "hidden" : "block"} ${
          HeaderColors.textColor[mode]
        } `}
        onClick={() => setShowSideBar(true)}
      >
        <MenuTwoTone fontSize="large" style={{ fontSize: 33 }}></MenuTwoTone>
      </div>
      <div
        className={`h-screen -mt-2 block md:hidden w-[350px]   fixed	z-50 bg-opacity-90 ${
          HeaderColors.MenuBarSec[mode]
        }  ${showSideBar ? "block" : "hidden"} `}
        ref={dropRef}
      >
        <LeftSideNav
          onChangeMode={onChangeMode}
          setShowSideBar={setShowSideBar}
          mode={mode}
          wrapperRef={wrapperRef}
          HeaderColors={HeaderColors}
        />
      </div>
    </header>
  );
};

export default Header;
