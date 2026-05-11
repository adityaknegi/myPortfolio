"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SOCIAL_LINKS, TECH_STACK } from "@/utils/constants";

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const KaggleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.336"/>
  </svg>
);

const iconMap = { github: GitHubIcon, linkedin: LinkedInIcon, kaggle: KaggleIcon };

export default function Hero({ sectionRef }) {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center px-6 pt-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-[1fr_280px] gap-12 md:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={item} className="font-mono text-emerald-400 text-sm mb-4">
              Hi, I'm
            </motion.p>

            <motion.h1
              variants={item}
              className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight"
            >
              Aditya Kumar
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-2xl md:text-3xl font-semibold text-[#555] mt-3 leading-snug"
            >
              Senior Full Stack Developer
            </motion.h2>

            <motion.p
              variants={item}
              className="text-[#888] text-base md:text-lg mt-6 leading-relaxed max-w-lg"
            >
              Backend-focused engineer with 5+ years shipping production software.
              Currently freelancing — building SaaS products for international clients.
              Also open to full-time roles.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-4 flex flex-wrap gap-2"
            >
              {TECH_STACK.slice(0, 6).map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs text-[#555] border border-[#222] px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
              <span className="font-mono text-xs text-[#3a3a3a] px-2 py-1">+more</span>
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-3 mt-10"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm rounded transition-all duration-200"
              >
                Hire me
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#333] text-[#aaa] hover:border-[#555] hover:text-white text-sm rounded transition-all duration-200"
              >
                See my work
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-center gap-5 mt-10"
            >
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#555] hover:text-emerald-400 transition-colors duration-200"
                    aria-label={link.label}
                  >
                    {Icon && <Icon />}
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl overflow-hidden border border-[#1a1a1a] bg-[#111]">
                <Image
                  src="/images/aditya-img-1.png"
                  alt="Aditya Kumar"
                  width={280}
                  height={280}
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
              {/* Accent decoration */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-emerald-400/20 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
