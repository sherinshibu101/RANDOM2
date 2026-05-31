"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TributePage() {
    return (
        <div className="min-h-screen bg-[var(--cinematic-black)] text-white py-12 px-6">

            {/* Header with Navigation */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12 max-w-2xl mx-auto"
            >
                <Link
                    href="/story"
                    className="back-link mb-6"
                >
                    ← Back to Story
                </Link>
                <h1 className="mb-4">A Tribute from Us</h1>
                <p className="text-[var(--cinematic-silver)]">
                    "Just for you to remember the journey from 2 to 4"
                </p>
            </motion.div>

            {/* Video Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                className="max-w-[800px] mx-auto mb-12"
            >
                <h2 className="text-center mb-6">Hop along</h2>
                <div className="aspect-auto bg-neutral-900 rounded-md overflow-hidden border border-white/20 shadow-2xl relative">
                    {/* Replace src with your video file in /public folder */}
                    <video
                        controls
                        controlsList="nodownload"
                        className="w-full h-full object-cover"
                        poster="/tribute-video-poster.jpg"
                        preload="metadata"
                    >
                        <source src="/tribute-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Fallback placeholder when no video */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-900/80 pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
                        <div className="w-20 h-20 rounded-md bg-white/10 flex items-center justify-center mb-4">
                            <div className="w-0 h-0 border-t-10 border-t-transparent border-l-[20px] border-l-white border-b-10 border-b-transparent ml-1" />
                        </div>
                        <p className="text-sm tracking-widest uppercase text-[var(--cinematic-silver)]">
                            Add your video to /public/tribute-video.mp4
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Final Letter */}
            <section className="max-w-2xl mx-auto text-center py-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="mb-4 text-[var(--cinematic-gold)]">Forever & Always</h2>
                    <p className="leading-relaxed italic text-balance mb-6">
                        "Thank you for sticking around even when times get hard"
                    </p>
                    <p className="text-lg">— Yours Truly</p>
                </motion.div>
            </section>

        </div>
    );
}
