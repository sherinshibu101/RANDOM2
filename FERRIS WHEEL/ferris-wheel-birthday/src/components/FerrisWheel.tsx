"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CabinModal from "./CabinModal";

export interface CabinContent {
  id: number;
  type: "memory" | "photo" | "letter" | "joke" | "compliment" | "note";
  title: string;
  content: string;
  emoji: string;
}

// Sample cabin content - replace with actual memories
const cabinContents: CabinContent[] = [
  {
    id: 1,
    type: "memory",
    title: "The Day You Were Born",
    content: "I still remember this moment vividly. Papa and I were together we go inside the room where amma was , then papa takes me to that incubator sort of thing, he lifts me up and i see you,mahn little sherin didnt know that u wld be this annoying brat that she wld have to bear with the rest of her life",
    emoji: "👶",
  },
  {
    id: 2,
    type: "memory",
    title: "Our Childhood Chaos",
    content: "First thing that comes to my mind kela and jasmine lol, how i wld argue saying im keyla. Our imagination was wild considering what we had to play with",
    emoji: "🧸",
  },
  {
    id: 3,
    type: "joke",
    title: "The Fights We Survived",
    content: "We still fight alot which i thought wld reduce now that we are adults but oh well ig thats always gonna be there, when we were young u used to cry alot, and safe to say i trained u well enough that u make me cry these days",
    emoji: "😂",
  },
  {
    id: 4,
    type: "memory",
    title: "Late Night Talks",
    content: "Ik we barely had those but when we do it wld go for hrs, sometimes it ends up on a positive note or else uk what happens",
    emoji: "🌙",
  },
  {
    id: 5,
    type: "compliment",
    title: "Your Biggest Glow-Up",
    content: "Mahn u had a glow down from when u were a kid but i wld say the december glow up is pretty good for someone like you",
    emoji: "✨",
  },
  {
    id: 6,
    type: "letter",
    title: "When You Needed Me",
    content: "Hey mahn , u cant deny it , I was there for u during tough times ,well lets forget about the bad ones and focus on the ones in which i helped you",
    emoji: "🤍",
  },
  {
    id: 7,
    type: "letter",
    title: "When I Needed You",
    content: "U were there for me at times when I needed someone , you always want the best for me(hopefully)",
    emoji: "🫶",
  },
  {
    id: 8,
    type: "joke",
    title: "Our Dumb Inside Jokes",
    content: "Laughing for the silliest shit which dont even make no sense ,lol , count us in alle?",
    emoji: "🤪",
  },
  {
    id: 9,
    type: "letter",
    title: "Things I Never Say Out Loud",
    content: "U have grown fs, u have become bold and ur not afraid to speak up which I admire about you",
    emoji: "💌",
  },
  {
    id: 10,
    type: "compliment",
    title: "What I Love About You",
    content: "Your honesty, i mean despite all the crappy shit u say u do get things done when i ask so plus point",
    emoji: "🌸",
  },
  {
    id: 11,
    type: "note",
    title: "My Wishes For You",
    content: "I want you to be happy, do whatever u want except ofc dont be doing stupid shit bruh , i wont support but if its anything else Ill be there",
    emoji: "🌱",
  },
  {
    id: 12,
    type: "note",
    title: "Forever Promise",
    content: "No matter how much we fight, no matter how annoying you get, no matter what happens - I'll always be your chechi. That's a forever thing. Deal with it.",
    emoji: "♾️",
  },
];

export default function FerrisWheel() {
  const wheelRef = useRef<SVGGElement>(null);
  const cabinsRef = useRef<(SVGGElement | null)[]>([]);
  const [selectedCabin, setSelectedCabin] = useState<CabinContent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const numCabins = cabinContents.length;
  const wheelRadius = 320;
  const cabinSize = 50;

  useEffect(() => {
    if (!wheelRef.current) return;

    // Rotate the entire wheel slowly
    const wheelRotation = gsap.to(wheelRef.current, {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center",
    });

    // Counter-rotate each cabin to keep them upright
    cabinsRef.current.forEach((cabin) => {
      if (cabin) {
        gsap.to(cabin, {
          rotation: -360,
          duration: 60,
          repeat: -1,
          ease: "none",
          transformOrigin: "center center",
        });
      }
    });

    return () => {
      wheelRotation.kill();
    };
  }, []);

  const handleCabinClick = (cabin: CabinContent) => {
    setSelectedCabin(cabin);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCabin(null), 300);
  };

  return (
    <>
      <div className="relative flex items-center justify-center">
        <svg
          width="900"
          height="900"
          viewBox="-450 -450 900 900"
          className="overflow-visible"
        >
          {/* Outer glow */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="goldenGlow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feFlood floodColor="#E6C17A" floodOpacity="0.5" result="glowColor" />
              <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow" />
              <feMerge>
                <feMergeNode in="softGlow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="wheelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E6C17A" />
              <stop offset="50%" stopColor="#D4A96A" />
              <stop offset="100%" stopColor="#E6C17A" />
            </linearGradient>
            <linearGradient id="cabinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4C2D7" />
              <stop offset="100%" stopColor="#F0B4CC" />
            </linearGradient>
          </defs>

          {/* Wheel structure */}
          <g ref={wheelRef}>
            {/* Main wheel rim */}
            <circle
              cx="0"
              cy="0"
              r={wheelRadius}
              fill="none"
              stroke="url(#wheelGradient)"
              strokeWidth="5"
              filter="url(#goldenGlow)"
            />

            {/* Inner decorative circles */}
            <circle
              cx="0"
              cy="0"
              r={wheelRadius - 40}
              fill="none"
              stroke="#E6C17A"
              strokeWidth="1"
              opacity="0.4"
            />
            <circle
              cx="0"
              cy="0"
              r={wheelRadius - 80}
              fill="none"
              stroke="#E6C17A"
              strokeWidth="1"
              opacity="0.3"
            />

            {/* Hub */}
            <circle
              cx="0"
              cy="0"
              r="30"
              fill="#FBF6F0"
              stroke="#E6C17A"
              strokeWidth="3"
            />
            <circle
              cx="0"
              cy="0"
              r="15"
              fill="#E6C17A"
              opacity="0.6"
            />

            {/* Spokes and Cabins */}
            {cabinContents.map((cabin, index) => {
              const angle = (index / numCabins) * 2 * Math.PI - Math.PI / 2;
              const x = Math.cos(angle) * wheelRadius;
              const y = Math.sin(angle) * wheelRadius;

              return (
                <g key={cabin.id}>
                  {/* Spoke */}
                  <line
                    x1="0"
                    y1="0"
                    x2={x}
                    y2={y}
                    stroke="#E6C17A"
                    strokeWidth="2"
                    opacity="0.6"
                  />

                  {/* Cabin container (counter-rotates) */}
                  <g
                    ref={(el) => { cabinsRef.current[index] = el; }}
                    transform={`translate(${x}, ${y})`}
                    className="cursor-pointer cabin-glow transition-all duration-300"
                    onClick={() => handleCabinClick(cabin)}
                  >
                    {/* Cabin body */}
                    <rect
                      x={-cabinSize / 2}
                      y={-cabinSize / 2}
                      width={cabinSize}
                      height={cabinSize}
                      rx="8"
                      fill="url(#cabinGradient)"
                      stroke="#E6C17A"
                      strokeWidth="2"
                    />
                    
                    {/* Cabin emoji */}
                    <text
                      x="0"
                      y="6"
                      textAnchor="middle"
                      fontSize="24"
                      className="select-none pointer-events-none"
                    >
                      {cabin.emoji}
                    </text>
                  </g>
                </g>
              );
            })}
          </g>

          {/* Support structure (static) */}
          <g>
            {/* Left support */}
            <line
              x1="-200"
              y1="400"
              x2="0"
              y2="0"
              stroke="#E6C17A"
              strokeWidth="6"
              opacity="0.7"
            />
            {/* Right support */}
            <line
              x1="200"
              y1="400"
              x2="0"
              y2="0"
              stroke="#E6C17A"
              strokeWidth="6"
              opacity="0.7"
            />
            {/* Base */}
            <rect
              x="-220"
              y="390"
              width="440"
              height="20"
              rx="5"
              fill="#E6C17A"
              opacity="0.5"
            />
          </g>
        </svg>
      </div>

      {/* Modal */}
      <CabinModal
        isOpen={isModalOpen}
        onClose={closeModal}
        cabin={selectedCabin}
      />
    </>
  );
}
