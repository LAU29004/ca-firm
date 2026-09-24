// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { ArrowUpRight, Calendar, Clock, BookOpen } from "lucide-react";
// import { insightsData, InsightArticle } from "@/lib/data";

// const categories = ["All Insights", "Income Tax", "GST & Tax", "Business Advisory", "Financial Leadership"];

// export default function InsightsSection() {
//   const [activeCategory, setActiveCategory] = useState("All Insights");

//   const filteredArticles = activeCategory === "All Insights"
//     ? insightsData
//     : insightsData.filter((article) => article.category === activeCategory);

//   return (
//     <section id="insights" className="py-20 lg:py-32 bg-[#F8FAFC] relative overflow-hidden text-[#647586]">
//       <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3FA] border border-[#3B82C4]/30 text-[#3B82C4] text-[10px] sm:text-[12px] font-medium tracking-widest uppercase mb-4"
//           >
//             <BookOpen className="w-4 h-4 text-[#3B82C4]" />
//             <span>Knowledge Hub</span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-bold text-[#263746] tracking-tight"
//           >
//             Financial Insights That <span className="text-[#3B82C4]">Keep You Ahead</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="mt-4 text-[14px] sm:text-[16px] text-[#647586] font-normal"
//           >
//             Authoritative analysis on corporate tax regulations, GST compliance updates, and strategic financial planning.
//           </motion.p>
//         </div>

//         {/* Category Filter Pills */}
//         <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-4 py-2 rounded-full text-[12px] sm:text-[14px] font-medium transition-all duration-300 cursor-pointer ${
//                 activeCategory === cat
//                   ? "bg-[#3B82C4] text-white shadow-md"
//                   : "bg-white text-[#263746] border border-slate-200 hover:bg-[#E8F3FA]"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Articles Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//           {filteredArticles.map((article: InsightArticle, idx: number) => (
//             <motion.article
//               key={article.id}
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//               className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-[#3B82C4] transition-all duration-300 flex flex-col justify-between group"
//             >
//               <div>
//                 {/* Thumbnail Image */}
//                 <div className="relative aspect-[16/10] w-full overflow-hidden">
//                   <Image
//                     src={article.imageUrl}
//                     alt={article.title}
//                     fill
//                     sizes="(max-width: 768px) 100vw, 25vw"
//                     className="object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <span className="absolute top-3 left-3 bg-[#24527A]/90 text-[#E8F3FA] text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-md border border-[#3B82C4]/30">
//                     {article.category}
//                   </span>
//                 </div>

//                 {/* Article Content */}
//                 <div className="p-6">
//                   <div className="flex items-center gap-4 text-[12px] text-slate-500 mb-3 font-normal">
//                     <span className="flex items-center gap-1">
//                       <Calendar className="w-3.5 h-3.5 text-[#3B82C4]" />
//                       {article.date}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <Clock className="w-3.5 h-3.5 text-[#3B82C4]" />
//                       {article.readTime}
//                     </span>
//                   </div>

//                   <h3 className="text-[16px] font-semibold text-[#263746] group-hover:text-[#3B82C4] transition-colors line-clamp-2 mb-3 leading-snug">
//                     {article.title}
//                   </h3>

//                   <p className="text-[12px] sm:text-[14px] text-[#647586] line-clamp-3 leading-relaxed font-normal">
//                     {article.description}
//                   </p>
//                 </div>
//               </div>

//               {/* Read More Link */}
//               <div className="px-6 pb-6 pt-2">
//                 <div className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#263746] group-hover:text-[#3B82C4] transition-colors">
//                   <span>Read Full Article</span>
//                   <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
