"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Phone, Mail, Navigation } from "lucide-react";
import { firmDetails } from "@/lib/data";

export default function LocationSection() {
  return (
    <section className="py-20 bg-[#24527A] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3FA] text-[#3B82C4] text-[10px] sm:text-[12px] font-medium tracking-widest uppercase mb-3"
          >
            <Building2 className="w-4 h-4" />
            <span>Presence</span>
          </motion.div>

          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-white tracking-tight">
            Our Practice Locations
          </h2>
          <p className="text-[14px] text-slate-300 mt-2 font-normal">
            Strategic offices in Pune and Mumbai serving clients across India and international trade corridors.
          </p>
        </div>

        {/* Visual Map / Office Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Map Placeholder Card */}
          <div className="lg:col-span-7 bg-[#24527A] border border-slate-600/80 rounded-3xl overflow-hidden shadow-2xl relative min-h-[340px] flex flex-col justify-between p-6 sm:p-8">
            
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] sm:text-[12px] font-bold text-[#E8F3FA] font-mono tracking-widest uppercase bg-[#24527A]/90 border border-[#3B82C4]/40 px-3.5 py-1.5 rounded-full">
                Interactive Headquarters Map
              </span>
              <span className="text-[12px] text-slate-300 font-medium">Pune & Mumbai Desks</span>
            </div>

            {/* Central Pin Graphic */}
            <div className="relative z-10 my-10 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
              
              {/* Pune Pin */}
              <div className="flex flex-col items-center group">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-[#3B82C4]/20 border-2 border-[#3B82C4] flex items-center justify-center animate-bounce">
                    <MapPin className="w-6 h-6 text-[#3B82C4]" />
                  </div>
                  <div className="w-4 h-1.5 bg-[#3B82C4]/40 rounded-full mx-auto blur-xs mt-1" />
                </div>
                <p className="text-[14px] font-bold text-white mt-2">Pune Corporate H.Q.</p>
                <p className="text-[11px] text-slate-300 font-normal">Senapati Bapat Road</p>
              </div>

              {/* Connecting Line */}
              <div className="hidden sm:block w-24 h-0.5 bg-gradient-to-r from-[#3B82C4] via-slate-500 to-[#3B82C4] border-dashed" />

              {/* Mumbai Pin */}
              <div className="flex flex-col items-center group">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-[#24527A] border-2 border-slate-500 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-slate-300" />
                  </div>
                  <div className="w-4 h-1.5 bg-slate-500/40 rounded-full mx-auto blur-xs mt-1" />
                </div>
                <p className="text-[14px] font-bold text-white mt-2">Mumbai Advisory Desk</p>
                <p className="text-[11px] text-slate-300 font-normal">Nariman Point</p>
              </div>

            </div>

            {/* Map Card Footer */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-600/80 text-[12px]">
              <span className="text-slate-200 font-normal">
                📍 {firmDetails.address}
              </span>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(firmDetails.address)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#E8F3FA] font-semibold hover:underline"
              >
                <Navigation className="w-3.5 h-3.5 text-[#3B82C4]" />
                <span>Open in Google Maps</span>
              </a>
            </div>

          </div>

          {/* Location Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* H.Q. Card */}
            <div className="bg-[#24527A]/80 border border-[#3B82C4]/40 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[16px] sm:text-[18px] font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#3B82C4]" />
                  <span>Pune • Maharashtra (H.Q.)</span>
                </h3>
                <span className="text-[10px] font-medium text-[#E8F3FA] uppercase tracking-widest bg-[#3B82C4]/20 px-2.5 py-1 rounded border border-[#3B82C4]/30">
                  Main Practice
                </span>
              </div>
              <p className="text-[12px] sm:text-[14px] text-slate-200 mb-3 leading-relaxed font-normal">
                {firmDetails.address}
              </p>
              <div className="flex items-center gap-4 text-[12px] text-slate-300 pt-3 border-t border-slate-600/80">
                <span className="flex items-center gap-1 font-medium">
                  <Phone className="w-3.5 h-3.5 text-[#3B82C4]" />
                  {firmDetails.phone}
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <Mail className="w-3.5 h-3.5 text-[#3B82C4]" />
                  {firmDetails.email}
                </span>
              </div>
            </div>

            {/* Branch Card */}
            <div className="bg-[#24527A]/80 border border-slate-600/80 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[16px] sm:text-[18px] font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-slate-400" />
                  <span>Mumbai • Maharashtra</span>
                </h3>
                <span className="text-[10px] font-medium text-slate-300 uppercase tracking-widest bg-[#24527A] px-2.5 py-1 rounded">
                  Branch Desk
                </span>
              </div>
              <p className="text-[12px] sm:text-[14px] text-slate-200 mb-3 leading-relaxed font-normal">
                {firmDetails.mumbaiAddress}
              </p>
              <div className="flex items-center gap-4 text-[12px] text-slate-300 pt-3 border-t border-slate-600/80">
                <span className="flex items-center gap-1 font-medium">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  {firmDetails.secondaryPhone}
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  {firmDetails.secondaryEmail}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
