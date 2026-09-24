"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  IndianRupee,
  FileSpreadsheet,
} from "lucide-react";
import { firmDetails } from "@/lib/data";

export default function Hero() {
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen bg-[#24527A] text-white flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Background Subtle Patterns & Glows */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#3B82C4]/30 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-[450px] h-[450px] bg-[#5BA7D1]/20 blur-[130px] rounded-full pointer-events-none" />

      {/* Floating Financial Symbols */}
      <div className="absolute top-32 left-8 lg:left-24 text-[#5BA7D1]/30 font-bold text-5xl pointer-events-none select-none animate-pulse">
        ₹
      </div>
      <div className="absolute bottom-24 left-12 lg:left-36 text-[#5BA7D1]/30 font-bold text-4xl pointer-events-none select-none">
        %
      </div>
      <div className="absolute top-48 right-12 lg:right-1/3 text-[#5BA7D1]/30 pointer-events-none select-none">
        <TrendingUp className="w-16 h-16 stroke-[1.5]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3FA]/15 border border-[#3B82C4]/40 text-[#E8F3FA] text-[10px] sm:text-[12px] font-medium tracking-wider uppercase mb-6 w-fit"
            >
              <ShieldCheck className="w-4 h-4 text-[#3B82C4]" />
              <span>{firmDetails.eyebrow}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[36px] sm:text-[42px] md:text-[56px] lg:text-[68px] font-bold tracking-tight text-white leading-[1.1] mb-6"
            >
              Numbers That Build{" "}
              <span className="block mt-1 text-[#3B82C4]">
                Stronger Businesses.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-[14px] sm:text-[16px] text-[#E8F3FA]/90 font-normal max-w-2xl leading-relaxed mb-8 sm:mb-10"
            >
              Comprehensive chartered accountancy services — GST compliance,
              income tax planning , audits , RERA certifications and more —
              helping businesses stay compliant and grow.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
            >
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="group relative overflow-hidden px-8 py-4 rounded-xl bg-[#3B82C4] hover:bg-[#5BA7D1] text-white text-[14px] sm:text-[16px] font-semibold shadow-xl shadow-[#3B82C4]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 text-center"
              >
                <span>Book a Consultation</span>
              </a>

              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, "services")}
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-[14px] sm:text-[16px] border border-white/20 hover:border-[#3B82C4]/40 transition-all duration-300 flex items-center justify-center gap-2 text-center"
              >
                <span>Explore Our Services</span>
              </a>
            </motion.div>

            {/* Micro Trust Indicators */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="relative z-10 pt-6 pb-6 grid grid-cols-2 sm:grid-cols-3 gap-4"
  >
    <div className="flex items-center gap-2.5 text-[12px] sm:text-[14px] text-[#E8F3FA]/90 font-medium">
      <CheckCircle2 className="w-4 h-4 text-[#3B82C4] shrink-0" />
      <span>ICAI Registered Firm</span>
    </div>

    <div className="flex items-center gap-2.5 text-[12px] sm:text-[14px] text-[#E8F3FA]/90 font-medium">
      <CheckCircle2 className="w-4 h-4 text-[#3B82C4] shrink-0" />
      <span>100% Tax Filing Accuracy</span>
    </div>

    <div className="flex items-center gap-2.5 text-[12px] sm:text-[14px] text-[#E8F3FA]/90 font-medium">
      <CheckCircle2 className="w-4 h-4 text-[#3B82C4] shrink-0" />
      <span>Dedicated CA Partner</span>
    </div>
  </motion.div>
</div>

          {/* Right Column: Hero Image Composition */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Sky Blue Curved Backdrop */}
              <div className="absolute -inset-4 bg-[#3B82C4]/20 rounded-3xl blur-xl transform -rotate-3 scale-105 pointer-events-none" />

              {/* Decorative Arc */}
              <div className="absolute -top-8 -right-8 w-40 h-40 border-2 border-[#5BA7D1]/30 rounded-full pointer-events-none hidden sm:block animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[#3B82C4]/20 rounded-full pointer-events-none hidden sm:block" />

              {/* Main Image Wrapper */}
              <div className="relative rounded-2xl overflow-hidden border border-[#3B82C4]/40 shadow-2xl bg-[#24527A] group">
                <div className="relative aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
                    alt="Chartered Accountant and financial consultants reviewing tax strategy"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24527A] via-transparent to-transparent opacity-80" />
                </div>

                {/* Floating Metric Badge 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="absolute top-6 left-6 bg-white/95 backdrop-blur-md border border-[#3B82C4]/30 px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 text-[#263746]"
                >
                  <div className="p-2 rounded-lg bg-[#E8F3FA] text-[#3B82C4]">
                    <IndianRupee className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-[12px] text-[#647586] font-medium uppercase tracking-wider">
                      Statutory Tax
                    </p>
                    <p className="text-[14px] font-bold text-[#263746]">
                      ₹100Cr+ Client Portfolios
                    </p>
                  </div>
                </motion.div>

                {/* Floating Metric Badge 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.85 }}
                  className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md border border-[#3B82C4]/30 p-4 rounded-xl shadow-xl flex items-center gap-3.5 max-w-[260px] text-[#263746]"
                >
                  <div className="p-2.5 rounded-lg bg-[#3B82C4] text-white font-bold">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-[18px] font-bold text-[#3B82C4]">
                        99.8%
                      </span>
                      <span className="text-[10px] text-[#647586] uppercase tracking-widest font-medium">
                        Audit Rate
                      </span>
                    </div>
                    <p className="text-[12px] text-[#263746] font-normal">
                      Flawless Compliance Index
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
