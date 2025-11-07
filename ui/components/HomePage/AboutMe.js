"use client"

import Heading from '@/atoms/Heading'
import { Text} from "@/atoms/index";
import Section from '@/molecules/Section'
import {AboutMeColors} from '@/utils/constants'
import { useEffect } from 'react';
import { motion } from 'framer-motion';


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
<Section
  className={'mt-[200px] md:mt-[800px] relative z-10'}
  padding='px-4 md:px-10 py-10 md:py-20'
  bgColor={`${AboutMeColors.sectionBg[props.mode]}`}
  id="aboutMe"
  mode={props.mode}
  useRef={props.useRef}
>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <Heading
      type={'h2'}
      className={`${AboutMeColors.textColor[props.mode]} text-3xl md:text-5xl font-extrabold text-center p-2 mb-6 md:mb-10`}
    >
      About Me
    </Heading>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true, margin: "-100px" }}
    className="max-w-4xl mx-auto"
  >
    <Text
      className={`${AboutMeColors.textColor[props.mode]} text-base md:text-xl leading-relaxed text-center md:text-left px-2 md:px-0`}
      type='bodyStyleExtraLarge'
    >
      Hey there, I&apos;m Aditya – a web applications enthusiast and software engineer.
      I'm all about turning ideas into sleek digital experiences.
      When I'm not coding, I'm out hiking and soaking in the great outdoors.
      <br/><br/>
      Feel free to drop me a line at{' '}
      <motion.span
        whileHover={{ scale: 1.05 }}
        className='text-[#4FBFD7] underline font-bold text-lg md:text-xl cursor-pointer transition-colors hover:text-indigo-600'
        id='emailLink'
      >
        adityaknegi@gmail.com
      </motion.span>
      {' '}Let's connect and create something awesome!
    </Text>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="mt-8 md:mt-12 text-center"
    >
      <Text type='bodyStyleExtraLarge' className='text-[#4FBFD7] font-bold text-lg md:text-2xl'>
        Cheers,
      </Text>
      <Text type='bodyStyleExtraLarge' className='text-[#4FBFD7] font-bold text-lg md:text-2xl mt-2'>
        Aditya
      </Text>
    </motion.div>
  </motion.div>
</Section>
  )
}

