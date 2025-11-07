import Heading from "@/atoms/Heading";
import Text from "@/atoms/Text";

import { Button } from "@/atoms/index";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Section from "@/molecules/Section";
import { HomeColors } from "@/utils/constants";
import { motion } from "framer-motion";

export default function Home({ mode, useRef }) {
  const router = useRouter();

  const LinkList = [
    {
      alt: "github",
      url: "https://github.com/adityaknegi",
      src: `/images/github_logo.svg`,
    },
    {
      alt: "linkdin",
      url: "https://www.linkedin.com/in/negi1/",
      src: `/images/linkdin_logo.svg`,
    },
    {
      alt: "kaggle",
      url: "https://www.kaggle.com/negi009",
      src: `/images/kaggle_logo.svg`,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section
      className={"min-h-screen"}
      bgColor={`${HomeColors.sectionBg[mode]}`}
      id="home"
      containerType="type1"
      mode={mode}
      useRef={useRef}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-6 md:gap-10 w-full md:p-1"
      >
        <div className="h-full flex flex-col pt-10 px-5 md:pl-10 md:py-40 lg:py-50 md:justify-center">
          <motion.div variants={itemVariants}>
            <Heading
              type="h3"
              className={`${HomeColors.textColor[mode]} text-3xl md:text-6xl font-bold leading-tight`}
            >
              Aditya Kumar (Negi)
            </Heading>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Heading
              type="h5"
              className={`${HomeColors.textColor[mode]} text-lg md:text-[28px] my-3 md:my-6 font-semibold bg-gradient-to-r from-[#4FBFD7] to-indigo-600 bg-clip-text text-transparent`}
            >
              Software Developer
            </Heading>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Text
              className={`${HomeColors.textColor[mode]} text-base md:text-lg leading-relaxed`}
            >
              I'm an enthusiastic and self-driven programmer who relishes taking
              on complex real-world challenges. My quick-start mentality,
              curiosity, and passion for coding empower me to navigate intricate
              problems with zeal and determination.
            </Text>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row my-4 md:my-10 gap-4 md:gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(79, 191, 215, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                type="largeAlternate"
                className="w-full md:w-60 text-lg py-4 bg-[#4FBFD7] text-white hover:bg-[#3da8bd] transition-all cursor-pointer rounded-xl shadow-lg"
                onClick={() => {
                  router.push("#contact");
                }}
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                type="largeAlternate"
                className="w-full md:w-60 text-lg py-4 bg-indigo-600 text-white hover:bg-indigo-700 transition-all rounded-xl shadow-lg"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open(
                      "https://drive.google.com/file/d/1Sw02boTJqhv4HKW4PciBe54YYOaqofwr/view?usp=sharing",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }
                }}
              >
                My Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 mt-6 md:mt-10 place-items-center"
          >
            {LinkList?.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-3 h-[70px] w-[70px] flex items-center justify-center rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <Button
                  className={HomeColors.LogoButton[mode]}
                  onClick={() => {
                    if (window) window.open(item.url);
                  }}
                >
                  <Image
                    alt={item.alt}
                    src={item.src}
                    width={50}
                    height={50}
                  />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={imageVariants}
          className="pt-8 md:pt-10 px-3 md:px-10 w-full h-full flex items-center justify-center"
        >
          <div className="relative w-full max-w-[500px]">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(79, 191, 215, 0.3)",
                  "0 0 40px rgba(79, 191, 215, 0.5)",
                  "0 0 20px rgba(79, 191, 215, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-[80px] overflow-hidden"
            >
              <Image
                className="object-cover w-full h-auto rounded-[80px]"
                src="/images/aditya-img-1.png"
                width={700}
                height={700}
                alt="Aditya Kumar's professional photo"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
