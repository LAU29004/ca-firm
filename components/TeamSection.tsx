"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Mail, Award } from "lucide-react";
import { teamData, TeamMember } from "@/lib/data";

export default function TeamSection() {
  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="team"
      className="py-20 lg:py-28 bg-[#E8F3FA] text-[#647586] relative overflow-hidden"
    >
      {/* Background subtleties */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#3B82C4]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#5BA7D1]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#3B82C4]/30 text-[#3B82C4] text-[10px] sm:text-[12px] font-medium tracking-widest uppercase mb-4"
          >
            <ShieldCheck className="w-4 h-4 text-[#3B82C4]" />
            <span>Senior Leadership</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-bold text-[#263746] tracking-tight"
          >
            Guided by <span className="text-[#3B82C4]">CA Narhari V.Dixit</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[14px] sm:text-[16px] text-[#647586] font-normal leading-relaxed"
          >
            With a commitment to accuracy, transparency and practical financial
            guidance, every client receives personalized attention and solutions
            aligned with their financial and business goals.
          </motion.p>
        </div>

        {/* Horizontal Rectangle Profiles */}
        <div className="max-w-5xl mx-auto space-y-6">
          {teamData.map((member: TeamMember, idx: number) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white border border-slate-200/90 hover:border-[#3B82C4] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row"
            >
              {/* Photo (left on desktop, top on mobile) */}
              <div className="relative w-full md:w-[38%] shrink-0 aspect-[4/3] md:aspect-auto md:min-h-[340px] overflow-hidden bg-[#24527A]">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#263746]/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#263746]/10" />

                {/* Qualification Badge */}
                <span className="absolute top-3 left-3 bg-[#E8F3FA]/95 backdrop-blur-md border border-[#3B82C4]/30 text-[#3B82C4] font-semibold text-[11px] px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>{member.qualification}</span>
                </span>
              </div>

              {/* Content (right on desktop, below on mobile) */}
              <div className="flex-1 min-w-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <h3 className="text-[22px] sm:text-[26px] font-bold text-[#263746] group-hover:text-[#3B82C4] transition-colors leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] font-semibold text-[#3B82C4] mt-1">
                    {member.role}
                  </p>
                  <p className="text-[11px] text-[#647586] font-medium tracking-wide uppercase mt-1.5">
                    {member.experience}
                  </p>
                </div>

                <div className="h-px bg-slate-100 mb-4" />

                <p className="text-[13px] sm:text-[14px] text-[#647586] font-normal leading-relaxed mb-5">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.expertise.map((exp, eIdx) => (
                    <span
                      key={eIdx}
                      className="text-[11px] font-medium bg-[#F8FAFC] border border-slate-200 text-[#263746] px-2.5 py-1 rounded-md"
                    >
                      {exp}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <div>
                  <button
                    type="button"
                    onClick={handleScrollToContact}
                    className="w-full sm:w-auto px-7 py-2.5 rounded-xl bg-[#E8F3FA] hover:bg-[#3B82C4] text-[#3B82C4] hover:text-white font-semibold text-[13px] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Consult Partner</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}