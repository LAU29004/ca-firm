"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall, ShieldCheck, ChevronRight } from "lucide-react";
import { firmDetails, navLinks } from "@/lib/data";
import Image from "next/image";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      const navOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#24527A]/95 backdrop-blur-md border-b border-[#3B82C4]/30 shadow-xl py-3.5"
            : "bg-gradient-to-b from-[#24527A]/90 via-[#24527A]/60 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <Image
                src="/images/ca-icon.png"
                alt="CA"
                width={24}
                height={24}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-[#E8F3FA] transition-colors">
                  Narhari V.Dixit{" "}
                  <span className="text-[#3B82C4] font-semibold">&</span> Co.
                </span>
                <span className="text-[10px] sm:text-[12px] font-medium tracking-widest uppercase text-slate-300">
                  Chartered Accountants
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-2 text-[14px] xl:text-[16px] font-medium transition-colors duration-200 rounded-full ${
                      isActive
                        ? "text-[#E8F3FA] font-semibold"
                        : "text-white/90 hover:text-[#E8F3FA] hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#3B82C4] rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Primary CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-[#3B82C4] hover:bg-[#5BA7D1] text-white text-[14px] sm:text-[16px] font-semibold tracking-wide shadow-lg shadow-[#3B82C4]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-white" />
                <span>Book Consultation</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-white hover:text-[#E8F3FA] bg-white/10 hover:bg-white/15 focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#24527A]/98 backdrop-blur-xl flex flex-col pt-24 pb-8 px-6 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-3 my-auto">
              <span className="text-[10px] sm:text-[12px] font-medium uppercase tracking-widest text-[#3B82C4] mb-2 px-3">
                Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                  className={`text-[18px] font-semibold px-4 py-3 rounded-xl flex items-center justify-between transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "bg-[#3B82C4]/20 text-[#E8F3FA] border border-[#3B82C4]/40"
                      : "text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-5 h-5 text-[#3B82C4]" />
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 pt-6 border-t border-slate-700 flex flex-col gap-4"
              >
                <div className="flex flex-col gap-1 text-[14px] text-slate-300 px-2">
                  <p className="font-bold text-white">{firmDetails.name}</p>
                  <p>{firmDetails.phone}</p>
                  <p>{firmDetails.email}</p>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full text-center py-3.5 px-6 rounded-xl bg-[#3B82C4] hover:bg-[#5BA7D1] text-white font-semibold text-[16px] shadow-lg flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Book a Free Consultation</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
