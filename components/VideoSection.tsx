"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play, ShieldCheck } from "lucide-react";
import VideoModal from "./VideoModal";

export default function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="py-24 lg:py-36 bg-[#24527A] text-white relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80"
            alt="Corporate CA advisory and executive strategy presentation"
            fill
            sizes="100vw"
            className="object-cover opacity-20 filter grayscale mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#24527A] via-[#24527A]/90 to-[#24527A]/80" />
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F3FA] border border-[#3B82C4]/40 text-[#3B82C4] text-[10px] sm:text-[12px] font-medium tracking-widest uppercase mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-[#3B82C4]" />
            <span>Corporate Philosophy</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[36px] sm:text-[42px] md:text-[56px] lg:text-[68px] font-bold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto mb-8"
          >
            Making Finance Simpler. <br />
            <span className="text-[#3B82C4]">
              Helping Businesses Move Forward.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] sm:text-[16px] text-slate-300 max-w-2xl mx-auto mb-12 font-normal leading-relaxed"
          >
            Watch how our dedicated senior Chartered Accountants combine statutory precision with strategic business foresight to accelerate enterprise growth.
          </motion.p>

          {/* Central Play Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <button
              onClick={() => setIsVideoOpen(true)}
              className="group relative flex items-center justify-center focus:outline-none cursor-pointer"
              aria-label="Play leadership video"
            >
              {/* Outer Pulse Rings */}
              <div className="absolute inset-0 rounded-full bg-[#3B82C4]/20 animate-ping group-hover:bg-[#3B82C4]/30 scale-125" />
              <div className="absolute -inset-4 rounded-full border border-[#3B82C4]/40 group-hover:scale-110 transition-transform duration-500" />

              {/* Glowing Center Button */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#3B82C4] hover:bg-[#5BA7D1] text-white flex items-center justify-center shadow-2xl shadow-[#3B82C4]/40 group-hover:scale-105 transition-transform duration-300">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1 group-hover:scale-110 transition-transform" />
              </div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </>
  );
}
