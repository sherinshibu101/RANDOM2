import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "S FAMILY",
  description: "A cinematic digital love story anniversary experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Imperial+Script&family=Oooh+Baby&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <ClientLayout>
          <div className="pb-8">
            {children}
          </div>
          <footer className="w-full py-8 text-center mt-12">
            <p className="text-[#a0a0a0] text-base tracking-widest">
              Made with love from Sherin and Sheril <span className="text-red-500">❤</span>
            </p>
          </footer>
        </ClientLayout>
      </body>
    </html>
  );
}
