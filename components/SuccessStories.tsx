"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, TrendingUp, ShieldCheck } from "lucide-react";
import { successStoriesData, SuccessStoryItem } from "@/lib/data";

export default function SuccessStories() {
  const handleScrollContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="stories" className="py-20 lg:py-32 bg-[#24527A] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#3B82C4]/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3FA] text-[#3B82C4] text-[10px] sm:text-[12px] font-medium tracking-widest uppercase mb-4"
            >
              <ShieldCheck className="w-4 h-4 text-[#3B82C4]" />
              <span>Proven Impact</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-bold text-white tracking-tight"
            >
              Business Success Stories
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] sm:text-[16px] text-slate-300 max-w-md font-normal"
          >
            Representative client engagements highlighting statutory compliance, tax optimization, and financial structure transformations.
          </motion.p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {successStoriesData.map((story: SuccessStoryItem, idx: number) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group bg-[#24527A] border border-slate-600/80 hover:border-[#3B82C4] rounded-2xl overflow-hidden shadow-2xl flex flex-col sm:flex-row justify-between transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image side */}
              <div className="relative sm:w-2/5 aspect-[4/3] sm:aspect-auto">
                <Image
                  src={story.imageUrl}
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#24527A] via-transparent to-transparent opacity-80" />
                
                <span className="absolute top-3 left-3 bg-[#24527A] text-[#3B82C4] font-mono text-xs font-bold px-2.5 py-1 rounded-md border border-[#3B82C4]/30">
                  {story.number}
                </span>
              </div>

              {/* Details side */}
              <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[12px] text-[#3B82C4] font-semibold mb-2">
                    <span>{story.category}</span>
                    <span className="text-slate-300 font-mono">{story.date}</span>
                  </div>

                  <h3 className="text-[16px] sm:text-[18px] font-semibold text-white group-hover:text-[#E8F3FA] transition-colors mb-2 leading-snug">
                    {story.title}
                  </h3>

                  <p className="text-[12px] sm:text-[14px] text-slate-200 leading-relaxed mb-4 font-normal">
                    {story.description}
                  </p>
                </div>

                <div>
                  {/* Highlight metric badge */}
                  <div className="p-2.5 rounded-lg bg-[#24527A] border border-[#3B82C4]/30 text-[#E8F3FA] text-[12px] font-semibold flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4 shrink-0 text-[#3B82C4]" />
                    <span>{story.metrics}</span>
                  </div>

                  <button
                    onClick={handleScrollContact}
                    className="w-full py-2.5 rounded-lg bg-[#3B82C4] hover:bg-[#5BA7D1] text-white text-[12px] sm:text-[14px] font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Request Similar Strategy</span>
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
