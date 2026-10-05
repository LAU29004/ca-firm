"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Receipt, FileText, Check, ChevronDown, ShieldCheck } from "lucide-react";
import { detailedServices, DetailedServiceCard } from "@/lib/data";

// `service` must exactly match one of the <option> values in ContactSection.
// Add it to each card in lib/data.ts (and to the DetailedServiceCard type).
type ServiceCard = DetailedServiceCard & { service?: string };

const iconMap: Record<string, React.ElementType> = {
  Receipt,
  FileText,
};

const DEFAULT_SERVICE = "Taxation & Regulatory Compliance";

// Items shown per group before "Show more" is clicked
const VISIBLE_ITEMS = 3;

const cards = detailedServices as ServiceCard[];

// Grid adapts to however many cards exist; every card in a row is the same size
const gridCols =
  cards.length === 1
    ? "grid-cols-1 max-w-xl mx-auto"
    : cards.length === 2
      ? "grid-cols-1 lg:grid-cols-2"
      : cards.length === 3
        ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        : "grid-cols-1 md:grid-cols-2 xl:grid-cols-4";

// Use a 2-column item list inside a card only when cards are wide enough
const itemCols = cards.length <= 2 ? "sm:grid-cols-2" : "grid-cols-1";

export default function ServicesSection() {
  // One shared state so all cards expand/collapse together and stay equal height
  const [showAll, setShowAll] = useState(false);

  const hasHidden = cards.some((c) =>
    c.groups.some((g) => g.items.length > VISIBLE_ITEMS),
  );

  const handleConsultClick = (card: ServiceCard) => {
    // ContactSection listens for this and updates its controlled form state
    window.dispatchEvent(
      new CustomEvent("set-service", {
        detail: card.service ?? DEFAULT_SERVICE,
      }),
    );

    const contactEl = document.getElementById("contact");
    if (contactEl) {
      const navOffset = 80;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-16 lg:py-24 bg-[#E8F3FA] text-[#647586] relative overflow-hidden"
    >
      {/* Background subtleties */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5BA7D1]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3B82C4]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
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
            className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-[#263746] tracking-tight leading-[1.15]"
          >
            Comprehensive Tax &{" "}
            <span className="text-[#3B82C4]">Statutory Practice</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-[14px] sm:text-[15px] text-[#647586] font-normal leading-relaxed"
          >
            End-to-end direct and indirect taxation, statutory audit compliance,
            litigation advocacy, and advisory tailored for corporate and
            enterprise growth.
          </motion.p>
        </div>

        {/* Equal-size Cards Grid (grid items stretch to the tallest card in the row) */}
        <div className={`grid gap-6 lg:gap-8 ${gridCols}`}>
          {cards.map((card, idx) => {
            const IconComponent = iconMap[card.iconName] || FileText;
            const isGold = card.accent === "gold";
            const totalItems = card.groups.reduce(
              (acc, g) => acc + g.items.length,
              0,
            );

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative min-w-0 h-full bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-shadow duration-500 flex flex-col overflow-hidden"
              >
                {/* Top Accent Gradient Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${
                    isGold
                      ? "bg-gradient-to-r from-[#C29B2F] via-[#D4AF37] to-[#B08B54]"
                      : "bg-gradient-to-r from-[#3B82C4] via-[#5BA7D1] to-[#24527A]"
                  }`}
                />

                {/* Card Header */}
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-3 pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-3 flex-1 min-w-[200px]">
                    <div
                      className={`p-2.5 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                        isGold
                          ? "bg-[#FFF9EB] text-[#C29B2F] border border-[#F5E6B8]"
                          : "bg-[#E8F3FA] text-[#3B82C4] border border-[#C5E1F5]"
                      }`}
                    >
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[18px] sm:text-[20px] font-bold text-[#263746] tracking-tight leading-tight break-words">
                        {card.title}
                      </h3>
                      <span className="text-[10px] font-medium text-[#647586] uppercase tracking-wider block mt-0.5">
                        {card.badge}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap shrink-0 ${
                      isGold
                        ? "bg-[#FFF9EB] text-[#C29B2F]"
                        : "bg-[#E8F3FA] text-[#3B82C4]"
                    }`}
                  >
                    {totalItems} Practices
                  </span>
                </div>

                {/* Sub-Group Sections (flex-1 pushes the footer to the bottom) */}
                <div className="space-y-4 flex-1">
                  {card.groups.map((group, gIdx) => {
                    const visibleItems = showAll
                      ? group.items
                      : group.items.slice(0, VISIBLE_ITEMS);

                    return (
                      <div key={gIdx}>
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`text-[10px] sm:text-[11px] font-bold tracking-widest uppercase ${
                              isGold ? "text-[#C29B2F]" : "text-[#3B82C4]"
                            }`}
                          >
                            {group.title}
                          </span>
                          <div className="h-px bg-slate-100 flex-1" />
                        </div>

                        <ul className={`grid gap-x-3 gap-y-0.5 ${itemCols}`}>
                          {visibleItems.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="flex items-start gap-2 px-1.5 py-1.5 rounded-lg hover:bg-[#F8FAFC] transition-colors duration-200"
                            >
                              <span
                                className={`p-0.5 rounded-full mt-0.5 shrink-0 ${
                                  isGold
                                    ? "bg-[#FFF9EB] text-[#C29B2F]"
                                    : "bg-[#E8F3FA] text-[#3B82C4]"
                                }`}
                              >
                                <Check className="w-3 h-3 stroke-[3]" />
                              </span>
                              <span className="text-[12.5px] text-[#263746] font-normal leading-snug">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                {/* Card Action Footer (always pinned to the bottom) */}
                <div className="pt-4 mt-5 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => handleConsultClick(card)}
                    className={`w-full py-2.5 px-5 rounded-lg text-white font-semibold text-[13px] sm:text-[14px] shadow-sm transition-all duration-300 flex items-center justify-center cursor-pointer hover:-translate-y-0.5 active:translate-y-0 ${
                      isGold
                        ? "bg-[#24527A] hover:bg-[#3B82C4]"
                        : "bg-[#3B82C4] hover:bg-[#5BA7D1]"
                    }`}
                  >
                    <span>Book Consultation for {card.title}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Single toggle controlling all cards together */}
        {hasHidden && (
          <div className="flex justify-center mt-8">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#3B82C4]/30 text-[#3B82C4] text-[13px] font-semibold hover:bg-[#3B82C4] hover:text-white transition-colors cursor-pointer shadow-xs"
            >
              <span>{showAll ? "Show fewer practices" : "View all practices"}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}