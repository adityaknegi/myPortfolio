import Heading from '@/atoms/Heading'
import { Text} from "@/atoms/index";
import Section from '@/molecules/Section'


export default function Home(props) {
  return (
   <Section className={'py-12 h-70vh flex items-center bg-gray-100'} bgColor={'bg-gray-100"'} id="aboutMe">
   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Heading type ={'h2'} className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Me
          </Heading>

          <Text className="mt-4 text-gray-500 text-container bounce" type='bodyStyleExtraLarge' >
            Hi, my name is Aditya and I'm a software engineer. I enjoy building
            web applications and experimenting with new technologies. In my
            free time, I like to hike and explore the outdoors.
            Feel free to reach out to me at adityaknegi@gmail.com
          </Text>
        </div>
      </div>
      </Section>

  )
}

