"use client";

import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Container from "@/atoms/Container";
import { MenuTwoTone, ToggleOff, ToggleOn, Close, SportsEsports } from "@mui/icons-material";
import LeftSideNav from "./LeftSide";
import debounce from "lodash.debounce";
import { motion, AnimatePresence } from "framer-motion";
import ColorMatchGame from "./ColorMatchGame";

const Header = ({
  mode = "Dark",
  setMode,
  setNavigationChange,
  sectionRefs,
}) => {
  const router = useRouter();
  const [showSideBar, setShowSideBar] = useState(false);
  const [showGame, setShowGame] = useState(false);
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
      Dark: "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900",
      Light: "bg-white/95 border-b border-gray-200",
    },
    ButtonOptionsCol: {
      Dark: `text-white items-center leading-5 p-3 whitespace-pre
        hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white bg-slate-700/50`,
      Light:
        "text-gray-700 items-center leading-5 text-lg p-2 whitespace-pre hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 hover:text-white bg-gray-100",
    },
    textColor: {
      Dark: "text-gray-100",
      Light: "text-gray-800",
    },
    Logo: {
      Dark: "bg-gradient-to-r from-cyan-500 to-blue-500",
      Light: "bg-gradient-to-r from-cyan-400 to-blue-400",
    },
    MenuBarSec: {
      Dark: "bg-gradient-to-b from-slate-900 to-slate-800",
      Light: "bg-white",
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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`header fixed top-0 w-full pt-2.5 md:py-3 z-50 backdrop-blur-md ${HeaderColors.sectionBg[mode]} shadow-lg`}
    >
      <Container
        className="flex items-center justify-between py-2 hidden md:block font-bold text-lg"
        type="type1"
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-row w-full flex-row-reverse justify-between">
            {menus.map((menu, index) => {
              return (
                <Link
                  key={index}
                  href={menu.url}
                  onClick={() => {
                    setNavigationChange(menu.url);
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mr-6 md:min-w-10 lg:min-w-[190px] p-3 text-center text-[20px] rounded-xl transition-all duration-300
                    ${HeaderColors.ButtonOptionsCol[mode]}
                    ${
                      menu.isActive &&
                      (mode === "Dark"
                        ? "md:bg-white md:text-black shadow-xl"
                        : "md:bg-[#4FBFD7] md:text-white shadow-xl")
                    }
                    `}
                  >
                    {menu.value}
                  </motion.div>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-4">
            {/* Game Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowGame(true)}
              className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg hover:shadow-xl transition-all"
              title="Play Color Match Game"
            >
              <SportsEsports style={{ fontSize: 28, color: "white" }} />
            </motion.button>

            {/* Mode Toggle */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`cursor-pointer flex items-center gap-2 text-lg font-bold ${
                mode === "Dark" ? "text-white" : "text-black"
              }`}
              onClick={onChangeMode}
            >
              {mode === "Dark" ? "Light" : "Dark"}
              {mode === "Dark" ? (
                <ToggleOff
                  fontSize="large"
                  style={{ fontSize: 50, color: "white" }}
                />
              ) : (
                <ToggleOn fontSize="large" style={{ fontSize: 50 }} />
              )}
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Mobile Menu & Game Buttons */}
      <div className="block md:hidden px-4 flex items-center justify-between">
        <motion.div
          whileTap={{ scale: 0.9 }}
          className={`cursor-pointer ${HeaderColors.textColor[mode]}`}
          onClick={() => setShowSideBar(true)}
        >
          <MenuTwoTone fontSize="large" style={{ fontSize: 40 }} />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowGame(true)}
          className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg"
        >
          <SportsEsports style={{ fontSize: 28, color: "white" }} />
        </motion.button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {showSideBar && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setShowSideBar(false)}
            />
            <motion.div
              initial={{ x: -350 }}
              animate={{ x: 0 }}
              exit={{ x: -350 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`h-screen fixed left-0 top-0 w-[85vw] max-w-[350px] z-50 shadow-2xl ${HeaderColors.MenuBarSec[mode]}`}
              ref={dropRef}
            >
              <LeftSideNav
                onChangeMode={onChangeMode}
                setShowSideBar={setShowSideBar}
                mode={mode}
                wrapperRef={wrapperRef}
                HeaderColors={HeaderColors}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Color Match Game */}
      <ColorMatchGame
        isOpen={showGame}
        onClose={() => setShowGame(false)}
        mode={mode}
      />
    </motion.header>
  );
};

export default Header;
