"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { statsData } from "@/lib/data";

function CounterNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    let duration = 2000;
    let frameTime = 1000 / 60;
    let totalFrames = Math.round(duration / frameTime);
    let easeOutQuad = (t: number) => t * (2 - t);

    let currentFrame = 0;
    const timer = setInterval(() => {
      currentFrame++;
      const progress = easeOutQuad(currentFrame / totalFrames);
      const currentCount = Math.round(start + (value - start) * progress);
      setCount(currentCount);

      if (currentFrame >= totalFrames) {
        setCount(value);
        clearInterval(timer);
      }
    }, frameTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-bold tracking-tight">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white border border-[#3B82C4]/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col justify-center items-center text-center ${
                idx > 0 && idx % 2 === 0 ? "pt-6 lg:pt-0" : ""
              } ${idx === 1 ? "pt-0 lg:pt-0" : ""} ${idx > 0 ? "lg:pl-6" : ""}`}
            >
              <div className="text-[32px] sm:text-[40px] xl:text-[48px] font-bold text-[#3B82C4] mb-1 sm:mb-2">
                <CounterNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#263746] tracking-wide">
                {stat.label}
              </h3>
              <p className="text-[12px] sm:text-[14px] text-[#647586] mt-1 hidden sm:block font-normal">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
