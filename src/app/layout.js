import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import SiteFooter from "@/Components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Holy-Place | Islamic Madrasah Website Template",
  description:
    "Holy-Place is a modern and responsive website template designed for Islamic madrasahs, Quran academies, and Deeni institutions. Built with clean UI and customizable components.",
  keywords: [
    "Islamic website template",
    "Madrasah template",
    "Quran school website",
    "Holy Place",
    "Deeni school design",
    "Islamic education site",
  ],
  authors: [
    { name: "Shahriar Fardows", url: "https://shahriarfardows.netlify.app/" },
  ],
  creator: "Shahriar Fardows",

  openGraph: {
    title: "Holy-Place | Islamic Madrasah Website Template",
    description:
      "Holy-Place is a modern and responsive website template designed for Islamic madrasahs, Quran academies, and Deeni institutions. Built with clean UI and customizable components.",
    url: "https://holi-place.teachfosys.com/", // replace with your actual URL
    siteName: "Holy-Place",
    images: [
      {
        url: "https://holi-place.teachfosys.com/logo.png", // replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Holy-Place Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Holy-Place | Islamic Madrasah Website Template",
    description:
      "Holy-Place is a modern and responsive website template designed for Islamic madrasahs, Quran academies, and Deeni institutions. Built with clean UI and customizable components.",
    images: [
      "https://holi-place.teachfosys.com/logo.png", // replace with your actual image URL
    ],
    creator: "@yourtwitterhandle", // optional Twitter handle
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
