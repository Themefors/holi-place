"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Target,
  Eye,
  CheckCircle2,
  GraduationCap,
  Brain,
  Video,
  MapPin,
  Phone,
  Mail,
  Facebook,
  MessageCircle,
} from "lucide-react"
import aboutContent from "@/Json/aboutPage"

const page = () => {
  const data = aboutContent || {}
  const hero = data.heroSection || {}
  const mission = data.missionSection || {}
  const vision = data.visionSection || {}
  const values = data.valuesSection?.values || []
  const programs = data.programsSection?.programs || []
  const testiTitle = data.testimonialsSection?.title
  const testimonials = data.testimonialsSection?.testimonials || []
  const cta = data.callToActionSection
  const contact = data.contactSection

  // icon map for programs
  const programIconMap = {
    quran: BookOpen,
    memorization: Brain,
    education: GraduationCap,
    online: Video,
  }

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-[#ebf5f3]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="select-none">{hero.subtitle || "About"}</span>
              </div>
              <h1 className="mt-3 text-3xl font-semibold leading-tight text-emerald-900 md:text-5xl">
                {hero.title || "About Us"}
              </h1>
              <p className="mt-4 text-[15px] leading-7 text-emerald-800/80">{hero.description}</p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-emerald-100">
                <Image
                  src={hero?.backgroundImage?.src || "/placeholder.svg?height=720&width=960&query=about%20hero"}
                  alt={hero?.backgroundImage?.alt || hero.title || "Hero"}
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

      {/* Mission + Vision */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-[#ebf5f3] p-8 shadow-sm ring-1 ring-emerald-100">
              <div className="mb-3 inline-flex items-center gap-2">
                <Target className="h-5 w-5 text-emerald-800" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-emerald-900">{mission.title || "আমাদের লক্ষ্য"}</h3>
              </div>
              <p className="text-[15px] leading-7 text-emerald-800/80">{mission.description}</p>
            </div>
            <div className="rounded-2xl bg-[#ebf5f3] p-8 shadow-sm ring-1 ring-emerald-100">
              <div className="mb-3 inline-flex items-center gap-2">
                <Eye className="h-5 w-5 text-emerald-800" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-emerald-900">{vision.title || "আমাদের দৃষ্টি"}</h3>
              </div>
              <p className="text-[15px] leading-7 text-emerald-800/80">{vision.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full bg-[#ebf5f3]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="select-none">{data.valuesSection?.title || "আমাদের মূল্যবোধ"}</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-emerald-900 md:text-4xl">Our Values</h2>
          </div>
          <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {values.map((v, i) => (
              <li
                key={v + i}
                className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-emerald-100"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-700" aria-hidden="true" />
                <span className="text-[15px] leading-7 text-emerald-900">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Programs */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
              <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="select-none">{data.programsSection?.title || "আমাদের প্রোগ্রামসমূহ"}</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-emerald-900 md:text-4xl">Programs</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p, i) => {
              const Icon = programIconMap[p.icon] || GraduationCap
              return (
                <article
                  key={p.name + i}
                  className="group rounded-2xl bg-[#ebf5f3] p-6 shadow-sm ring-1 ring-emerald-100 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-700 text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-900">{p.name}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-emerald-800/80">{p.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mini Testimonials */}
      {testimonials.length > 0 && (
        <section className="w-full bg-[#ebf5f3]">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="select-none">{testiTitle || "আমাদের শিক্ষার্থীদের মতামত"}</span>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-emerald-900 md:text-4xl">What People Say</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <article
                  key={t.name + i}
                  className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-100"
                >
                  <div className="relative h-14 w-14 overflow-hidden rounded-full bg-slate-100 ring-1 ring-emerald-100">
                    <Image
                      src={t.avatar || "/placeholder.svg?height=96&width=96&query=avatar"}
                      alt={t.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-emerald-900">{t.name}</div>
                    <div className="text-xs text-emerald-800/70">{t.role}</div>
                    <p className="mt-2 text-[15px] leading-7 text-emerald-800/90">{t.comment}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      {cta && (
        <section className="w-full bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
            <div className="rounded-2xl bg-emerald-700 px-8 py-10 text-center text-white shadow-sm">
              <h3 className="text-2xl font-semibold">{cta.title}</h3>
              <div className="mt-6">
                <Link href={cta.buttonLink || "#"}>
                  <Button className="rounded-xl bg-white text-emerald-800 hover:bg-emerald-50">
                    {cta.buttonText || "Learn More"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      {contact && (
        <section className="w-full bg-[#ebf5f3]">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="select-none">{contact.title || "যোগাযোগ করুন"}</span>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-emerald-900 md:text-4xl">Contact</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-100">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-emerald-700" aria-hidden="true" />
                  <div>
                    <div className="font-semibold text-emerald-900">Address</div>
                    <div className="text-[15px] text-emerald-800/80">{contact.address}</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-100">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-emerald-700" aria-hidden="true" />
                  <div>
                    <div className="font-semibold text-emerald-900">Phone</div>
                    <a href={`tel:${contact.phone}`} className="text-[15px] text-emerald-800/80 hover:text-emerald-900">
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-100">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-emerald-700" aria-hidden="true" />
                  <div>
                    <div className="font-semibold text-emerald-900">Email</div>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-[15px] text-emerald-800/80 hover:text-emerald-900"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  {contact.socialLinks?.facebook && (
                    <Link
                      href={contact.socialLinks.facebook}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-800 transition-colors hover:bg-emerald-50"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                  {contact.socialLinks?.whatsapp && (
                    <Link
                      href={contact.socialLinks.whatsapp}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-800 transition-colors hover:bg-emerald-50"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                  {contact.socialLinks?.emailLink && (
                    <Link
                      href={contact.socialLinks.emailLink}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-800 transition-colors hover:bg-emerald-50"
                      aria-label="Email"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

export default page
