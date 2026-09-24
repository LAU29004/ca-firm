"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Building,
  User,
  MessageSquare
} from "lucide-react";
import { firmDetails } from "@/lib/data";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    service: "Taxation",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#F8FAFC] relative overflow-hidden text-[#647586]">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

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
            <span>Consultation Request</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-bold text-[#263746] tracking-tight"
          >
            Let's Talk About <span className="text-[#3B82C4]">Your Business</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[14px] sm:text-[16px] text-[#647586] font-normal"
          >
            Whether you need help with taxation, accounting, statutory compliance, or business advisory, we're here to help.
          </motion.p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#24527A] text-white rounded-3xl p-8 sm:p-10 border border-[#3B82C4]/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#3B82C4]/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-[22px] sm:text-[24px] font-bold text-white mb-6">
                Apex & Partners CA
              </h3>
              <p className="text-[12px] text-slate-300 mb-8 leading-relaxed font-normal">
                {firmDetails.registrationNo} • Dedicated statutory oversight and corporate advisory desks.
              </p>

              <div className="space-y-6 text-[14px]">
                
                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#24527A] border border-[#3B82C4]/30 text-[#3B82C4] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3B82C4] text-[10px] sm:text-[12px] uppercase tracking-wider mb-1">
                      Main Corporate Office
                    </h4>
                    <p className="text-slate-200 leading-snug font-normal">{firmDetails.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#24527A] border border-[#3B82C4]/30 text-[#3B82C4] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3B82C4] text-[10px] sm:text-[12px] uppercase tracking-wider mb-1">
                      Direct Advisory Lines
                    </h4>
                    <p className="text-slate-200 font-medium">{firmDetails.phone}</p>
                    <p className="text-slate-300 text-[12px]">{firmDetails.secondaryPhone}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#24527A] border border-[#3B82C4]/30 text-[#3B82C4] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3B82C4] text-[10px] sm:text-[12px] uppercase tracking-wider mb-1">
                      Email Inquiries
                    </h4>
                    <p className="text-slate-200 font-normal">{firmDetails.email}</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#24527A] border border-[#3B82C4]/30 text-[#3B82C4] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3B82C4] text-[10px] sm:text-[12px] uppercase tracking-wider mb-1">
                      Office Hours
                    </h4>
                    <p className="text-slate-200 font-normal">{firmDetails.officeHours}</p>
                  </div>
                </div>

              </div>

              {/* Social Media Links */}
              <div className="mt-10 pt-6 border-t border-slate-700 flex items-center justify-between">
                <span className="text-[10px] sm:text-[12px] text-slate-300 font-medium uppercase tracking-wider">
                  Connect With Us
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={firmDetails.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-[#24527A] text-slate-200 hover:text-[#3B82C4] transition-colors border border-slate-600/50"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.46 1.46 0 1 0 0 2.92 1.46 1.46 0 0 0 0-2.92Z"/></svg>
                  </a>
                  <a
                    href={firmDetails.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-[#24527A] text-slate-200 hover:text-[#3B82C4] transition-colors border border-slate-600/50"
                    aria-label="Twitter / X"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a
                    href={firmDetails.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-[#24527A] text-slate-200 hover:text-[#3B82C4] transition-colors border border-slate-600/50"
                    aria-label="Facebook"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>
                  </a>
                  <a
                    href={firmDetails.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-[#24527A] text-slate-200 hover:text-[#3B82C4] transition-colors border border-slate-600/50"
                    aria-label="Instagram"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xl relative">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 px-4 text-center flex flex-col items-center justify-center min-h-[420px]"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#E8F3FA] text-[#3B82C4] flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
                    </div>
                    <h3 className="text-[24px] sm:text-[28px] font-bold text-[#263746] mb-3">
                      Thank You.
                    </h3>
                    <p className="text-[14px] sm:text-[16px] text-[#647586] max-w-md mb-6 leading-relaxed font-normal">
                      We have received your consultation request. A senior Chartered Accountant from our team will contact you within 4 business hours.
                    </p>
                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[12px] text-[#647586] max-w-sm mb-8">
                      <p className="font-semibold text-[#263746]">Submitted Details:</p>
                      <p className="mt-1">{formData.fullName} ({formData.companyName || "Individual"})</p>
                      <p>{formData.email} • {formData.phone}</p>
                      <p className="text-[#3B82C4] font-semibold mt-1">Service: {formData.service}</p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-[#24527A] text-white font-semibold text-[14px] hover:bg-[#3B82C4] transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-[22px] sm:text-[24px] font-bold text-[#263746] mb-1">
                        Request a Consultation
                      </h3>
                      <p className="text-[12px] text-[#647586]">
                        Fill out the details below to schedule a confidential discussion with our CA practice team.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div>
                        <label className="block text-[10px] sm:text-[12px] font-medium text-[#263746] uppercase tracking-wider mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="e.g. Rajesh Kulkarni"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8FAFC] border text-[14px] text-[#263746] font-normal focus:outline-none focus:ring-2 transition-all ${
                              errors.fullName
                                ? "border-red-500 focus:ring-red-200"
                                : "border-slate-200 focus:border-[#3B82C4] focus:ring-[#3B82C4]/20"
                            }`}
                          />
                        </div>
                        {errors.fullName && (
                          <p className="text-xs text-red-500 mt-1 font-medium">{errors.fullName}</p>
                        )}
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block text-[10px] sm:text-[12px] font-medium text-[#263746] uppercase tracking-wider mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. rajesh@company.com"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8FAFC] border text-[14px] text-[#263746] font-normal focus:outline-none focus:ring-2 transition-all ${
                              errors.email
                                ? "border-red-500 focus:ring-red-200"
                                : "border-slate-200 focus:border-[#3B82C4] focus:ring-[#3B82C4]/20"
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone Number */}
                      <div>
                        <label className="block text-[10px] sm:text-[12px] font-medium text-[#263746] uppercase tracking-wider mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8FAFC] border text-[14px] text-[#263746] font-normal focus:outline-none focus:ring-2 transition-all ${
                              errors.phone
                                ? "border-red-500 focus:ring-red-200"
                                : "border-slate-200 focus:border-[#3B82C4] focus:ring-[#3B82C4]/20"
                            }`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone}</p>
                        )}
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="block text-[10px] sm:text-[12px] font-medium text-[#263746] uppercase tracking-wider mb-2">
                          Company Name (Optional)
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="e.g. NovaTech Solutions"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[14px] text-[#263746] font-normal focus:outline-none focus:border-[#3B82C4] focus:ring-2 focus:ring-[#3B82C4]/20 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Required Dropdown */}
                    <div>
                      <label className="block text-[10px] sm:text-[12px] font-medium text-[#263746] uppercase tracking-wider mb-2">
                        Select Required Service
                      </label>
                      <select
                        id="service-select"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[14px] text-[#263746] font-semibold focus:outline-none focus:border-[#3B82C4] focus:ring-2 focus:ring-[#3B82C4]/20 transition-all cursor-pointer"
                      >
                        <option value="Taxation">Income Tax & Tax Planning</option>
                        <option value="GST">GST & Indirect Taxation</option>
                        <option value="Audit">Audit & Assurance</option>
                        <option value="Accounting">Accounting & Bookkeeping</option>
                        <option value="Compliance">Corporate Compliance & MCA</option>
                        <option value="Business Advisory">Business Advisory & Valuation</option>
                        <option value="Virtual CFO">Virtual CFO Services</option>
                        <option value="Payroll">Payroll & TDS Compliance</option>
                        <option value="Registration">Business Entity Registration</option>
                        <option value="Other">Other Custom Inquiries</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] sm:text-[12px] font-medium text-[#263746] uppercase tracking-wider mb-2">
                        Brief Requirement / Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe your current accounting, tax, or business challenge..."
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[14px] text-[#263746] font-normal focus:outline-none focus:border-[#3B82C4] focus:ring-2 focus:ring-[#3B82C4]/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-[#3B82C4] hover:bg-[#5BA7D1] text-white font-semibold text-[14px] sm:text-[16px] tracking-wide shadow-xl shadow-[#3B82C4]/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <Send className="w-5 h-5 text-white" />
                          <span>Request a Consultation</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-[#647586] text-center font-normal">
                      🔒 Your information is confidential under ICAI non-disclosure guidelines.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
