"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star, ShieldCheck } from "lucide-react";
import { testimonialsData, TestimonialItem } from "@/lib/data";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current: TestimonialItem = testimonialsData[currentIndex];

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden text-[#647586]">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3FA] border border-[#3B82C4]/30 text-[#3B82C4] text-[10px] sm:text-[12px] font-medium tracking-widest uppercase mb-4"
          >
            <ShieldCheck className="w-4 h-4 text-[#3B82C4]" />
            <span>Client Endorsements</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-bold text-[#263746] tracking-tight"
          >
            What Our <span className="text-[#3B82C4]">Clients Say</span>
          </motion.h2>
        </div>

        {/* Testimonial Card Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl">
            
            {/* Background Quote Icon */}
            <Quote className="absolute top-8 right-8 sm:top-12 sm:right-12 w-20 h-20 text-[#263746]/5 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-6 text-[#3B82C4]">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#3B82C4] stroke-none" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-[16px] sm:text-[20px] font-normal text-[#263746] leading-relaxed italic mb-8">
                    "{current.quote}"
                  </p>
                </div>

                {/* Client Profile Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-300">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#3B82C4] shadow-md">
                      <Image
                        src={current.avatarUrl}
                        alt={current.clientName}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-semibold text-[#263746]">{current.clientName}</h4>
                      <p className="text-[12px] sm:text-[14px] text-[#647586] font-normal">
                        {current.role}, <span className="text-[#3B82C4] font-semibold">{current.company}</span>
                      </p>
                    </div>
                  </div>

                  {/* Slider Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-3 rounded-full bg-white border border-slate-200 text-[#263746] hover:bg-[#3B82C4] hover:text-white transition-colors shadow-xs cursor-pointer"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-3 rounded-full bg-white border border-slate-200 text-[#263746] hover:bg-[#3B82C4] hover:text-white transition-colors shadow-xs cursor-pointer"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? "w-8 bg-[#3B82C4]" : "w-2 bg-slate-300"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
