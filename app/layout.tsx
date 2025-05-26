import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acélszabász.hu - Főoldal",
  description:
    "Professzionális vashegesztési szolgáltatások - Minőségi munka, megbízhatóság.",
};

import Header from "@/components/Header/Header";

import Script from "next/script";
import Image from "next/image";
import ChatButton from "@/components/ChatButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <head>
        <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-71MZPGSPWW"
                strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
                {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-71MZPGSPWW');
                `}
        </Script>
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] antialiased bg-gray-100 text-gray-900 flex flex-col min-h-screen`}
      >
        {/* Navigation Bar */}
        <Header></Header>
        <main className="font-[family-name:var(--font-geist-sans)] snap-y mt-24 snap-mandatory overflow-y-scroll  h-[calc(100vh-6rem)]">
          {/* Page Content */}
          <Image
            src="/bg-1.jpg" // Replace with your image path
            alt="Background"
            layout="fill" // Makes it responsive
            objectFit="cover" // Ensures it covers the section properly
            quality={80} // Adjust for performance
            className="z-0"
          />

          {/* Proper Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-80"></div>
          {children}
          <ChatButton />
        </main>
        <CookieConsent />
        {/* Footer */}
        <Analytics />
      </body>
    </html>
  );
}
