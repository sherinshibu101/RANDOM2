"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden">

      {/* Background Video Player */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
        // The user will replace this with their actual video file in /public
        src="/hero-video.mp4" 
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 h-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="text-balance"
        >
          <h1 className="font-serif text-white" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
            Memories of Us
          </h1>
          <p className="mt-3 font-light tracking-wider text-[var(--cinematic-silver)] uppercase">
            A story whispered, without end.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="mt-10"
        >
          <Link
            href="/story"
            className="gold-button"
          >
            Begin the Story
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
