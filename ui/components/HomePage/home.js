import Heading from '@/atoms/Heading'
import { Button } from "@/atoms/index";
import Image from 'next/image'
import router from 'next/router'
import Section from '@/molecules/Section'


export default function Home(props) {
  return (
   <Section className={' pt-10 pb-10  '}id="home">
      <div className="flex flex-col md:flex-row	md:h-70vh   border-2 rounded-2xl" >
            <div className='md:w-1/2 flex items-center  bg-[#4FBFD7] 	 border-2 border-[#4FBFD7] '>
                <div className='flex flex-col  mt-5  mx-auto  md:my-auto'>
                  <Heading type='h3' className='text-white text-2xl md:text-6xl'>Aditya Kumar</Heading>
                  <Heading type='h5' className='text-white text-base md:text-2xl my-6'>Software developer</Heading>
                  <Button type="largeAlternate" className="mb-6" onClick={()=>{
                    router.push('#contact')
                  }} >Contact Me</Button>
                </div>
            </div>
            
            <div className='md:w-1/2  md:m-0 bg-primary-lightBlue  flex items-center  border-2 border-primary-lightBlue  '>
              <div className='flex flex-col mx-auto my-auto '>
                <Image 
                            alt="hi"
                            src={`/images/aditya_resume.jpeg`}
                            width={200}
                            className=' mt-8'
                            height={200}
                          />
                          
                  <Button type="largeAlternate" className="mt-3 mb-6" onClick={()=>{
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

