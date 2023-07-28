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
    <Section className={'w-full '}  bgColor={`${MyContactsColors.sectionBg[props.mode]}`} id="contact"  mode={props.mode}>
      <div className="flex flex-col pt-20 flex-center text-center p-10">
        <Heading type={'h1'} className="text-lg font-bold text-gray-700">Contact Me</Heading>
        <div className="mt-4 ">
          <a href="mailto:reach-us@lissun.app" className="text-gray-700 font-bold">adityaknegi@gmail.com</a>
        </div>
        <form className="md:w-[500px] mx-auto mt-8 border-2 p-10 md:p-20 bg-white" onSubmit={handleSubmit} >
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" placeholder="Your name" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" placeholder="Your email" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
              Message:
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" rows="5" placeholder="Your message" required></textarea>
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

