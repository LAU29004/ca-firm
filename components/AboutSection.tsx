"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle,
  Headphones,
  IndianRupee,
  LocateFixed,
  LocateIcon,
  MapPin,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { firmDetails } from "@/lib/data";

export default function AboutSection() {
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
    <section
      id="about"
      className="py-20 lg:py-32 bg-[#F8FAFC] relative overflow-hidden text-[#647586]"
    >
      {/* Background subtleties */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetrical Overlapping Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Image 1: Main Large Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[4/3] w-[88%] z-10"
              >
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                  alt="Senior Chartered Accountant leading strategic advisory meeting"
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Image 2: Secondary Overlapping Image */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -bottom-10 -right-2 sm:-right-6 w-[55%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white z-20"
              >
                <Image
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
                  alt="Financial analysis and auditing reports"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Floating Deep Blue Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-6 -left-2 sm:-left-6 z-30 bg-[#24527A] border-2 border-[#3B82C4] text-white p-5 rounded-2xl shadow-xl flex items-center gap-4 max-w-[220px]"
              >
                <div className="p-3 rounded-xl bg-[#3B82C4] text-white shrink-0">
                  <Award className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <span className="block text-[20px] font-bold text-[#E8F3FA] leading-none">
                    14+ Years
                  </span>
                  <span className="text-[12px] text-slate-300 font-medium leading-tight block mt-1">
                    of Statutory & Tax Leadership
                  </span>
                </div>
              </motion.div>

              {/* Decorative Accent Box */}
              <div className="absolute -bottom-6 -left-6 w-36 h-36 border-2 border-dashed border-[#3B82C4]/30 rounded-2xl -z-10 hidden sm:block" />
            </div>
          </div>

          {/* Right Column: Text Information */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3FA] border border-[#3B82C4]/30 text-[#3B82C4] text-[10px] sm:text-[12px] font-medium tracking-wider uppercase mb-4">
                <ShieldCheck className="w-4 h-4 text-[#3B82C4]" />
                <span>About Narhari V.Dixit & Co.</span>
              </div>

              <h2 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-bold text-[#263746] tracking-tight leading-[1.15] mb-4">
                Our Commitment
              </h2>

              <p className="text-[16px] sm:text-[18px] font-semibold text-[#263746] mb-6">
                Helping Businesses Make Better Financial & Statutory Decisions
              </p>

              <p className="text-[14px] sm:text-[16px] text-[#647586] font-normal leading-relaxed mb-6">
                We don’t just file your returns — we become your trusted
                financial partner, helping you make informed decisions at every
                stage of your business journey.
              </p>
            </motion.div>

            {/* Core Value Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#3B82C4] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[14px] sm:text-[16px] font-semibold text-[#263746]">
                    Qualified CA
                  </h4>
                  <p className="text-[12px] text-[#647586] mt-0.5 font-normal">
                    Expert guidance backed by professional CA expertise.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E8F3FA] flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-[#3B82C4] shrink-0 mt-0.5" />
                </div>

                <div>
                  <h4 className="text-[14px] sm:text-[16px] font-semibold text-[#263746]">
                    Tax Strategy
                  </h4>
                  <p className="text-[12px] text-[#647586] mt-0.5 font-normal">
                    Smarter planning for better tax efficiency.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E8F3FA] flex items-center justify-center shrink-0">
                  <IndianRupee className="w-5 h-5 text-[#3B82C4] shrink-0 mt-0.5" />
                </div>

                <div>
                  <h4 className="text-[14px] sm:text-[16px] font-semibold text-[#263746]">
                    Transparent Pricing
                  </h4>
                  <p className="text-[12px] text-[#647586] mt-0.5 font-normal">
                    Clear scope and pricing with no surprises.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E8F3FA] flex items-center justify-center shrink-0">
                  <Headphones
                    className="w-5 h-5 text-[#3B82C4]"
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <h4 className="text-[14px] sm:text-[16px] font-semibold text-[#263746]">
                    Year-round Support
                  </h4>
                  <p className="text-[12px] text-[#647586] mt-0.5 font-normal">
                    Reliable financial support whenever you need it.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E8F3FA] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#3B82C4] shrink-0 mt-0.5" />
                </div>

                <div>
                  <h4 className="text-[14px] sm:text-[16px] font-semibold text-[#263746]">
                    PAN India GST
                  </h4>
                  <p className="text-[12px] text-[#647586] mt-0.5 font-normal">
                    GST support for businesses across India.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E8F3FA] flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-[#3B82C4] shrink-0 mt-0.5" />
                </div>

                <div>
                  <h4 className="text-[14px] sm:text-[16px] font-semibold text-[#263746]">
                    Multi-industry
                  </h4>
                  <p className="text-[12px] text-[#647586] mt-0.5 font-normal">
                    Solutions tailored to your industry's needs.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                onClick={() => handleScroll("why-us")}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-[#24527A] hover:bg-[#3B82C4] text-white font-semibold text-[14px] sm:text-[16px] shadow-lg shadow-[#24527A]/20 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>Know More About Us</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
