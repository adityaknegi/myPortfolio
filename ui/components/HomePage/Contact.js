'use client';

import Heading from '@/atoms/Heading'
import Section from '@/molecules/Section'
const axios = require('axios');

import {MyContactsColors} from '@/utils/constants'


export default function Contact(props) {
  
  //sendinblue for message
  const apiKey = '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';
  const apiUrl = 'https://api.sendinblue.com/v3/smtp/email';

  const sendEmail = async (name, email, message) => {
  
  const data = {
    sender: { name, email},
    to: [{ email: 'adityaknegi11@gmail.com' }],
    subject: 'New message from your portfolio website',
    textContent: `${name} sent you a message:\n\n${message}`,
  };

  const response = await axios.post(apiUrl, data, {
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
  });

};

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  sendEmail(name, email, message);
};



  return (
    <Section className={'w-full '}  bgColor={`${MyContactsColors.sectionBg[props.mode]}`} id="contact"  mode={props.mode} useRef={props.useRef}>
      <div className="flex flex-col pt-20  md:py-20">
        <Heading type={'h1'} className={`font-bold  text-center ${MyContactsColors.textColor[props.mode]}}`}>Contact Me</Heading>
        <div className="mt-4 text-center ">
          <a href="mailto:reach-us@lissun.app" className={`font-bold  ${MyContactsColors.textColor[props.mode]}}`}>adityaknegi@gmail.com</a>
        </div>
        <form className="max-w-[800px] flex gap-4 flex-col w-full mx-auto mt-8 border-2 p-10 md:p-20 bg-red-50 rounded-2xl" onSubmit={handleSubmit} >
          <div className="mb-4  flex  flex-col">
            <label className={`${MyContactsColors.textColor[props.mode]}} font-semibold`} htmlFor="name">
              Name:
            </label>
            <input
              className="max-w-sm	 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />          </div>
          <div className="mb-4 flex  flex-col">
            <label className={`${MyContactsColors.textColor[props.mode]}}  font-semibold`} htmlFor="email">
              Email:
            </label>
            <input 
              className="max-w-sm	 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="email" type="email" name="email" placeholder="Your email" required/>
          </div>
          <div className="mb-4">
            <label className={`${MyContactsColors.textColor[props.mode]}} font-semibold`} htmlFor="message">
              Message:
            </label>
            <textarea 
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="message" name="message" rows="5" placeholder="Your message" required></textarea>
          </div>
          <div className="flex justify-center">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>     
    </Section>

  )
}

