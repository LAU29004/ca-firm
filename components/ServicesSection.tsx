"use client";

import { motion } from "framer-motion";
import { Receipt, FileText, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { detailedServices, DetailedServiceCard } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Receipt,
  FileText,
};

export default function ServicesSection() {
  const handleConsultClick = (serviceId: string) => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      const selectField = document.getElementById("service-select") as HTMLSelectElement;
      if (selectField) {
        selectField.value = serviceId === "gst-indirect-tax" ? "GST" : "Taxation";
      }
      const navOffset = 80;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-[#E8F3FA] text-[#647586] relative overflow-hidden">
      {/* Background subtleties */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5BA7D1]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3B82C4]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#3B82C4]/30 text-[#3B82C4] text-[10px] sm:text-[12px] font-medium tracking-widest uppercase mb-4 shadow-xs"
          >
            <ShieldCheck className="w-4 h-4 text-[#3B82C4]" />
            <span>Our Core Practice Areas</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-bold text-[#263746] tracking-tight leading-[1.15]"
          >
            Comprehensive Tax & <span className="text-[#3B82C4]">Statutory Practice</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[14px] sm:text-[16px] text-[#647586] font-normal leading-relaxed"
          >
            End-to-end direct and indirect taxation, statutory audit compliance, litigation advocacy, and advisory tailored for corporate and enterprise growth.
          </motion.p>
        </div>

        {/* 2 Enhanced Practice Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {detailedServices.map((card: DetailedServiceCard, idx: number) => {
            const IconComponent = iconMap[card.iconName] || FileText;
            const isGold = card.accent === "gold";

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Accent Gradient Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 transition-opacity duration-300 ${
                    isGold ? "bg-gradient-to-r from-[#C29B2F] via-[#D4AF37] to-[#B08B54]" : "bg-gradient-to-r from-[#3B82C4] via-[#5BA7D1] to-[#24527A]"
                  }`}
                />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`p-3.5 rounded-2xl flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105 ${
                          isGold
                            ? "bg-[#FFF9EB] text-[#C29B2F] border border-[#F5E6B8]"
                            : "bg-[#E8F3FA] text-[#3B82C4] border border-[#C5E1F5]"
                        }`}
                      >
                        <IconComponent className="w-7 h-7 stroke-[2]" />
                      </div>

                      <div>
                        <h3 className="text-[22px] sm:text-[26px] font-bold text-[#263746] tracking-tight group-hover:text-[#24527A] transition-colors">
                          {card.title}
                        </h3>
                        <span className="text-[11px] font-medium text-[#647586] uppercase tracking-wider block mt-0.5">
                          {card.badge}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`text-[11px] font-semibold px-3 py-1 rounded-full ${
                        isGold ? "bg-[#FFF9EB] text-[#C29B2F]" : "bg-[#E8F3FA] text-[#3B82C4]"
                      }`}
                    >
                      {card.groups.reduce((acc, g) => acc + g.items.length, 0)} Key Practices
                    </span>
                  </div>

                  {/* Sub-Group Sections */}
                  <div className="space-y-8">
                    {card.groups.map((group, gIdx) => (
                      <div key={gIdx}>
                        {/* Sub-Group Title */}
                        <div className="flex items-center gap-2 mb-3.5">
                          <span
                            className={`text-[11px] sm:text-[12px] font-bold tracking-widest uppercase ${
                              isGold ? "text-[#C29B2F]" : "text-[#3B82C4]"
                            }`}
                          >
                            {group.title}
                          </span>
                          <div className="h-px bg-slate-100 flex-1" />
                        </div>

                        {/* List Items */}
                        <div className="space-y-1">
                          {group.items.map((item, itemIdx) => (
                            <div
                              key={itemIdx}
                              className="group/item flex items-start gap-3 p-2 sm:p-2.5 rounded-xl hover:bg-[#F8FAFC] transition-colors duration-200"
                            >
                              <div
                                className={`p-0.5 rounded-full mt-0.5 shrink-0 ${
                                  isGold
                                    ? "bg-[#FFF9EB] text-[#C29B2F]"
                                    : "bg-[#E8F3FA] text-[#3B82C4]"
                                }`}
                              >
                                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                              </div>
                              <span className="text-[13px] sm:text-[14px] text-[#263746] font-normal leading-snug group-hover/item:text-[#24527A] transition-colors">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-8 mt-8 border-t border-slate-100">
                  <button
                    onClick={() => handleConsultClick(card.id)}
                    className={`w-full py-3.5 px-6 rounded-xl text-white font-semibold text-[14px] sm:text-[15px] shadow-md transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 ${
                      isGold
                        ? "bg-[#24527A] hover:bg-[#3B82C4] shadow-[#24527A]/20"
                        : "bg-[#3B82C4] hover:bg-[#5BA7D1] shadow-[#3B82C4]/20"
                    }`}
                  >
                    <span>Book Consultation for {card.title}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
