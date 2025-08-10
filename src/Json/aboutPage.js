import images from "../../public/images";

const aboutContent = {
  pageTitle: "আমাদের সম্পর্কে - Holi-Place",
  heroSection: {
    title: "আধ্যাত্মিকতা ও আধুনিক শিক্ষার সমন্বয়",
    subtitle: "Holi-Place মাদ্রাসায় স্বাগত",
    description:
      "আমাদের মাদ্রাসায় কুরআন, হাদিস ও ইসলামী শিক্ষা সহ আধুনিক শিক্ষার উৎকর্ষ সাধন করা হয়। আমরা বিশ্বাস করি, ধর্মীয় শিক্ষা ও আধুনিকতা একসাথে থাকলে সমাজে উন্নতি সম্ভব।",
    backgroundImage: {
      src: images.image.about_1,
      alt: "মাদ্রাসার ছাত্রছাত্রীদের ছবি"
    },
  },
  missionSection: {
    title: "আমাদের লক্ষ্য",
    description:
      "আমাদের প্রধান লক্ষ্য হলো শিক্ষার্থীদেরকে এমনভাবে গড়ে তোলা, যাতে তারা ইসলামের মূলমন্ত্র বুঝতে পারে এবং আধুনিক জীবনেও সফল ও নৈতিক নাগরিক হিসেবে প্রতিষ্ঠিত হয়। আমরা এমন শিক্ষার ব্যবস্থা করি যা জীবনকে উন্নত করে।"
  },
  visionSection: {
    title: "আমাদের দৃষ্টি",
    description:
      "একটি আধুনিক ও সুসংগঠিত মাদ্রাসা হিসেবে Holi-Place হবে যার শিক্ষার্থীরা সমাজে আলোকবর্তিকা হিসেবে কাজ করবে, দেশ ও জাতির উন্নয়নে অবদান রাখবে।"
  },
  valuesSection: {
    title: "আমাদের মূল্যবোধ",
    values: [
      "সততা ও নৈতিকতা",
      "শিক্ষার প্রতি নিষ্ঠা",
      "আদর্শ ও নৈতিক ব্যক্তিত্ব গঠন",
      "সমাজসেবা ও সহযোগিতা",
      "বৈশ্বিক দৃষ্টিভঙ্গি ও সম্মান",
    ],
  },
  programsSection: {
    title: "আমাদের প্রোগ্রামসমূহ",
    programs: [
      {
        name: "কোরআন শিক্ষা",
        description:
          "তাজবীদ ও তিলাওয়াত সহ সিনিয়র ও জুনিয়র স্তরে সাজানো কোরআন শিক্ষা প্রোগ্রাম।",
        icon: "quran",
      },
      {
        name: "হিফজ প্রোগ্রাম",
        description:
          "শিশু ও কিশোরদের জন্য সম্পূর্ণ হিফজ কোর্স, অভিজ্ঞ মুরাব্বিদের তত্ত্বাবধানে।",
        icon: "memorization",
      },
      {
        name: "আধুনিক শিক্ষা কারিকুলাম",
        description:
          "ইসলামী বিষয়াবলি, আরবি, ফিকহ, এবং আধুনিক বিষয় যেমন বিজ্ঞান, গণিত অন্তর্ভুক্ত।",
        icon: "education",
      },
      {
        name: "অনলাইন ক্লাস",
        description:
          "দূরে থাকা শিক্ষার্থীদের জন্য লাইভ অনলাইন ক্লাস এবং রেকর্ডিং সুবিধা।",
        icon: "online",
      },
    ],
  },
  testimonialsSection: {
    title: "আমাদের শিক্ষার্থীদের মতামত",
    testimonials: [
      {
        name: "মোঃ হাসান আলী",
        role: "শিক্ষার্থী",
        comment:
          "Holi-Place মাদ্রাসায় আমি কোরআন ও আধুনিক শিক্ষা দুইই খুব ভালোভাবে পেয়েছি। শিক্ষকরা খুবই সাহায্যকারী ও আন্তরিক।",
        avatar: images.image.teacher1,
      },
      {
        name: "রফিকা খাতুন",
        role: "অভিভাবক",
        comment:
          "আমার সন্তানের জন্য Holi-Place একটি আশীর্বাদ। এখানে শিক্ষার মান খুব ভালো এবং পরিবেশ নিরাপদ।",
        avatar: images.image.teacher2,
      },
    ],
  },
  callToActionSection: {
    title: "তুমি কি Holi-Place পরিবারের একজন হতে চাও?",
    buttonText: "এখনই ভর্তি হও",
    buttonLink: "/admissions",
  },
  contactSection: {
    title: "যোগাযোগ করুন",
    address: "ঢাকা, বাংলাদেশ",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "info@holi-place.com",
    socialLinks: {
      facebook: "https://facebook.com/holiplace",
      whatsapp: "https://wa.me/8801712345678",
      emailLink: "mailto:info@holi-place.com",
    },
  },
};

export default aboutContent;
