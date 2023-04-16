import Heading from '@/atoms/Heading'
import { Button } from "@/atoms/index";
import Image from 'next/image'
import router from 'next/router'
import Section from '@/molecules/Section'


export default function Home(props) {
  return (
   <Section className={' pt-10 pb-10'} bgColor={'md:bg-primary-lightBlue  bg-primary-lightBlue text-white'} id="home">
      <div className="flex flex-col md:flex-row	md:h-70vh " >
                <div className='md:w-1/2 flex items-center md:bg-primary-lightBlue 	 '>
                    <div className='flex flex-col  mx-auto my-auto'>
                      <Heading type='h3' className='md:text-black text-2xl md:text-6xl'>Aditya Kumar</Heading>
                      <Heading type='h5' className='md:text-black text-base md:text-2xl my-6'>Software developer</Heading>
                      <Button type="largeAlternate" className="text-white mt-3 w-full bg-primary-main" onClick={()=>{
                        router.push('#contact')
                      }} >Contact Me</Button>
                    </div>
                </div>
                <div className='md:w-1/2 m-2 md:m-0 md:bg-primary-lightBlue  flex items-center  '>
                <div className='flex flex-col mx-auto my-auto'>
                  <Image 
                              alt="hi"
                              src={`/images/aditya_resume.jpeg`}
                              width={200}
                              className='border-4'
                              height={200}
                            />
                            
                    <Button type="largeAlternate" className="text-white mt-3 w-full bg-primary-main" onClick={()=>{
                        if (typeof window !== 'undefined') {
                          window.open('https://drive.google.com/file/d/1Sw02boTJqhv4HKW4PciBe54YYOaqofwr/view?usp=sharing', '_blank', 'noopener,noreferrer');
                        }
                      }} >
                        My Resume</Button>
                    </div>
                </div>
        </div>
      </Section>

  )
}

