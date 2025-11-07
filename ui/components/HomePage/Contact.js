"use client";

import Heading from "@/atoms/Heading";
import Section from "@/molecules/Section";
const axios = require("axios");

import { MyContactsColors } from "@/utils/constants";
import { motion } from "framer-motion";

export default function Contact(props) {
  //sendinblue for message
  const apiKey =
    "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";
  const apiUrl = "https://api.sendinblue.com/v3/smtp/email";

  const sendEmail = async (name, email, message) => {
    const data = {
      sender: { name, email: "adityaknegi@gmail.com" },
      to: [{ email: "adityaknegi11@gmail.com" }],
      subject: "New message from your portfolio website",
      textContent: `${name} sent you a message:\n\n${message} from \n${email}`,
    };

    const response = await axios.post(apiUrl, data, {
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    sendEmail(name, email, message);
  };
  const darkGradientStyle = {
    backgroundImage: "linear-gradient(to top, #141E30, #1A2533, #0D1317)",
  };

  return (
    <Section
      className={"w-full relative z-10 px-4 md:px-8"}
      bgColor={`${MyContactsColors.sectionBg[props.mode]}`}
      id="contact"
      mode={props.mode}
      useRef={props.useRef}
    >
      <div className="flex flex-col pt-20 md:py-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading
            type={"h1"}
            className={`${MyContactsColors.textColor[props.mode]} font-bold text-3xl md:text-5xl text-center mb-4`}
          >
            Contact Me
          </Heading>

          <div className="mt-4 text-center">
            <motion.a
              href="mailto:adityaknegi@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="text-[#4FBFD7] hover:text-indigo-600 font-semibold text-lg md:text-xl transition-colors"
            >
              adityaknegi@gmail.com
            </motion.a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full mx-auto mt-8 md:mt-12 border-2 border-gray-200 p-6 md:p-12 bg-white rounded-2xl shadow-xl"
          onSubmit={handleSubmit}
        >
          <div className="mb-6 flex flex-col">
            <label
              className="text-gray-700 font-semibold mb-2 text-sm md:text-base"
              htmlFor="name"
            >
              Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-[#4FBFD7] transition-all"
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-6 flex flex-col">
            <label
              className="text-gray-700 font-semibold mb-2 text-sm md:text-base"
              htmlFor="email"
            >
              Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-[#4FBFD7] transition-all"
              id="email"
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="text-gray-700 font-semibold mb-2 text-sm md:text-base block"
              htmlFor="message"
            >
              Message
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-[#4FBFD7] transition-all resize-none"
              id="message"
              name="message"
              rows="6"
              placeholder="Your message"
              required
            ></motion.textarea>
          </div>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(79, 191, 215, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#4FBFD7] to-indigo-600 hover:from-[#3da8bd] hover:to-indigo-700 text-white font-bold py-3 px-8 md:px-12 rounded-xl focus:outline-none shadow-lg transition-all text-base md:text-lg"
              type="submit"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
