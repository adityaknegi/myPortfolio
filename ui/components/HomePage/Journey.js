"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WORK_ITEMS } from "@/utils/constants";

function sortByPeriod(items) {
  return [...items].sort((a, b) => {
    const yearA = parseInt(a.period.split('—')[0].trim().replace('Present', '9999'));
    const yearB = parseInt(b.period.split('—')[0].trim().replace('Present', '9999'));
    return yearB - yearA;
  });
}

export default function Work({ sectionRef }) {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'job', label: 'Experience' },
    { id: 'project', label: 'Projects' },
  ];

  const filtered = (() => {
    if (activeTab === 'all') {
      const jobs = sortByPeriod(WORK_ITEMS.filter((w) => w.type === 'job'));
      const projects = sortByPeriod(WORK_ITEMS.filter((w) => w.type === 'project'));
      return [...jobs, ...projects];
    }
    return sortByPeriod(WORK_ITEMS.filter((w) => w.type === activeTab));
  })();

  return (
    <section id="work" ref={sectionRef} className="py-28 px-6 border-t border-[#111]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-emerald-400 text-sm mb-2">02. work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Experience &amp; Projects</h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 bg-[#111] border border-[#1a1a1a] rounded-lg p-1 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1.5 text-sm rounded-md transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-emerald-500 text-black font-semibold'
                  : 'text-[#666] hover:text-[#aaa]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Section label when showing "All" */}
        <AnimatePresence mode="popLayout">
          <motion.div key={activeTab}>
            {activeTab === 'all' && (
              <div>
                {/* Experience block */}
                <p className="font-mono text-xs text-[#333] uppercase tracking-widest mb-0 pb-0">Experience</p>
                {sortByPeriod(WORK_ITEMS.filter((w) => w.type === 'job')).map((item, i) => (
                  <WorkRow key={item.company + item.period} item={item} i={i} />
                ))}

                <p className="font-mono text-xs text-[#333] uppercase tracking-widest mt-10 mb-0">Projects</p>
                {sortByPeriod(WORK_ITEMS.filter((w) => w.type === 'project')).map((item, i) => (
                  <WorkRow key={item.company + item.period} item={item} i={i} />
                ))}
              </div>
            )}

            {activeTab !== 'all' && (
              <div>
                {filtered.map((item, i) => (
                  <WorkRow key={item.company + item.period} item={item} i={i} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function WorkRow({ item, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, delay: i * 0.04 }}
      className="group"
    >
      <div className="md:grid md:grid-cols-[180px_1fr] gap-8 py-5 border-b border-[#111] hover:border-[#1e1e1e] transition-colors">
        {/* Period + badges */}
        <div className="flex flex-row md:flex-col gap-2 md:gap-1.5 items-center md:items-start mb-2 md:mb-0 pt-0.5">
          <p className="font-mono text-xs text-[#3a3a3a] whitespace-nowrap">{item.period}</p>
          {item.status === 'discontinued' && (
            <span className="font-mono text-xs text-[#444] border border-[#222] px-1.5 py-0.5 rounded">
              discontinued
            </span>
          )}
        </div>

        {/* Content */}
        <div>
          <h3 className="text-white font-semibold text-sm group-hover:text-emerald-400 transition-colors duration-200 leading-snug">
            {item.role}
            <span className="text-[#444] font-normal mx-1.5">·</span>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555] hover:text-emerald-400 transition-colors font-normal"
              >
                {item.company} ↗
              </a>
            ) : (
              <span className="text-[#555] font-normal">{item.company}</span>
            )}
          </h3>

          <p className="text-[#666] text-sm mt-2 leading-relaxed max-w-xl">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {item.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs text-[#444] bg-[#0d0d0d] border border-[#1a1a1a] px-2 py-0.5 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
