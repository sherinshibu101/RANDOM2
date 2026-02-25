"use client";

import dynamic from "next/dynamic";

const AudioPlayer = dynamic(() => import("@/components/AudioPlayer"), {
  ssr: false,
});

export default function AudioPlayerWrapper() {
  return <AudioPlayer />;
}
