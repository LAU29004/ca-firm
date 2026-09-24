"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, LineChart, Clock, Award, ShieldCheck } from "lucide-react";
import { whyChooseUsPillars } from "@/lib/data";

const pillarIcons: Record<string, React.ElementType> = {
  CheckCircle2,
  LineChart,
  Clock,
  Award,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-32 bg-[#F8FAFC] relative overflow-hidden text-[#647586]">
      {/* Subtle Graph lines accent background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3FA] border border-[#3B82C4]/30 text-[#3B82C4] text-[10px] sm:text-[12px] font-medium tracking-widest uppercase mb-4"
          >
            <ShieldCheck className="w-4 h-4 text-[#3B82C4]" />
            <span>The Apex Advantage</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-bold text-[#263746] tracking-tight leading-[1.15]"
          >
            More Than Accounting. <br />
            <span className="text-[#3B82C4]">A Partner For Your Growth.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 4 Feature Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChooseUsPillars.map((pillar, idx) => {
              const IconComp = pillarIcons[pillar.iconName] || CheckCircle2;

              return (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 hover:border-[#3B82C4] transition-all duration-300 shadow-sm hover:shadow-xl group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#3B82C4] tracking-wider">
                      {pillar.number}
                    </span>
                    <div className="p-2.5 rounded-lg bg-[#E8F3FA] text-[#3B82C4] group-hover:bg-[#3B82C4] group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5 stroke-[2]" />
                    </div>
                  </div>

                  <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#263746] mb-2 group-hover:text-[#3B82C4] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-[12px] sm:text-[14px] text-[#647586] leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Large Feature Image Composition */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#24527A]">
                <Image
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80"
                  alt="Senior Chartered Accountant in corporate financial consultation"
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24527A]/90 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-[#24527A]/90 backdrop-blur-md border border-[#3B82C4]/30 text-white">
                  <p className="text-[10px] sm:text-[12px] text-[#E8F3FA] font-medium uppercase tracking-wider mb-1">
                    Client Commitment
                  </p>
                  <p className="text-[14px] font-semibold text-[#E8F3FA] leading-snug">
                    "Every client engagement is directed by a senior CA partner with direct accountability."
                  </p>
                </div>
              </div>

              {/* Decorative Financial Chart Overlay */}
              <div className="absolute -top-6 -right-6 p-4 rounded-xl bg-[#24527A] text-[#E8F3FA] border border-[#3B82C4]/40 shadow-xl hidden sm:flex items-center gap-3">
                <LineChart className="w-6 h-6 text-[#3B82C4]" />
                <div>
                  <p className="text-[12px] sm:text-[14px] font-semibold text-white">100% Tax Accuracy</p>
                  <p className="text-[10px] text-slate-300 font-normal">Zero Audit Default</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
