import type { Metadata } from "next";
import { Alexandria, Barlow, Lora, Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import FloatingCircle from "@/components/FloatingCircle";

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const barlow = Barlow({
  weight: "400",
  variable: "--font-Barlow",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Magnea Mist Portfolio",
  description: "Personal portfolio of Magnea Mist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alexandria.variable} ${raleway.variable} ${lora.variable} ${barlow.variable} relative antialiased bg-background text-foreground`}
      >
        <NavBar />
        <main className="px-4 sm:px-10 max-w-[2000px] mx-auto">{children}</main>
        <div className="noise" />
        <FloatingCircle />
      </body>
    </html>
  );
}
