"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/utils/constants";

const SERVICES = [
  {
    title: "API & Backend",
    desc: "REST & GraphQL APIs, microservices architecture, auth systems, and database design that scales.",
  },
  {
    title: "Full Stack",
    desc: "End-to-end web applications with React/Next.js frontends backed by robust server-side logic.",
  },
  {
    title: "Data & ML",
    desc: "Pipeline design, model deployment, and data engineering for analytics-heavy products.",
  },
];

export default function About({ sectionRef }) {
  return (
    <section id="about" ref={sectionRef} className="py-28 px-6 border-t border-[#111]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-emerald-400 text-sm mb-2">01. about</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">About me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-[#888] leading-relaxed">
              I'm a backend-focused engineer with 5+ years of experience building
              production-grade systems. I've worked across the full stack —
              from Django APIs and Node.js services to React/Next.js frontends — but
              my core strength is in the server side.
            </p>
            <p className="text-[#888] leading-relaxed">
              Currently freelancing — helping startups and businesses ship reliable software fast.
              I also build my own products; a handful have reached paying users.
              Open to full-time roles where I can own large technical problems end-to-end.
            </p>
            <p className="text-[#888] leading-relaxed">
              When I'm not building software, I'm hiking or competing in ML challenges on Kaggle
              — where I've earned two silver medals.
            </p>

            <div className="pt-4">
              <p className="text-[#555] text-xs font-mono mb-3 uppercase tracking-widest">Stack</p>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-[#666] border border-[#1e1e1e] bg-[#111] px-2.5 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-5 border border-[#1a1a1a] rounded-lg hover:border-emerald-400/20 hover:bg-[#0d0d0d] transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <span className="font-mono text-emerald-400 text-xs mt-0.5 shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1.5">{s.title}</h3>
                    <p className="text-[#666] text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
