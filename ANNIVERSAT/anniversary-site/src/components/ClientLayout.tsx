"use client";

import MusicPlayer from "./MusicPlayer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <MusicPlayer />
    </>
  );
}
