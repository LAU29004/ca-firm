"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { servicesData, ServiceItem } from "@/lib/data";

export default function HorizontalServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);
  const [currentCardNum, setCurrentCardNum] = useState(1);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (val) => {
      const cardIndex = Math.min(10, Math.max(1, Math.ceil(val * 10)));
      setCurrentCardNum(cardIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const handleMobileScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.firstElementChild?.clientWidth || 300;
      const newIdx = Math.round(scrollLeft / cardWidth);
      setActiveMobileIdx(newIdx);
    }
  };

  const handleScrollToContact = () => {
    const target = document.getElementById("contact");
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#24527A] text-white relative">
      {/* ----------------- DESKTOP PINNED HORIZONTAL SCROLL ----------------- */}
      <div ref={containerRef} className="hidden lg:block relative h-[300vh] bg-[#24527A]">
        <div className="sticky top-0 h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden">
          
          {/* Header & Indicator Row */}
          <div className="max-w-7xl mx-auto px-6 w-full flex items-end justify-between mb-8 z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F3FA] text-[#3B82C4] text-[10px] sm:text-[12px] font-medium uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Service Deep Dive</span>
              </div>
              <h2 className="text-[28px] sm:text-[34px] font-bold text-white tracking-tight">
                Cinematic Showcase: <span className="text-[#3B82C4]">Our 10 Core Practices</span>
              </h2>
            </div>

            {/* Progress Indicator 01 / 10 */}
            <div className="flex items-center gap-4">
              <span className="text-[12px] font-medium text-slate-300 uppercase tracking-widest">
                Scroll to Explore
              </span>
              <div className="flex items-center gap-2 font-mono text-lg font-bold bg-[#24527A] border border-[#3B82C4]/30 px-4 py-2 rounded-xl text-[#3B82C4]">
                <span>{String(currentCardNum).padStart(2, "0")}</span>
                <span className="text-slate-400">/</span>
                <span className="text-slate-200">10</span>
              </div>
            </div>
          </div>

          {/* Horizontal Sliding Cards Track */}
          <div className="w-full flex items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-8 px-12 sm:px-24">
              {servicesData.map((service: ServiceItem) => (
                <div
                  key={service.id}
                  className="w-[500px] shrink-0 bg-[#24527A] border border-slate-600/80 hover:border-[#3B82C4] rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between group transition-all duration-300"
                >
                  {/* Card Header Image */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      sizes="500px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#24527A] via-[#24527A]/30 to-transparent" />
                    
                    <span className="absolute top-4 left-4 bg-[#3B82C4] text-white font-mono text-sm font-bold px-3 py-1 rounded-lg">
                      {service.number}
                    </span>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-[20px] sm:text-[22px] font-semibold text-white group-hover:text-[#E8F3FA] transition-colors mb-3">
                        {service.title}
                      </h3>
                      <p className="text-[14px] text-slate-200 leading-relaxed mb-6 font-normal">
                        {service.fullDetails}
                      </p>

                      <div className="space-y-2 mb-6">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2.5 text-[12px] sm:text-[14px] text-slate-200 font-normal">
                            <CheckCircle2 className="w-4 h-4 text-[#3B82C4] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={handleScrollToContact}
                      className="w-full py-3 rounded-xl bg-[#3B82C4] hover:bg-[#5BA7D1] text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-[14px] sm:text-[16px] cursor-pointer"
                    >
                      <span>Engage Practice Team</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="max-w-7xl mx-auto px-6 w-full mt-6">
            <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                className="h-full bg-[#3B82C4]"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ----------------- MOBILE / TABLET SWIPEABLE CAROUSEL ----------------- */}
      <div className="block lg:hidden py-16 px-4 bg-[#24527A]">
        <div className="max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F3FA] text-[#3B82C4] text-[10px] font-medium uppercase tracking-wider mb-2">
            <span>Core Practice Areas</span>
          </div>
          <h2 className="text-[24px] sm:text-[28px] font-bold text-white">
            Explore All <span className="text-[#3B82C4]">10 Services</span>
          </h2>
          <p className="text-[12px] text-slate-300 mt-1 font-normal">Swipe horizontally to view detailed solutions.</p>
        </div>

        {/* Carousel container */}
        <div
          ref={carouselRef}
          onScroll={handleMobileScroll}
          className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2 pb-6"
        >
          {servicesData.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="w-[85vw] max-w-[340px] shrink-0 snap-center bg-[#24527A] border border-slate-600 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  sizes="340px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24527A] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#3B82C4] text-white font-mono text-xs font-bold px-2.5 py-1 rounded-md">
                  {service.number}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[18px] font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-[12px] text-slate-200 leading-relaxed mb-4 font-normal">{service.description}</p>
                  
                  <div className="space-y-1.5 mb-5">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[12px] text-slate-200 font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82C4] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleScrollToContact}
                  className="w-full py-2.5 rounded-xl bg-[#3B82C4] hover:bg-[#5BA7D1] text-white text-[14px] font-semibold flex items-center justify-center gap-1.5"
                >
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-2">
          {servicesData.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeMobileIdx === idx ? "w-6 bg-[#3B82C4]" : "w-1.5 bg-slate-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
