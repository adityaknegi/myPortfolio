import Heading from '@/atoms/Heading'
import { Text} from "@/atoms/index";
import Section from '@/molecules/Section'


export default function AboutMe(props) {
  return (
   <Section className={''} padding='p-10' bgColor={'bg-[#4FBFD7]'} id="aboutMe">
     <Heading type ={'h2'} className="text-3xl font-extrabold text-center p-6">
                    About Me
     </Heading>
      <div className="w-full p-2">
        <Text className="   mt-4 text-white text-container bounce py-30" type='bodyStyleExtraLarge' >
              Hi, my name is Aditya and I'm a software engineer. I enjoy building
              web applications and experimenting with new technologies. In my
              free time, I like to hike and explore the outdoors.
              Feel free to reach out to me at adityaknegi@gmail.com
            </Text>
    </div>
   </Section>

  )
}

