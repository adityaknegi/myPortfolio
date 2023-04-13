import Heading from '@/atoms/Heading'
import { Button } from "@/atoms/index";
import Image from 'next/image'
import router from 'next/router'
import Container from "@/atoms/Container";
import Section from '@/molecules/Section'


export default function Home(props) {
  return (
    <>
    <Section className={' bg-gray-200'} id="home">
      <div className="flex flex-row	min-h-screen" >
                <div className='w-1/2 flex items-center bg-yellow-100	 '>
                    <div className='flex flex-col mx-auto my-auto'>
                      <Heading type='h3' className='text-black md:text-6xl'>Aditya Kumar</Heading>
                      <Heading type='h5' className='text-black md:text-2xl my-6'>Software developer</Heading>
                      <Button type="largeAlternate" className="text-white mt-3 w-full bg-primary-main" onClick={()=>{
                        router.push('#contact')
                      }} >Contact Me</Button>
                    </div>
                </div>
                <div className='w-1/2 bg-gray-200 flex items-center  '>
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

    </>
  )
}

