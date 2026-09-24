"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ShieldCheck, CheckCircle2 } from "lucide-react";
import { firmDetails } from "@/lib/data";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#24527A]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#24527A] border border-[#3B82C4]/40 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-700 bg-[#24527A]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#3B82C4]" />
                <span className="text-[14px] sm:text-[16px] font-semibold text-white tracking-wide">
                  {firmDetails.name} — Corporate Vision & Practice Standards
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Player Placeholder Frame */}
            <div className="relative aspect-video bg-black flex flex-col items-center justify-center text-center p-8 text-white">
              <div className="w-20 h-20 rounded-full bg-[#3B82C4]/20 border border-[#3B82C4] flex items-center justify-center mb-4 animate-pulse">
                <Play className="w-8 h-8 text-[#3B82C4] fill-[#3B82C4] ml-1" />
              </div>
              <h3 className="text-[20px] sm:text-[24px] font-bold text-white mb-2">
                Executive Leadership Presentation
              </h3>
              <p className="text-[14px] sm:text-[16px] text-slate-300 max-w-md mb-6 font-normal">
                Discover how our senior Chartered Accountants drive statutory compliance, tax efficiency, and Virtual CFO governance for growing companies.
              </p>
              
              <div className="flex items-center gap-4 text-[12px] text-[#E8F3FA] font-semibold bg-[#24527A]/80 px-4 py-2 rounded-full border border-[#3B82C4]/30">
                <CheckCircle2 className="w-4 h-4 text-[#3B82C4]" />
                <span>Video Showcase Prototype Placeholder</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
