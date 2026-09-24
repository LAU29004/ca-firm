"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, PhoneCall, TrendingUp } from "lucide-react";

export default function AdvisorySection() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const handleConsultClick = () => {
    const el = document.getElementById("contact");
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-[#24527A] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#3B82C4]/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Parallax */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              <div className="overflow-hidden rounded-2xl border border-[#3B82C4]/40 shadow-2xl relative aspect-[4/3] sm:aspect-[16/11]">
                <motion.div style={{ y: yImage }} className="relative w-full h-[115%] -top-[7%]">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                    alt="Chartered Accountants advising company directors"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24527A]/80 via-transparent to-transparent" />
                </motion.div>
              </div>

              {/* Floating Statistic Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -right-2 sm:-right-6 bg-[#24527A] border-2 border-[#3B82C4] p-5 rounded-2xl shadow-2xl max-w-[260px] flex items-center gap-4 text-white"
              >
                <div className="p-3 rounded-xl bg-[#3B82C4] text-white font-bold">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[22px] sm:text-[24px] font-bold text-[#E8F3FA]">₹68L+</span>
                  <span className="text-[12px] text-slate-200 font-normal leading-tight block mt-0.5">
                    Average Annual Tax Savings Identified per Enterprise
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right Column: Text & Features */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3FA] border border-[#3B82C4]/40 text-[#3B82C4] text-[10px] sm:text-[12px] font-medium tracking-widest uppercase mb-4">
                <ShieldCheck className="w-4 h-4 text-[#3B82C4]" />
                <span>Strategic Corporate Advisory</span>
              </div>

              <h2 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-bold text-white tracking-tight leading-[1.15] mb-6">
                Helping Businesses Stay Compliant & <span className="text-[#3B82C4]">Financially Strong</span>
              </h2>

              <p className="text-[14px] sm:text-[16px] text-slate-200 font-normal leading-relaxed mb-8">
                Navigating complex regulatory environments requires more than standard bookkeeping. We deliver executive Virtual CFO oversight, statutory audit defense, and capital advisory that protects your business balance sheet.
              </p>
            </motion.div>

            {/* Feature Bullets */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#24527A]/80 border border-slate-600/60">
                <CheckCircle2 className="w-5 h-5 text-[#3B82C4] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[14px] sm:text-[16px] font-semibold text-white">Full Statutory Protection</h4>
                  <p className="text-[12px] text-slate-300 mt-0.5 font-normal">Automated compliance tracking covering Income Tax, GST, MCA & TDS.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#24527A]/80 border border-slate-600/60">
                <CheckCircle2 className="w-5 h-5 text-[#3B82C4] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[14px] sm:text-[16px] font-semibold text-white">Virtual CFO Governance</h4>
                  <p className="text-[12px] text-slate-300 mt-0.5 font-normal">Direct senior CA leadership in monthly board meetings and investor updates.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleConsultClick}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#3B82C4] hover:bg-[#5BA7D1] text-white font-semibold text-[14px] sm:text-[16px] shadow-xl shadow-[#3B82C4]/20 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
            >
              <PhoneCall className="w-5 h-5 text-white" />
              <span>Talk to a CA Expert</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
