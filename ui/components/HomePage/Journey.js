"use client";

import Section from "@/molecules/Section";

import { Tab, Heading, Card, Text } from "@/atoms/index";
import { MyJourneyColors } from "@/utils/constants";
import { motion } from "framer-motion";

export default function Journey(props) {
  const projectData = [
    {
      name: "Data Science Intern   (2019)",
      description:
        "Work on Implemented Spiking Neural Network rules by reading research papers and experimenting with different datasets. 3Implemented 1D convolution Neural Network from scratch and tested in different datasets.",
      tech: ["Python", "R"],
    },
    {
      name: "Kaggle Competition (2019-2020)",
      description:
        "Participated in Kaggle Competition and Won two silver medal",
      tech: ["Machine Learning ", "Deep Learning"],
      link: "https://www.kaggle.com/negi009",
    },
    {
      name: "Computer Vision Intern (Lincode Lab) (2020)",
      description:
        "Worked on state-of-the-art Deep Learning / Computer Vision techniques to detect defects in manufactured products",
      tech: ["Python", "Tensorflow", "NumPy", "pandas"],
    },
    {
      name: "Moneyfit App(Backend) (2020-2021)",
      description:
        "App that tracks every type of Indian investments. Full-Stack Development: Android Application, web server (Django)",
      link: "",
      tech: ["Python", "Django", "postgreSql"],
    },
    {
      name: "Software engineer at Knitter (Backend Engineer) (2020-2021)",
      description:
        "Worked as Backend development using Django, worked on api, query optimzation, caching to improve user experience",
      link: "",
      tech: ["Python", "Django", "postgreSql"],
    },

    {
      name: "Full stack developer at Napses (2021-current)",
      description: "Work on creating end to end solution for multiple Clients",
      tech: ["Nodejs", "PostgreSql", "NextJs", "Angular", "Aws"],
    },
  ];
  const darkGradientStyle = {
    backgroundImage: "linear-gradient(to top, #141E30, #1A2533, #0D1317)",
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section
      className={"py-10 md:py-20 relative z-10 px-4 md:px-8"}
      bgColor={`${MyJourneyColors.sectionBg[props.mode]}`}
      id="journey"
      mode={props.mode}
      useRef={props.useRef}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Heading
          type={"h2"}
          className={`${MyJourneyColors.textColor[props.mode]} text-3xl md:text-5xl font-extrabold text-center py-10 md:py-20`}
        >
          My Journey
        </Heading>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-2 2lg:grid-cols-3 place-items-stretch max-w-7xl mx-auto"
      >
        {projectData.map((project, index) => (
          <motion.div key={index} variants={cardVariants}>
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="shadow-xl bg-white hover:shadow-2xl hover:shadow-[#4FBFD7]/30 relative p-0 w-full h-[380px] overflow-hidden rounded-2xl border border-gray-100 transition-all duration-300">
                <div className="p-4 bg-gradient-to-r from-[#4FBFD7] to-indigo-600">
                  <Heading
                    type="h3"
                    className="text-white py-2 font-bold text-center min-h-[80px] flex items-center justify-center text-sm md:text-base"
                  >
                    {project.name}
                  </Heading>
                </div>

                <div className="p-4 md:p-5 text-gray-700 h-[180px] overflow-y-auto">
                  <Text
                    type="bodyStyleDefault"
                    className="text-sm md:text-base leading-relaxed"
                  >
                    {project.description}
                  </Text>
                </div>

                <div className="flex flex-wrap gap-2 w-full bg-gradient-to-r from-blue-50 to-indigo-50 p-3 absolute bottom-0 border-t border-gray-200">
                  {project.tech.map((skill, skillIndex) => (
                    <Tab
                      key={skillIndex}
                      className="bg-[#4FBFD7] text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-indigo-600 transition-colors"
                    >
                      {skill}
                    </Tab>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
