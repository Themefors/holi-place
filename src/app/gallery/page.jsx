export const metadata = {
  title: "গ্যালারি | Holi-Place",
  description: "Holi-Place মাদ্রাসার কার্যক্রম, ক্লাসরুম, ইভেন্ট ও কমিউনিটি প্রোগ্রামের ছবি সমূহ দেখুন।",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "গ্যালারি | Holi-Place",
    description: "Holi-Place মাদ্রাসার কার্যক্রম, ক্লাসরুম, ইভেন্ট ও কমিউনিটি প্রোগ্রামের ছবি সমূহ দেখুন।",
    url: "/gallery",
    type: "website",
    images: [
      {
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
        width: 1200,
        height: 800,
        alt: "Holi-Place Gallery cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "গ্যালারি | Holi-Place",
    description: "Holi-Place মাদ্রাসার কার্যক্রম, ক্লাসরুম, ইভেন্ট ও কমিউনিটি প্রোগ্রামের ছবি সমূহ দেখুন।",
    images: ["https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"],
  },
}

export default function Page() {
  // Four masonry columns (same sources you provided)
  const cols = [
    [
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg", alt: "গ্যালারি ছবি ১" },
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg", alt: "গ্যালারি ছবি ২" },
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg", alt: "গ্যালারি ছবি ৩" },
    ],
    [
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg", alt: "গ্যালারি ছবি ৪" },
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg", alt: "গ্যালারি ছবি ৫" },
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg", alt: "গ্যালারি ছবি ৬" },
    ],
    [
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg", alt: "গ্যালারি ছবি ৭" },
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg", alt: "গ্যালারি ছবি ৮" },
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg", alt: "গ্যালারি ছবি ৯" },
    ],
    [
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg", alt: "গ্যালারি ছবি ১০" },
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg", alt: "গ্যালারি ছবি ১১" },
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg", alt: "গ্যালারি ছবি ১২" },
    ],
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Holi-Place Gallery",
    description: "Holi-Place মাদ্রাসার কার্যক্রম, ক্লাসরুম, ইভেন্ট ও কমিউনিটি প্রোগ্রামের ছবি সমূহ।",
    hasPart: {
      "@type": "ItemList",
      itemListElement: cols.flat().map((img, i) => ({
        "@type": "ImageObject",
        position: i + 1,
        contentUrl: img.src,
        caption: img.alt,
      })),
    },
  }

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="w-full bg-[#ebf5f3]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-700" />
              <span className="select-none">ফটো গ্যালারি</span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-emerald-900 md:text-5xl">আমাদের গ্যালারি</h1>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-emerald-800/80">
              Holi-Place মাদ্রাসার কিছু মুহূর্ত—ক্লাস, ইভেন্ট, কমিউনিটি প্রোগ্রাম ও আরও অনেক কিছু।
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {cols.map((col, ci) => (
              <div key={ci} className="grid gap-4">
                {col.map((img, ii) => (
                  <figure key={ci + "-" + ii} className="overflow-hidden rounded-2xl">
                    <img
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      loading="lazy"
                      className="h-auto max-w-full rounded-2xl transition-transform duration-500 ease-out hover:scale-[1.03]"
                    />
                    <figcaption className="sr-only">{img.alt}</figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}
