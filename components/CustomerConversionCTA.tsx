"use client";

import { motion } from "framer-motion";
import { PhoneCall, ShieldCheck, ArrowRight, MessageSquare } from "lucide-react";

export default function CustomerConversionCTA() {
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
    <section className="py-20 bg-[#24527A] text-white relative overflow-hidden border-y border-[#3B82C4]/30">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#3B82C4]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F3FA]/15 border border-[#3B82C4]/40 text-[#E8F3FA] text-[10px] sm:text-[12px] font-medium tracking-widest uppercase mb-4"
        >
          <ShieldCheck className="w-4 h-4 text-[#3B82C4]" />
          <span>Direct Access to Senior CA Partners</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-bold text-white tracking-tight leading-tight mb-4"
        >
          Have a Financial or Tax Question? <br className="hidden sm:block" />
          <span className="text-[#3B82C4]">Let's Talk Business.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[14px] sm:text-[16px] text-[#E8F3FA]/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Whether you need immediate GST notice resolution, statutory audit planning, or complete Virtual CFO support, our team is ready to assist.
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
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#3B82C4] hover:bg-[#5BA7D1] text-white font-semibold text-[14px] sm:text-[16px] shadow-xl shadow-[#3B82C4]/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-5 h-5 text-white" />
            <span>Book a Consultation</span>
          </button>

          <button
            onClick={() => handleScroll("contact")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-[14px] sm:text-[16px] border border-white/20 hover:border-[#3B82C4]/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 text-[#3B82C4]" />
            <span>Send Direct Message</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
