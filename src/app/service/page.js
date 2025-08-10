import Image from "next/image"
import Link from "next/link"
import { Button } from "../../Components/ui/button"
import servicesContent from "@/Json/servicesContent"

const page = () => {
  const data = servicesContent || {}
  const hero = data.heroSection || {}
  const list = Array.isArray(data.servicesList) ? data.servicesList : []
  const cta = data.callToActionSection

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-[#ebf5f3]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-700" />
                <span className="select-none">{hero.subtitle || "Our Services"}</span>
              </div>
              <h1 className="mt-3 text-3xl font-semibold leading-tight text-emerald-900 md:text-5xl">
                {hero.title || "আমাদের সেবাসমূহ"}
              </h1>
              <p className="mt-4 text-[15px] leading-7 text-emerald-800/80">{hero.description}</p>
            </div>
            <div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-emerald-100">
                <Image
                  src={
                    hero?.backgroundImage?.src ||
                    "/placeholder.svg?height=720&width=960&query=madrasah%20services%20hero" ||
                    "/placeholder.svg"
                  }
                  alt={hero?.backgroundImage?.alt || hero.title || "Services Hero"}
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-900/10 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-700" />
              <span className="select-none">{data.pageTitle || "আমাদের সেবা - Holi-Place"}</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-emerald-900 md:text-4xl">Explore Services</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((svc, i) => (
              <article
                key={(svc.title || "service") + i}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-emerald-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={
                        svc.image ||
                        "/placeholder.svg?height=600&width=800&query=service%20card%20cover" ||
                        "/placeholder.svg"
                      }
                      alt={svc.title || "Service"}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      priority={i < 2}
                    />
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-emerald-900">{svc.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-slate-700 min-h-[96px] max-h-[96px] overflow-hidden [display:-webkit-box] [-webkit-line-clamp:4] [-webkit-box-orient:vertical]">
                    {svc.description}
                  </p>

                  <div className="mt-6">
                    <Link href={svc.buttonLink || "#"} aria-label={svc.title || "View service"}>
                      <Button className="rounded-xl bg-emerald-700 px-5 text-white hover:bg-emerald-800">
                        {svc.buttonName || "বিস্তারিত দেখুন"}
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {cta && (
        <section className="w-full bg-[#ebf5f3]">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-emerald-100">
              <h3 className="text-2xl font-semibold text-emerald-900">{cta.title}</h3>
              <div className="mt-6">
                <Link href={cta.buttonLink || "/contact"}>
                  <Button className="rounded-xl bg-emerald-700 px-6 text-white hover:bg-emerald-800">
                    {cta.buttonText || "যোগাযোগ করুন"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

export default page
