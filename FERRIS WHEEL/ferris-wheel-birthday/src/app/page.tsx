"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import StarField from "@/components/StarField";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Star Background */}
      <StarField />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[clamp(48px,6vw,72px)] font-light tracking-tight mb-6 glow-text"
          >
            Happy 19th Birthday baby
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-[20px] text-[#E6C17A] mb-4 tracking-wide"
          >
            ✨ A little gift from my part ✨
          </motion.p>

          {/* Emotional Intro Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="max-w-[700px] mx-auto mb-12"
          >
            <p className="text-[18px] leading-[1.9] text-[var(--foreground)]/80">
              Dont you just love rides?
              <br />
              Bear with me, have some imagination, i had to make this unique and also stfu
              <br />
              <span className="text-[#E6C17A]">
                The tickets are free cause ik u wont pay me
              </span>
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#9A8C82] text-sm"
            >
              ↓ scroll for more ↓
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Setup Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-[clamp(32px,4vw,48px)] font-light mb-8 glow-text">
              A Ferris Wheel
            </h2>
            
            <p className="text-[18px] leading-[1.9] text-[var(--foreground)]/80 mb-8">
              Apart from the 99% of fighting, I wld like to invite you to enjoy that 1% of the not so much fighting days that we have had
            </p>

            <p className="text-[18px] leading-[1.9] text-[var(--foreground)]/80 mb-12">
              This took me time okay? Not as easy as it seems, appreciate it?!
            </p>

            <p className="handwritten text-[24px] text-[#E6C17A]">
              &quot;Buckle up and put on ur seat belts (this is a fast ferris wheel okay?)&quot;
            </p>
          </motion.div>

          {/* Second CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16"
          >
            <Link href="/ferris">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-3 border-2 border-[#F4C2D7] text-[#2B2B2B] font-medium text-[16px] rounded-full hover:bg-[#F4C2D7]/20 hover:border-[#E6C17A] transition-all duration-300 cursor-pointer"
              >
                Start Your Journey →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
