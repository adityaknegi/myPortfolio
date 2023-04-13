import Heading from '@/atoms/Heading'
import { Button } from "@/atoms/index";
import Image from 'next/image'
import router from 'next/router'
import Container from "@/atoms/Container";
import Section from '@/molecules/Section'


export default function Contact(props) {
  return (
    <>
    <Section className={' bg-yellow-200 '} id="contact">
        <div className="flex flex-col pt-20 flex flex-center h-[250px] text-center">
                  <Heading type={'h1'} className="text-lg font-bold">Contact Me</Heading>

                  <div className="mt-4 ">
                    <a href="mailto:reach-us@lissun.app">adityaknegi@gmail.com</a>
                  </div>
                 
						</div>     
    </Section>

    </>
  )
}

