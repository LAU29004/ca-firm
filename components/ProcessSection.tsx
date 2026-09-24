"use client";

import { motion } from "framer-motion";
import { Search, BarChart3, Sliders, Zap, ShieldCheck } from "lucide-react";
import { processSteps, ProcessStep } from "@/lib/data";

const stepIcons: Record<string, React.ElementType> = {
  Search,
  BarChart3,
  Sliders,
  Zap,
};

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-32 bg-[#F8FAFC] relative overflow-hidden text-[#647586]">
      {/* Background subtleties */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3FA] border border-[#3B82C4]/30 text-[#3B82C4] text-[10px] sm:text-[12px] font-medium tracking-widest uppercase mb-4"
          >
            <ShieldCheck className="w-4 h-4 text-[#3B82C4]" />
            <span>Structured Methodology</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-bold text-[#263746] tracking-tight"
          >
            Simple Process. <span className="text-[#3B82C4]">Clear Financial Decisions.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[14px] sm:text-[16px] text-[#647586] font-normal leading-relaxed"
          >
            Our proven four-stage engagement framework ensures complete statutory oversight, operational clarity, and seamless execution.
          </motion.p>
        </div>

        {/* Desktop Horizontal Process Timeline */}
        <div className="hidden lg:block relative mb-12">
          {/* Horizontal Connecting Line */}
          <div className="absolute top-1/2 left-12 right-12 h-1 bg-slate-300 -translate-y-1/2 -z-0" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-[#24527A] via-[#3B82C4] to-[#5BA7D1] -translate-y-1/2 origin-left -z-0"
          />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {processSteps.map((step: ProcessStep, idx: number) => {
              const IconComp = stepIcons[step.iconName] || Search;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Icon Node */}
                  <div className="w-20 h-20 rounded-2xl bg-white border-2 border-slate-300 group-hover:border-[#3B82C4] shadow-xl flex items-center justify-center text-[#263746] group-hover:bg-[#24527A] group-hover:text-[#E8F3FA] transition-all duration-300 relative mb-6">
                    <IconComp className="w-8 h-8 stroke-[2]" />
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#3B82C4] text-white font-mono text-[12px] font-bold flex items-center justify-center shadow-md">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#263746] group-hover:text-[#3B82C4] transition-colors mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[10px] sm:text-[12px] font-medium uppercase tracking-wider text-[#3B82C4] mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-[12px] sm:text-[14px] text-[#647586] font-normal leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Stack Process */}
        <div className="block lg:hidden relative pl-6 border-l-2 border-slate-300 space-y-10">
          {processSteps.map((step: ProcessStep, idx: number) => {
            const IconComp = stepIcons[step.iconName] || Search;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-6"
              >
                {/* Mobile Step Badge Node */}
                <div className="absolute -left-[31px] top-0 w-12 h-12 rounded-xl bg-[#24527A] border-2 border-[#3B82C4] text-[#E8F3FA] flex items-center justify-center font-mono font-bold text-sm shadow-lg">
                  {step.number}
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <IconComp className="w-5 h-5 text-[#3B82C4]" />
                    <h3 className="text-[18px] font-semibold text-[#263746]">{step.title}</h3>
                  </div>
                  <p className="text-[10px] font-medium text-[#3B82C4] uppercase tracking-wider mb-2">
                    {step.subtitle}
                  </p>
                  <p className="text-[12px] text-[#647586] font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
