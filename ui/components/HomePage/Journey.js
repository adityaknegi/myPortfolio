import Section from "@/molecules/Section";

import { Tab, Heading, Card, Text } from "@/atoms/index";
import { MyJourneyColors } from "@/utils/constants";

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
  return (
    <Section
      // style={props.mode =='Dark' && darkGradientStyle}

      className={",d:py-10 relative z-10"}
      bgColor={`${MyJourneyColors.sectionBg[props.mode]} `}
      id="journey"
      mode={props.mode}
      useRef={props.useRef}
    >
      <Heading
        type={"h2"}
        className={`${
          MyJourneyColors.textColor[props.mode]
        } text-3xl font-extrabold text-center py-20`}
      >
        My Journey
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5  lg:grid-cols-2 2lg:grid-cols-3 grid-flow-dense md:text-white md:pbt-20 place-items-center ">
        {projectData.map((project, index) => {
          return (
            <Card
              key={index}
              className=" shadow-xl shadow-white/40 hover:shadow-indigo-500/100 relative  p-4 lg:my-4  w-full md:w-[350px] h-[350px] overflow-y-auto   "
            >
              <div className=" p-2 bg-blue-100">
                <Heading
                  type="h3"
                  className={`${
                    MyJourneyColors.content.heading[props.mode]
                  }  py-2 font-extrabold text-center  h-20 font-semibold`}
                >
                  {project.name}
                </Heading>
              </div>
              <div className=" pl-2 mt-4 md:mt-3 text-black text-center h-[100px] ">
                <Text
                  type="bodyStyleDefault"
                  className={`${
                    MyJourneyColors.content.description[props.mode]
                  }  md:text-base`}
                >
                  {project.description}
                </Text>
              </div>
              <div className="flex flex-wrap  w-full  bg-blue-100 pt-2 right-0 p-2 absolute bottom-0 ">
                {project.tech.map((skill, index) => (
                  <Tab
                    key={index}
                    className={`${MyJourneyColors.Tab[props.mode]} `}
                  >
                    {skill}
                  </Tab>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
