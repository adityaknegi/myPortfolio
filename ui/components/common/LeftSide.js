"use client";

import React from "react";
import Image from "next/image";
import { HeaderList } from "@/utils/constants";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "@/atoms/Logo";
import { ToggleOff, ToggleOn, Close } from "@mui/icons-material";
import { motion } from "framer-motion";

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

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <div className={`w-full block md:hidden pt-6 px-4 h-screen opacity-100`}>
      {/* Close Button */}
      <div className="flex justify-between items-center mb-8">
        <div
          className={`py-4 px-6 rounded-2xl ${
            mode === "Dark" ? "bg-white" : "bg-[#4FBFD7]"
          } shadow-lg`}
        >
          <Link href={`/`} className="bg-blue md:block">
            <Logo
              desktopLogoClassName={`hidden md:inline-block flex rounded-2xl p-2`}
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

        <motion.div
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer"
          onClick={() => setShowSideBar(false)}
        >
          <Close
            fontSize="large"
            style={{
              fontSize: 35,
              color: `${mode === "Dark" ? "white" : "black"}`,
            }}
          />
        </motion.div>
      </div>

      <div
        className={`pb-12 h-[calc(100%-8rem)] no-scrollbar overflow-y-auto`}
        ref={wrapperRef}
      >
        {HeaderList?.map((item, index) => (
          <motion.div
            key={item.name}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={menuItemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className={`flex flex-row mt-5 items-center rounded-xl w-full p-4 cursor-pointer transition-all ${
                mode === "Dark"
                  ? "border-2 border-white/20 hover:bg-white/10"
                  : "border-2 border-black/20 hover:bg-black/5"
              }`}
              onClick={() => {
                router.push(`/${item.route}`);
                setShowSideBar(false);
              }}
            >
              {item.icon && (
                <item.icon
                  fontSize="large"
                  style={{
                    fontSize: 28,
                    color: `${mode === "Dark" ? "white" : "black"}`,
                  }}
                />
              )}
              <span
                className={`font-Nunito font-bold text-lg cursor-pointer w-full text-left ml-3 ${
                  mode === "Dark" ? "text-white" : "text-black"
                }`}
              >
                {item.value}
              </span>
            </motion.div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 pt-6 border-t border-gray-300"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center justify-between cursor-pointer p-4 rounded-xl ${
              mode === "Dark"
                ? "bg-white/10 hover:bg-white/20"
                : "bg-black/5 hover:bg-black/10"
            }`}
            onClick={onChangeMode}
          >
            <span
              className={`font-bold text-lg ${
                mode === "Dark" ? "text-white" : "text-black"
              }`}
            >
              {mode === "Dark" ? "Light Mode" : "Dark Mode"}
            </span>
            {mode === "Dark" ? (
              <ToggleOff fontSize="large" style={{ fontSize: 50, color: "white" }} />
            ) : (
              <ToggleOn fontSize="large" style={{ fontSize: 50 }} />
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default LeftSideNav;

LeftSideNav.defaultProps = {
  isMobileView: false,
};
