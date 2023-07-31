import Heading from '@/atoms/Heading'
import Text from '@/atoms/Text'

import { Button } from "@/atoms/index";
import Image from 'next/image'
import { useRouter } from 'next/navigation';

import Section from '@/molecules/Section'
import {HomeColors} from '@/utils/constants'

export default function Home({mode}) {
  const router = useRouter();

  return (
   <Section className={' '} bgColor={`${HomeColors.sectionBg[mode]}`} id="home" containerType='type1' mode={mode}>
    <div className='grid md:grid-cols-2	  w-full   '>
        <div className=' h-full flex flex-col pt-20 pl-5 md:pl-10 md:py-60  md:justify-center   '>
          <Text  className={`${HomeColors.textColor[mode]} text-base md:text-1xl `}>Hi I&apos;am</Text>
          <Heading type='h3' className={`${HomeColors.textColor[mode]} text-2xl md:text-6xl`}>Aditya Kumar</Heading>
          <Heading type='h5' className={`${HomeColors.textColor[mode]} text-base md:text-2xl my-6`}>Software developer</Heading>
          <div className='flex flex-row md:mt-2'>
            <Button type="largeAlternate" className="w-40 mr-2 bg-[#4FBFD7] text-white" onClick={()=>{
              router.push('#contact')
            }} >Contact Me</Button>
            <Button type="largeAlternate" className="w-40  bg-[#4FBFD7] text-white" onClick={()=>{
              if (typeof window !== 'undefined') {
                window.open('https://drive.google.com/file/d/1Sw02boTJqhv4HKW4PciBe54YYOaqofwr/view?usp=sharing', '_blank', 'noopener,noreferrer');
              }
            }} >
            My Resume</Button>
          </div>
        </div>
        <div className='grid grid-cols-4  md:w-2/3 place-items-center p-5 pt-30 pb-20'>  
            
            <Button onClick={
              ()=>{
                if(window) (window.open('https://github.com/adityaknegi'))
              }
            }> <Image 
                alt="github"
                src={`/images/github_logo.svg`}
                width={60}
                className={HomeColors.Logo[mode]}
                height={60}
              /></Button>
                <Button onClick={
                  ()=>{
                    
                    if(window) (window.open('https://www.linkedin.com/in/negi1/'))
                  }
                }> <Image 
                alt="linkDin"
                src={`/images/linkdin_logo.svg`}
                width={60}
                className={HomeColors.Logo[mode]}
                height={60}
              /></Button>
                <Button onClick={
                  ()=>{
                    if(window) (window.open('https://www.kaggle.com/negi009'))
                  }
                }> <Image 
                alt="kaggle"
                src={`/images/kaggle_logo.svg`}
                width={60}
                className={HomeColors.Logo[mode]}
                height={60}
              /></Button>
        </div>
      
    </div>
    </Section>

  )
}

