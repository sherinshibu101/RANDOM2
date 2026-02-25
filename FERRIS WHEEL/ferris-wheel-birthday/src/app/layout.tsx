import type { Metadata } from "next";
import { Imperial_Script, Oooh_Baby, Englebert } from "next/font/google";
import "./globals.css";
import AudioPlayerWrapper from "@/components/AudioPlayerWrapper";

const imperialScript = Imperial_Script({
  variable: "--font-imperial-script",
  subsets: ["latin"],
  weight: "400",
});

const ooohBaby = Oooh_Baby({
  variable: "--font-oooh-baby",
  subsets: ["latin"],
  weight: "400",
});

const englebert = Englebert({
  variable: "--font-englebert",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Happy 19th Birthday 🎡",
  description: "A special birthday surprise just for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${imperialScript.variable} ${ooohBaby.variable} ${englebert.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <AudioPlayerWrapper />
      </body>
    </html>
  );
}
