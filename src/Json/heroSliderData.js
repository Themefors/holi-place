import images from "../../public/images";

const heroSliderData = [
  {
    image: {
      src: images.image.hero_1,
      alt: "Mosque silhouette under moonlight with stars",
    },
    arabicText: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    arabicSubText: "In the name of Allah, the Most Gracious, the Most Merciful",
    title: "A Journey Towards Divine Knowledge",
    description:
      "Begin your spiritual and educational journey with us, where traditional Islamic values meet modern learning. Our mission is to nurture enlightened individuals through authentic Islamic education.",
    buttons: [
      {
        text: "Explore Courses",
        link: "/courses",
        style: "yellow",
      },
      {
        text: "Listen to Quran",
        link: "/quran",
        style: "white",
        icon: "Play",
      },
    ],
  },
  {
    image: {
      src: images.image.hero_2,
      alt: "Islamic calligraphy and open Quran",
    },
    arabicText: "وَقُلْ رَبِّ زِدْنِي عِلْمًا",
    arabicSubText: "My Lord, increase me in knowledge — [Taha:114]",
    title: "Empowering Minds Through Faith & Wisdom",
    description:
      "Our experienced scholars and teachers provide students with a deep understanding of Islamic teachings, Quran, and Hadith while ensuring a strong moral foundation.",
    buttons: [
      {
        text: "Meet Our Scholars",
        link: "/about",
        style: "yellow",
      },
      {
        text: "Daily Quran Recitation",
        link: "/quran",
        style: "white",
        icon: "Play",
      },
    ],
  },
  {
    image: {
      src: images.image.hero_3,
      alt: "Student learning in madrasa under natural light",
    },
    arabicText: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ",
    arabicSubText: "Allah is the Light of the heavens and the earth — [An-Nur:35]",
    title: "Learning With Light and Purpose",
    description:
      "Study the Quran, Hadith, Fiqh, and more through our accessible and structured programs designed for all ages. Learn anytime, anywhere with our online platform.",
    buttons: [
      {
        text: "Join Us Today",
        link: "/admission",
        style: "yellow",
      },
    ],
  },
];

export default heroSliderData;
