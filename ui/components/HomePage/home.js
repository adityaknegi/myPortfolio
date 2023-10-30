import Heading from "@/atoms/Heading";
import Text from "@/atoms/Text";

import { Button } from "@/atoms/index";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Section from "@/molecules/Section";
import { HomeColors } from "@/utils/constants";

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

  return (
    <Section
      className={"h-screen"}
      //  style={mode =='Dark' && darkGradientStyle}

      bgColor={`${HomeColors.sectionBg[mode]}`}
      id="home"
      containerType="type1"
      mode={mode}
      useRef={useRef}
    >
      <div className="grid md:grid-cols-2	 gap-10 w-full  md:p-1 ">
        <div className=" h-full flex flex-col pt-10 pl-5 md:pl-10 md:py-40 lg:py-50 md:justify-center ">
          {/* <Text
            className={`${HomeColors.textColor[mode]} text-base md:text-1xl `}
          >
            Hi I&apos;am
          </Text> */}
          <Heading
            type="h3"
            className={`${HomeColors.textColor[mode]} text-2xl md:text-6xl font-semibold `}
          >
            Aditya Kumar(Negi)
          </Heading>
          <Heading
            type="h5"
            className={`${HomeColors.textColor[mode]} text-base md:text-[24px] my-2 md:my-6  font-semiBold`}
          >
            Software developer
          </Heading>
          <Text className={`${HomeColors.textColor[mode]} text-sm md:text-lg`}>
            I'm an enthusiastic and self-driven programmer who relishes taking
            on complex real-world challenges. My quick-start mentality,
            curiosity, and passion for coding empower me to navigate intricate
            problems with zeal and determination.
          </Text>

          <div className="flex flex-col md:flex-row my-2 md:my-10 gap-4 md:gap-20 ">
            <Button
              type="largeAlternate"
              className="w-full md:w-60 text-lg mr-2 bg-[#4FBFD7] text-white hover:border hover:borer-white hover:text-[#4FBFD7] hover:bg-white  cursor-pointer rounded-xl"
              onClick={() => {
                router.push("#contact");
              }}
            >
              Contact Me
            </Button>
            <Button
              type="largeAlternate"
              className="w-full md:w-60 text-lg  bg-indigo-800 text-white hover:border hover:borer-white hover:bg-white hover:text-indigo-800 rounded-xl"
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
          </div>
          <div className=" flex  gap-3 mt-10  place-items-center   h-10 w-full md:w-2/3 rounded-2xl   ">
            {LinkList?.map((item, index) => (
              <div
                className="bg-white p-2 h-[80px]  flex items-center rounded-xl border                   key={index}
 "
              >
                <Button
                  key={index}
                  className={HomeColors.LogoButton[mode]}
                  onClick={() => {
                    if (window) window.open(item.url);
                  }}
                >
                  {" "}
                  <Image
                    alt={item.alt}
                    src={item.src}
                    width={60}
                    // className={`${HomeColors.Logo[mode] } `}
                    height={60}
                  />
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div
          className="  pt-1 mx-3 md:mx-10 md:pt-10  w-full h-full object-fill	"
          // style={{
          //   backgroundImage: 'url("images/new_bg.JPG")',
          //   backgroundSize: "fit",
          // }}
        >
          <Image
            className="object-fit h-full md:h-[80%] rounded-[100px] mx-0 md:mx-2 p-10"
            src="/images/aditya-img-1.png" // Make sure to provide the correct path
            width={700} // Adjust the width to your desired value
            height={300} // Adjust the height to your desired value
            alt="A description of the image" // Add a meaningful alt text
          />
        </div>
      </div>
    </Section>
  );
}
