import images from "../../public/images";

const heroSliderData = [
  {
    image: {
      src: images.image.hero_1,
      alt: "Desert landscape with mosque and crescent moon",
    },
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    arabicSubText: "IN THE NAME OF ALLAH",
    title: "The Architect of Existence In the Name of the Almighty",
    description:
      "The story of Islam begins with the birth of Muhammad ibn Abdullah in Mecca, a city in the Arabian Peninsula. A global civilization, profound cultural and scientific contributions.",
    buttons: [
      {
        text: "Our Services",
        link: "/services",
        style: "yellow", // Custom style indicator
      },
      {
        text: "Listen Holy Quran",
        link: "/quran",
        style: "white", // Custom style indicator
        icon: "Play", // Icon indicator
      },
    ],
  },
  {
    image: {
      src:images.image.hero_2,
      alt: "Hero Slide 2",
    },
    arabicText: "الحمد لله رب العالمين",
    arabicSubText: "Praise be to Allah, Lord of the Worlds",
    title: "Learn from the Best",
    description: "Our expert instructors are here to guide you every step of the way.",
    buttons: [
      {
        text: "Meet Our Team",
        link: "/about",
        style: "yellow",
      },
      {
        text: "Listen Holy Quran",
        link: "/quran",
        style: "white", // Custom style indicator
        icon: "Play", // Icon indicator
      },
    ],
  },
  {
    image: {
      src: images.image.hero_3,
      alt: "Hero Slide 3",
    },
    arabicText: "الله أكبر",
    arabicSubText: "Allah is the Greatest",
    title: "Flexible Learning Options",
    description: "Study at your own pace, anytime, anywhere with our online platform.",
    buttons: [
      {
        text: "Get Started",
        link: "/register",
        style: "yellow",
      },
    ],
  },
]

export default heroSliderData
