"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Mail, Award, CheckCircle2 } from "lucide-react";
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
    <section id="team" className="py-20 lg:py-32 bg-[#E8F3FA] text-[#647586] relative overflow-hidden">
      {/* Background subtleties */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#3B82C4]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#5BA7D1]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
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

        {/* 4 Team Member Grid */}
       <div className="flex justify-center">
  <div className="w-full max-w-md">
          {teamData.map((member: TeamMember, idx: number) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white border border-slate-200/90 hover:border-[#3B82C4] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Container */}
                <div className="relative aspect-[4/4.2] w-full overflow-hidden bg-[#24527A]">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#263746]/80 via-transparent to-transparent opacity-80" />

                  {/* Qualification Badge */}
                  <span className="absolute top-3 left-3 bg-[#E8F3FA]/95 backdrop-blur-md border border-[#3B82C4]/30 text-[#3B82C4] font-semibold text-[11px] px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>{member.qualification}</span>
                  </span>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-[18px] font-bold text-[#263746] group-hover:text-[#3B82C4] transition-colors leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-[13px] font-semibold text-[#3B82C4] mt-0.5">
                      {member.role}
                    </p>
                    <p className="text-[11px] text-[#647586] font-medium tracking-wide uppercase mt-1">
                      {member.experience}
                    </p>
                  </div>

                  <p className="text-[13px] text-[#647586] font-normal leading-relaxed mb-5 line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {member.expertise.map((exp, eIdx) => (
                      <span
                        key={eIdx}
                        className="text-[10px] font-medium bg-[#F8FAFC] border border-slate-200 text-[#263746] px-2 py-0.5 rounded-md"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={handleScrollToContact}
                  className="w-full py-2.5 rounded-xl bg-[#E8F3FA] hover:bg-[#3B82C4] text-[#3B82C4] hover:text-white font-semibold text-[13px] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Consult Partner</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        </div>

        {/* Practice Guarantee Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#E8F3FA] text-[#3B82C4] shrink-0 hidden sm:block">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[16px] sm:text-[18px] font-bold text-[#263746]">
                Need Dedicated Advisory for Your Enterprise?
              </h4>
              <p className="text-[13px] sm:text-[14px] text-[#647586] font-normal mt-0.5">
                Speak directly with a partner specializing in your industry sector.
              </p>
            </div>
          </div>
          <button
            onClick={handleScrollToContact}
            className="px-6 py-3 rounded-xl bg-[#3B82C4] hover:bg-[#5BA7D1] text-white font-semibold text-[14px] shadow-lg shadow-[#3B82C4]/20 hover:-translate-y-0.5 transition-all duration-300 shrink-0 cursor-pointer"
          >
            Request Partner Meeting
          </button>
        </motion.div>

      </div>
    </section>
  );
}

