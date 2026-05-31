"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CabinContent } from "./FerrisWheel";

interface CabinModalProps {
  isOpen: boolean;
  onClose: () => void;
  cabin: CabinContent | null;
}

export default function CabinModal({ isOpen, onClose, cabin }: CabinModalProps) {
  if (!cabin) return null;

  const typeLabels: Record<CabinContent["type"], string> = {
    memory: "Memory Lane",
    photo: "Photo Memory",
    letter: "A Letter For You",
    joke: "Inside Joke",
    compliment: "A Compliment",
    note: "Little Note",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#9A8C82]/40 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50
                       w-full max-w-[600px] mx-4"
          >
            <div
              className="bg-[var(--modal-bg)] border border-[#E6C17A]/40 
                         rounded-2xl p-8 shadow-2xl shadow-[#E6C17A]/20"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-[#9A8C82]/60 hover:text-[#E6C17A]
                           transition-colors text-2xl cursor-pointer"
              >
                ×
              </button>

              {/* Emoji */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-[64px] mb-4 text-center"
              >
                {cabin.emoji}
              </motion.div>

              {/* Type label */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[#E6C17A] text-sm uppercase tracking-wider text-center mb-2"
              >
                {typeLabels[cabin.type]}
              </motion.p>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-[28px] font-light text-center mb-6 glow-text"
              >
                {cabin.title}
              </motion.h2>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="text-[18px] leading-[1.9] text-[var(--foreground)]/80 text-center
                           handwritten"
              >
                <p>{cabin.content}</p>
              </motion.div>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-[#E6C17A]/50 to-transparent"
              />

              {/* Footer */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-4 text-center text-[#9A8C82]/60 text-sm"
              >
                Cabin #{cabin.id} of 12
              </motion.p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
