"use client"

import Heading from '@/atoms/Heading'
import { Text} from "@/atoms/index";
import Section from '@/molecules/Section'
import {AboutMeColors} from '@/utils/constants'
import { useEffect } from 'react';


export default function AboutMe(props) {
 

  useEffect(()=>{
    if(!document || !window){ return}

    document?.getElementById('emailLink')?.addEventListener('click', function() {
      let email = 'adityaknegi@gmail.com';
      let subject = 'Regarding your portfolio';
      let body = 'Hello Aditya, I am reaching out regarding your portfolio.';

      window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  })
},[])
return (
<Section className={' mt-[800px] relative z-10'}
// style={props.mode =='Dark' && darkGradientStyle}

    padding='md:p-10 ' bgColor={`${AboutMeColors.sectionBg[props.mode]}`} id="aboutMe" mode={props.mode} useRef={props.useRef}>
     <Heading type ={'h2'} className={`${AboutMeColors.textColor[props.mode]} text-4xl font-extrabold text-center p-2 `}>
                    About Me
     </Heading>
     
     <Text className={`${AboutMeColors.textColor[props.mode]} mt-4  bounce py-10 md:py-20 `} type='bodyStyleExtraLarge' >
              Hey there, I&apos;m Aditya – a web applications enthusiast and software engineer. 
              I'm all about turning ideas into sleek digital experiences. 
              When I'm not coding, I'm out hiking and soaking in the great outdoors.
               Feel free to drop me a line at <span className=' text-blue-900 underline font-bold text-2lg cursor-pointer' id='emailLink'> adityaknegi@gmail.com</span> Let's connect and create something awesome!
              <br></br>
              

            </Text>
            <Text type='bodyStyleExtraLarge' className=' text-blue-900 font-bold text-xl mt-1 text-center'>Cheers,</Text>
              <Text type='bodyStyleExtraLarge' className=' ext-blue-900 font-bold text-xl text-center mt-2'>Aditya,</Text>

   </Section>

  )
}

