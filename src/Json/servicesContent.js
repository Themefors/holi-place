import images from "../../public/images";

const servicesContent = {
  pageTitle: "আমাদের সেবা - Holi-Place",
  heroSection: {
    title: "আমাদের সেবাসমূহ",
    subtitle: "Holi-Place মাদ্রাসায় আমরা যেসব সেবা প্রদান করি",
    description:
      "আমাদের মাদ্রাসায় শিক্ষার্থীদের উন্নয়নের জন্য বিভিন্ন ধরনের শিক্ষা ও সুবিধা প্রদান করা হয়। এখানে আপনাদের জন্য আমাদের মূল সেবাগুলোর বিস্তারিত বিবরণ দেওয়া হলো।",
    backgroundImage: {
      src: images.image.about_1,
      alt: "মাদ্রাসার শিক্ষার্থীরা ক্লাস করছে",
    },
  },
  servicesList: [
    {
      image: images.image.makka,
      title: "ভর্তি ও তথ্য",
      description:
        "ভর্তির প্রয়োজনীয় তথ্য, শর্তাবলী ও আবেদনের পদ্ধতি সম্পর্কে বিস্তারিত। অনলাইনে আবেদন ফরম এবং জরুরি সূচি পাওয়া যাবে।",
      buttonName: "আবেদন করুন",
      buttonLink: "/admissions",
    },
    {
      image: images.image.masq,
      title: "কোরআন শিক্ষা",
      description:
        "সিনিয়র ও জুনিয়র স্তরে সাজানো কোরআন শিক্ষা প্রোগ্রাম — তাজবীদ ও তিলাওয়াত সহ।",
      buttonName: "বিস্তারিত দেখুন",
      buttonLink: "/services/quran-classes",
    },
    {
      image: images.image.quranstudy,
      title: "হিফজ প্রোগ্রাম",
      description:
        "শিশু ও কিশোরদের জন্য পূর্ণাঙ্গ হিফজ কোর্স, অভিজ্ঞ মুরাব্বিদের তত্ত্বাবধানে।",
      buttonName: "প্রোগ্রাম দেখুন",
      buttonLink: "/services/hifz",
    },
    {
      image: images.image.makka,
      title: "শিক্ষা কারিকুলাম",
      description:
        "ইসলামী বিষয়াবলি, আরবি, ফিকহ ও আধুনিক বিষয় যেমন বিজ্ঞান ও গণিতের সমন্বিত পাঠ্যক্রম।",
      buttonName: "কোর্স তালিকা",
      buttonLink: "/services/curriculum",
    },
    {
      image: images.image.quranstudy,
      title: "অনলাইন ক্লাস",
      description:
        "দূরে থাকা শিক্ষার্থীদের জন্য লাইভ অনলাইন ক্লাস এবং রেকর্ডিং সুবিধা।",
      buttonName: "অনলাইনে শিখুন",
      buttonLink: "/services/online-classes",
    },
    {
      image: images.image.masq,
      title: "গ্রন্থাগার",
      description:
        "ইসলামি ও শিক্ষামূলক গ্রন্থাগার এবং রিসোর্স রুম যা শিক্ষার্থীদের জন্য উন্মুক্ত।",
      buttonName: "গ্রন্থাগার দেখুন",
      buttonLink: "/services/library",
    },
    {
      image: images.image.quranstudy,
      title: "হোস্টেল সুবিধা",
      description:
        "নিরাপদ থাকার ব্যবস্থা, খাবার ও পরিবহনসহ সর্বোচ্চ মানের হোস্টেল সুবিধা প্রদান।",
      buttonName: "বিস্তারিত জানুন",
      buttonLink: "/services/hostel",
    },
    {
      image: images.image.about_2,
      title: "দান ও সহযোগিতা",
      description:
        "মাদ্রাসার কার্যক্রম সমর্থনে অনুদান এবং স্বেচ্ছাসেবী অংশগ্রহণের সুযোগ।",
      buttonName: "দান করুন",
      buttonLink: "/donate",
    },
  ],
  callToActionSection: {
    title: "আরো জানতে চান?",
    buttonText: "যোগাযোগ করুন",
    buttonLink: "/contact",
  },
};

export default servicesContent;
