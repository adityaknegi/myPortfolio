import Heading from '@/atoms/Heading'
import { Text} from "@/atoms/index";
import Section from '@/molecules/Section'
import {AboutMeColors} from '@/utils/constants'


export default function AboutMe(props) {
  return (
   <Section className={''} padding='md:p-10' bgColor={`${AboutMeColors.sectionBg[props.mode]}`} id="aboutMe" mode={props.mode}>
     <Heading type ={'h2'} className={`${AboutMeColors.textColor[props.mode]} text-3xl font-extrabold text-center p-6`}>
                    About Me
     </Heading>
      <div className="w-full p-2">
        <Text className={`${AboutMeColors.textColor[props.mode]} mt-4  text-container bounce py-10 md:py-30`} type='bodyStyleExtraLarge' >
              Hi, my name is Aditya and I&apos;m a software engineer. I enjoy building
              web applications and experimenting with new technologies. In my
              free time, I like to hike and explore the outdoors.
              Feel free to reach out to me at adityaknegi@gmail.com
            </Text>
    </div>
   </Section>

  )
}

