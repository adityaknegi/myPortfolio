import Heading from '@/atoms/Heading'
import Text from '@/atoms/Text'

import { Button } from "@/atoms/index";
import Image from 'next/image'
import { useRouter } from 'next/navigation';

import Section from '@/molecules/Section'
import {HomeColors} from '@/utils/constants'
import SignatureDesign from '@/components/common/SignatureDesign'

export default function Home({mode, useRef}) {
  const router = useRouter();

  const LinkList = [
    {
      alt:'github',
      url:'https://github.com/adityaknegi'  ,
      src:`/images/github_logo.svg`
      },
    {
      alt:'linkdin',
      url:'https://www.linkedin.com/in/negi1/'  ,
      src:`/images/linkdin_logo.svg`
      },
    {
      alt:'kaggle',
      url:'https://www.kaggle.com/negi009'  ,
      src:`/images/kaggle_logo.svg`
      },
    ]

  return (
   <Section className={' '} bgColor={`${HomeColors.sectionBg[mode]}`} id="home" containerType='type1' mode={mode} useRef={useRef} >
        <SignatureDesign mode={mode}/>

    <div className='grid md:grid-cols-2	  w-full   ' >
      
        <div className=' h-full flex flex-col pt-20 pl-5 md:pl-10 md:py-60  md:justify-center   '>
          
          <Text  className={`${HomeColors.textColor[mode]} text-base md:text-1xl `}>Hi I&apos;am</Text>
          <Heading type='h3' className={`${HomeColors.textColor[mode]} text-2xl md:text-6xl`}>Aditya Kumar</Heading>
          <Heading type='h5' className={`${HomeColors.textColor[mode]} text-base md:text-2xl my-6`}>Software developer</Heading>
          <div className='flex flex-row md:mt-2'>
            <Button type="largeAlternate" className="w-40 mr-2 bg-[#4FBFD7] text-white" onClick={()=>{
              router.push('#contact')
            }} >Contact Me</Button>
            <Button type="largeAlternate" className="w-40   bg-indigo-800 text-white" onClick={()=>{
              if (typeof window !== 'undefined') {
                window.open('https://drive.google.com/file/d/1Sw02boTJqhv4HKW4PciBe54YYOaqofwr/view?usp=sharing', '_blank', 'noopener,noreferrer');
              }
            }} >
            My Resume</Button>
          </div>
        </div>
        <div className=' grid w-full place-items-center rounded-full h-full mb-20'> 

            <div className=' grid grid-cols-4  gap-2  place-items-center  h-32 w-full md:w-2/3 rounded-2xl pl-10 pt-20 md:p-2 '>
              {LinkList?.map((item)=>(
                <>
                <Button 
                  key={item.id}
                  className= {HomeColors.LogoButton[mode]}
                  onClick={
                        ()=>{
                          if(window) (window.open(item.url))
                        }
                    }> <Image 
                        alt={item.alt}
                        src={item.src}
                        width={60}
                        className={HomeColors.Logo[mode]}
                        height={60}
                      /></Button>
                </>
                ))
              }

              </div>
        </div>
      
    </div>
  
    </Section>

  )
}

