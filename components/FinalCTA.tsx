"use client";

import { motion } from "framer-motion";
import { PhoneCall, ArrowRight, ShieldCheck, Mail } from "lucide-react";

export default function FinalCTA() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#24527A] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#3B82C4]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F3FA]/15 border border-[#3B82C4]/40 text-[#E8F3FA] text-[10px] sm:text-[12px] font-medium tracking-widest uppercase mb-6"
        >
          <ShieldCheck className="w-4 h-4 text-[#3B82C4]" />
          <span>Statutory Protection & Advisory</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[36px] sm:text-[42px] md:text-[56px] lg:text-[68px] font-bold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto mb-6"
        >
          Ready to Bring Clarity to Your{" "}
          <span className="text-[#3B82C4]">
            Finances & Taxes?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[14px] sm:text-[16px] text-[#E8F3FA]/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Schedule a direct consultation with our senior Chartered Accountant partners today and protect your enterprise against statutory risk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={() => handleScroll("contact")}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#3B82C4] hover:bg-[#5BA7D1] text-white font-semibold text-[14px] sm:text-[16px] shadow-xl shadow-[#3B82C4]/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
          >
            <PhoneCall className="w-5 h-5 text-white" />
            <span>Book a Consultation</span>
          </button>

          <button
            onClick={() => handleScroll("contact")}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-[14px] sm:text-[16px] border border-white/20 hover:border-[#3B82C4]/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-5 h-5 text-[#3B82C4]" />
            <span>Contact Us</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
