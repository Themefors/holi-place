import AdmissionsForm from "@/Components/AdmissionsForm/Admissions-form"

// SEO metadata must be defined in a Server Component page or layout [^1].
export const metadata = {
  title: "ভর্তি ফর্ম | Holi-Place",
  description:
    "Holi-Place মাদ্রাসায় নতুন শিক্ষার্থী ভর্তির জন্য আবেদন ফর্ম। শিক্ষার্থীর তথ্য, অভিভাবকের তথ্য এবং ছবি যুক্ত করে আবেদন করুন।",
  alternates: { canonical: "/admissions" },
  openGraph: {
    title: "ভর্তি ফর্ম | Holi-Place",
    description:
      "Holi-Place মাদ্রাসায় নতুন শিক্ষার্থী ভর্তির জন্য আবেদন ফর্ম। শিক্ষার্থীর তথ্য, অভিভাবকের তথ্য এবং ছবি যুক্ত করে আবেদন করুন।",
    url: "/admissions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ভর্তি ফর্ম | Holi-Place",
    description:
      "Holi-Place মাদ্রাসায় নতুন শিক্ষার্থী ভর্তির জন্য আবেদন ফর্ম। শিক্ষার্থীর তথ্য, অভিভাবকের তথ্য এবং ছবি যুক্ত করে আবেদন করুন।",
  },
}

export default function Page() {
  return <AdmissionsForm />
}
