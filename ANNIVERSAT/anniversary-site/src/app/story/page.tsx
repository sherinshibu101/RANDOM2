"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StoryPage() {
  return (
    <div className="min-h-screen text-white py-12 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        className="text-center mb-12"
      >
        <Link
          href="/"
          className="back-link mb-6"
        >
          ← Back Home
        </Link>
        <h1 className="mb-4" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>Our Love Story</h1>
        <p className="text-[var(--cinematic-silver)] max-w-2xl mx-auto">
          Moments that shaped us. Milestones that defined us. A journey of two hearts becoming one.
        </p>
      </motion.div>

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
        className="max-w-[800px] mx-auto mb-8"
      >
        <div className="aspect-auto bg-neutral-900 rounded-md overflow-hidden border border-white/20 shadow-2xl relative">
          {/* Replace src with your video file in /public folder */}
          <video
            controls
            controlsList="nodownload"
            className="w-full h-full object-cover"
            poster="/story-video-poster.jpeg"
            preload="metadata"
          >
            <source src="/story-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Fallback placeholder when no video */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-900/80 pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
            <div className="w-20 h-20 rounded-md bg-white/10 flex items-center justify-center mb-4">
              <div className="w-0 h-0 border-t-10 border-t-transparent border-l-[20px] border-l-white border-b-10 border-b-transparent ml-1" />
            </div>
            <p className="text-sm tracking-widest uppercase text-[var(--cinematic-silver)]">
              Add your video to /public/story-video.mp4
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
        className="text-center mt-12 pt-8"
      >
        <p className="text-[var(--cinematic-silver)] mb-6">
          Continue our journey...
        </p>
        <Link
          href="/tribute"
          className="gold-button"
        >
          View Tribute
        </Link>
      </motion.div>
    </div>
  );
}
