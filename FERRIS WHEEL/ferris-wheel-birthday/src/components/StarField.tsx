"use client";

interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
}

// Pre-computed static star data to avoid hydration mismatch
const stars: Star[] = [
  { id: 0, left: 84, top: 6, size: 1.5, duration: 3.2, delay: 0.5 },
  { id: 1, left: 12, top: 23, size: 2.1, duration: 4.1, delay: 1.2 },
  { id: 2, left: 67, top: 45, size: 1.8, duration: 2.8, delay: 2.3 },
  { id: 3, left: 34, top: 78, size: 2.5, duration: 3.5, delay: 0.8 },
  { id: 4, left: 91, top: 34, size: 1.2, duration: 4.5, delay: 3.1 },
  { id: 5, left: 45, top: 12, size: 2.8, duration: 2.5, delay: 1.8 },
  { id: 6, left: 78, top: 89, size: 1.6, duration: 3.8, delay: 2.9 },
  { id: 7, left: 23, top: 56, size: 2.2, duration: 4.2, delay: 0.3 },
  { id: 8, left: 56, top: 67, size: 1.9, duration: 2.9, delay: 4.2 },
  { id: 9, left: 8, top: 91, size: 2.4, duration: 3.1, delay: 1.5 },
  { id: 10, left: 72, top: 15, size: 1.3, duration: 4.8, delay: 2.1 },
  { id: 11, left: 39, top: 42, size: 2.7, duration: 2.6, delay: 3.7 },
  { id: 12, left: 95, top: 73, size: 1.4, duration: 3.4, delay: 0.9 },
  { id: 13, left: 18, top: 85, size: 2.0, duration: 4.0, delay: 4.5 },
  { id: 14, left: 61, top: 28, size: 1.7, duration: 3.6, delay: 1.1 },
  { id: 15, left: 43, top: 94, size: 2.3, duration: 2.7, delay: 2.6 },
  { id: 16, left: 87, top: 51, size: 1.1, duration: 4.3, delay: 3.4 },
  { id: 17, left: 29, top: 19, size: 2.6, duration: 3.0, delay: 0.6 },
  { id: 18, left: 54, top: 63, size: 1.5, duration: 3.9, delay: 4.8 },
  { id: 19, left: 6, top: 37, size: 2.9, duration: 2.4, delay: 1.9 },
  { id: 20, left: 76, top: 82, size: 1.8, duration: 4.6, delay: 2.4 },
  { id: 21, left: 31, top: 8, size: 2.1, duration: 3.3, delay: 3.9 },
  { id: 22, left: 98, top: 59, size: 1.2, duration: 2.8, delay: 0.4 },
  { id: 23, left: 15, top: 71, size: 2.4, duration: 4.4, delay: 4.1 },
  { id: 24, left: 68, top: 3, size: 1.6, duration: 3.7, delay: 1.6 },
  { id: 25, left: 48, top: 48, size: 2.0, duration: 2.5, delay: 2.8 },
  { id: 26, left: 82, top: 26, size: 1.9, duration: 4.1, delay: 3.3 },
  { id: 27, left: 25, top: 97, size: 2.7, duration: 3.2, delay: 0.7 },
  { id: 28, left: 59, top: 39, size: 1.3, duration: 3.5, delay: 4.4 },
  { id: 29, left: 3, top: 54, size: 2.5, duration: 2.9, delay: 1.3 },
  { id: 30, left: 71, top: 76, size: 1.4, duration: 4.7, delay: 2.2 },
  { id: 31, left: 36, top: 14, size: 2.2, duration: 3.0, delay: 3.6 },
  { id: 32, left: 93, top: 88, size: 1.7, duration: 2.6, delay: 0.2 },
  { id: 33, left: 11, top: 31, size: 2.8, duration: 4.2, delay: 4.9 },
  { id: 34, left: 64, top: 61, size: 1.1, duration: 3.8, delay: 1.4 },
  { id: 35, left: 41, top: 5, size: 2.3, duration: 2.7, delay: 2.7 },
  { id: 36, left: 89, top: 43, size: 1.8, duration: 4.4, delay: 3.2 },
  { id: 37, left: 27, top: 69, size: 2.6, duration: 3.1, delay: 0.1 },
  { id: 38, left: 52, top: 92, size: 1.5, duration: 3.6, delay: 4.6 },
  { id: 39, left: 9, top: 17, size: 2.9, duration: 2.4, delay: 1.7 },
  { id: 40, left: 79, top: 57, size: 1.2, duration: 4.8, delay: 2.5 },
  { id: 41, left: 33, top: 84, size: 2.1, duration: 3.3, delay: 3.8 },
  { id: 42, left: 96, top: 22, size: 1.6, duration: 2.8, delay: 0.8 },
  { id: 43, left: 19, top: 47, size: 2.4, duration: 4.0, delay: 4.3 },
  { id: 44, left: 62, top: 74, size: 1.9, duration: 3.4, delay: 1.0 },
  { id: 45, left: 47, top: 11, size: 2.0, duration: 2.5, delay: 2.9 },
  { id: 46, left: 85, top: 65, size: 1.3, duration: 4.5, delay: 3.5 },
  { id: 47, left: 21, top: 33, size: 2.7, duration: 3.2, delay: 0.4 },
  { id: 48, left: 57, top: 96, size: 1.4, duration: 3.9, delay: 4.7 },
  { id: 49, left: 4, top: 52, size: 2.5, duration: 2.6, delay: 1.2 },
  { id: 50, left: 73, top: 7, size: 1.7, duration: 4.3, delay: 2.0 },
  { id: 51, left: 38, top: 79, size: 2.2, duration: 3.0, delay: 3.4 },
  { id: 52, left: 99, top: 41, size: 1.8, duration: 2.9, delay: 0.6 },
  { id: 53, left: 14, top: 18, size: 2.8, duration: 4.1, delay: 4.0 },
  { id: 54, left: 66, top: 86, size: 1.1, duration: 3.5, delay: 1.8 },
  { id: 55, left: 44, top: 29, size: 2.3, duration: 2.7, delay: 2.3 },
  { id: 56, left: 88, top: 68, size: 1.5, duration: 4.6, delay: 3.1 },
  { id: 57, left: 26, top: 55, size: 2.6, duration: 3.3, delay: 0.3 },
  { id: 58, left: 51, top: 13, size: 1.2, duration: 3.8, delay: 4.5 },
  { id: 59, left: 7, top: 81, size: 2.9, duration: 2.4, delay: 1.5 },
  { id: 60, left: 77, top: 36, size: 1.6, duration: 4.4, delay: 2.6 },
  { id: 61, left: 32, top: 99, size: 2.1, duration: 3.1, delay: 3.7 },
  { id: 62, left: 94, top: 24, size: 1.9, duration: 2.8, delay: 0.9 },
  { id: 63, left: 17, top: 62, size: 2.4, duration: 4.2, delay: 4.2 },
  { id: 64, left: 63, top: 46, size: 1.3, duration: 3.6, delay: 1.1 },
  { id: 65, left: 49, top: 87, size: 2.0, duration: 2.5, delay: 2.4 },
  { id: 66, left: 83, top: 9, size: 1.4, duration: 4.7, delay: 3.0 },
  { id: 67, left: 22, top: 72, size: 2.7, duration: 3.2, delay: 0.5 },
  { id: 68, left: 58, top: 38, size: 1.7, duration: 3.4, delay: 4.8 },
  { id: 69, left: 2, top: 21, size: 2.5, duration: 2.9, delay: 1.6 },
  { id: 70, left: 74, top: 93, size: 1.8, duration: 4.0, delay: 2.1 },
  { id: 71, left: 37, top: 58, size: 2.2, duration: 3.0, delay: 3.3 },
  { id: 72, left: 97, top: 4, size: 1.1, duration: 2.6, delay: 0.7 },
  { id: 73, left: 13, top: 44, size: 2.8, duration: 4.3, delay: 4.1 },
  { id: 74, left: 69, top: 77, size: 1.5, duration: 3.7, delay: 1.3 },
  { id: 75, left: 42, top: 16, size: 2.3, duration: 2.7, delay: 2.8 },
  { id: 76, left: 86, top: 83, size: 1.2, duration: 4.5, delay: 3.6 },
  { id: 77, left: 28, top: 27, size: 2.6, duration: 3.1, delay: 0.2 },
  { id: 78, left: 53, top: 64, size: 1.6, duration: 3.9, delay: 4.4 },
  { id: 79, left: 5, top: 95, size: 2.9, duration: 2.4, delay: 1.9 },
  { id: 80, left: 81, top: 49, size: 1.9, duration: 4.1, delay: 2.7 },
  { id: 81, left: 35, top: 1, size: 2.1, duration: 3.3, delay: 3.9 },
  { id: 82, left: 92, top: 66, size: 1.3, duration: 2.8, delay: 0.4 },
  { id: 83, left: 16, top: 35, size: 2.4, duration: 4.4, delay: 4.6 },
  { id: 84, left: 65, top: 53, size: 1.4, duration: 3.5, delay: 1.0 },
  { id: 85, left: 46, top: 98, size: 2.0, duration: 2.5, delay: 2.2 },
  { id: 86, left: 84, top: 2, size: 1.7, duration: 4.6, delay: 3.2 },
  { id: 87, left: 24, top: 75, size: 2.7, duration: 3.2, delay: 0.6 },
  { id: 88, left: 55, top: 32, size: 1.8, duration: 3.6, delay: 4.9 },
  { id: 89, left: 1, top: 60, size: 2.5, duration: 2.6, delay: 1.4 },
  { id: 90, left: 75, top: 90, size: 1.1, duration: 4.2, delay: 2.5 },
  { id: 91, left: 39, top: 20, size: 2.2, duration: 3.0, delay: 3.5 },
  { id: 92, left: 91, top: 50, size: 1.5, duration: 2.9, delay: 0.8 },
  { id: 93, left: 10, top: 80, size: 2.8, duration: 4.0, delay: 4.3 },
  { id: 94, left: 70, top: 40, size: 1.2, duration: 3.4, delay: 1.7 },
  { id: 95, left: 50, top: 70, size: 2.3, duration: 2.7, delay: 2.9 },
  { id: 96, left: 80, top: 10, size: 1.6, duration: 4.7, delay: 3.4 },
  { id: 97, left: 20, top: 30, size: 2.6, duration: 3.1, delay: 0.1 },
  { id: 98, left: 60, top: 85, size: 1.9, duration: 3.8, delay: 4.7 },
  { id: 99, left: 30, top: 25, size: 2.4, duration: 2.5, delay: 1.2 },
];

export default function StarField() {

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient background - Baby pink gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFE4EC] via-[#FFF0F5] to-[#FFDDE5]" />
      
      {/* Sparkles instead of stars for romantic feel */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-[#E6C17A] star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      
      {/* Soft glowing orbs for romantic atmosphere */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F4C2D7]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#E6C17A]/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#F4C2D7]/15 rounded-full blur-3xl" />
    </div>
  );
}
