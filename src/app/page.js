import AboutSection from "@/Components/Home/AboutSection";
import Hero from "@/Components/Home/Hero";
import PrayerTimes from "@/Components/Home/PrayerTimes";
import Services from "@/Components/Home/Services";
import Teachers from "@/Components/Home/Teachers";
import Testimonials from "@/Components/Home/Testimonials";

// ✅ Page-specific metadata
export const metadata = {
  title: "Welcome to Holi-Place | Islamic Madrasa",
  description:
    "Learn Quran, Hadith, and Islamic studies with Holi-Place – your gateway to spiritual and academic excellence.",
  openGraph: {
    title: "Welcome to Holi-Place | Islamic Madrasa",
    description:
      "Join Holi-Place for authentic Islamic education and Quran learning programs. Accessible online and offline.",
    url: "https://yourdomain.com",
    siteName: "Holi-Place",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Holi-Place Madrasa Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <PrayerTimes />
      <AboutSection />
      <Services />
      <Testimonials />
      <Teachers />
    </div>
  );
}
