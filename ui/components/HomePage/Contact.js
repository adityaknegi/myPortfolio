"use client";

import { motion } from "framer-motion";

export default function Contact({ sectionRef }) {
  return (
    <section id="contact" ref={sectionRef} className="py-28 px-6 border-t border-[#111]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-emerald-400 text-sm mb-2">03. contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's work together</h2>
          <p className="text-[#666] text-base max-w-md mb-12">
            Looking for a full-time role. Also available for freelance projects.
            If you have something in mind, reach out — I respond within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <p className="text-[#444] text-xs font-mono uppercase tracking-widest mb-2">Email</p>
            <a
              href="mailto:adityaknegi@gmail.com"
              className="text-white hover:text-emerald-400 transition-colors text-sm font-medium"
            >
              adityaknegi@gmail.com
            </a>
          </div>

          <div>
            <p className="text-[#444] text-xs font-mono uppercase tracking-widest mb-2">Availability</p>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shrink-0" />
              <span className="text-[#888] text-sm">Open to full-time roles</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shrink-0" />
              <span className="text-[#888] text-sm">Open to freelance projects</span>
            </div>
          </div>

          <div>
            <p className="text-[#444] text-xs font-mono uppercase tracking-widest mb-2">Connect</p>
            <div className="flex gap-6">
              <a
                href="mailto:adityaknegi@gmail.com"
                className="text-[#555] hover:text-white text-sm transition-colors"
              >
                Email ↗
              </a>
              <a
                href="https://github.com/adityaknegi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555] hover:text-white text-sm transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/negi1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555] hover:text-white text-sm transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
