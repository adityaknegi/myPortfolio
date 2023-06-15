import Heading from '@/atoms/Heading'
import { Button } from "@/atoms/index";
import Image from 'next/image'
import router from 'next/navigation'

export default function Skill(props) {
  return (
    <>

      
      <section className="flex flex-row min-h-screen	" id="home">
      <div className='w-1/2 flex items-center h-screen bg-yellow-100	 '>
          <div className='flex flex-col mx-auto my-auto'>
            <Heading type='h3' className='text-black md:text-6xl'>Aditya Kumar</Heading>
            <Heading type='h5' className='text-black md:text-2xl my-6'>Software developer</Heading>
            <Button type="largeAlternate" className="text-white mt-3 w-full bg-primary-main" onClick={()=>{
              router.push('#contact')
            }} >Contact Me</Button>
          </div>
      </div>
      <div className='w-1/2 bg-gray-200 flex items-center h-screen '>
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
      
      </section>

    </>
  )
}

