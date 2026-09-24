"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { industriesData, IndustryItem } from "@/lib/data";

export default function IndustriesSection() {
  const handleIndustrySelect = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      const navOffset = 80;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="industries" className="py-20 lg:py-32 bg-[#E8F3FA] text-[#647586] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#3B82C4]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#3B82C4]/30 text-[#3B82C4] text-[10px] sm:text-[12px] font-medium tracking-widest uppercase mb-4"
            >
              <ShieldCheck className="w-4 h-4 text-[#3B82C4]" />
              <span>Sector Specialization</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-bold text-[#263746] tracking-tight"
            >
              Industry Expertise
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] sm:text-[16px] text-[#647586] max-w-md font-normal"
          >
            Financial, tax, and audit compliance tailored to the operational realities of your specific industry.
          </motion.p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((ind: IndustryItem, idx: number) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={handleIndustrySelect}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/90 hover:border-[#3B82C4] shadow-md flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Image & Tag Header */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={ind.imageUrl}
                  alt={ind.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

                <span className="absolute top-3 left-3 bg-[#E8F3FA]/95 border border-[#3B82C4]/40 text-[#3B82C4] text-[10px] sm:text-[12px] uppercase font-medium tracking-wider px-2.5 py-1 rounded-md">
                  {ind.tag}
                </span>
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#263746] group-hover:text-[#3B82C4] transition-colors mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-[12px] sm:text-[14px] text-[#647586] leading-relaxed mb-6 font-normal">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[14px] font-semibold text-[#3B82C4] group-hover:text-[#5BA7D1]">
                  <span>Industry Advisory</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
