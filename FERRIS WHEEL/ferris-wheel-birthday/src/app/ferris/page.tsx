"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import StarField from "@/components/StarField";

const FerrisWheel = dynamic(() => import("@/components/FerrisWheel"), {
  ssr: false,
  loading: () => (
    <div className="w-[900px] h-[900px] flex items-center justify-center">
      <div className="text-[#E6C17A] text-xl">Loading wheel...</div>
    </div>
  ),
});

export default function FerrisPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Star Background */}
      <StarField />

      {/* Navigation back */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed top-6 left-6 z-40"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-[#9A8C82] hover:text-[#E6C17A] text-sm transition-colors cursor-pointer"
          >
            ← Back Home
          </motion.button>
        </Link>
      </motion.div>

      {/* Header */}
      <section className="relative z-10 pt-20 pb-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[clamp(36px,5vw,56px)] font-light mb-4 glow-text"
        >
          1% of not so much fighting times - Ferris Wheel
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[18px] text-[#9A8C82] max-w-[600px] mx-auto"
        >
          Click on any cabin to reveal a special memory
        </motion.p>
      </section>

      {/* Ferris Wheel Section */}
      <section className="relative z-10 flex items-center justify-center py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <FerrisWheel />
        </motion.div>
      </section>

      {/* Emotional Closure Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
          >
            {/* Decorative element */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="text-[80px] mb-8"
            >
              💝
            </motion.div>

            <h2 className="text-[clamp(28px,4vw,42px)] font-light mb-10 glow-text">
              A Final Note
            </h2>

            {/* Handwritten letter */}
            <div className="handwritten text-[20px] leading-[2.2] text-[var(--foreground)]/90 space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Dear little sister,
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Ik everytime we speak it takes us less than 1 minute to turn the whole thing into a fight, well its mostly cause of you but I cant deny that I miss you, everytime I think about u I miss you for reasons i dont even know. Even tho I say alot of shit to you its because one u trigger me and two i just want nothing but the best for you, but somewhere along the path I realised that I should let you make mistakes too (not like you will listen but yeah)
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                Every cabin on this ferris wheel is a moment Ive cherished alot, u have to be satisfied with this for now and maybe in the future when im earning i can get you sth
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="text-[#E6C17A]"
              >
                Heres to 19 years of laughter, anger and countless memories that have been created, is currently being created and yet to be created
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                With all my love,
                <br />
                <span className="text-[#F4C2D7]">Chechi, the best sister in the world</span>
              </motion.p>
            </div>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-12 h-[1px] bg-gradient-to-r from-transparent via-[#E6C17A]/50 to-transparent"
            />

            {/* Birthday message */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6 }}
              className="mt-12"
            >
              <p className="text-[clamp(24px,3vw,36px)] font-light glow-text">
                Happy 19th Birthday! 🎂✨
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
