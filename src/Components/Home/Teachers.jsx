"use client"

import { useEffect, useId, useRef, useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, A11y, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { Button } from "../ui/button"
import { Facebook, MessageCircle, Mail, ChevronLeft, ChevronRight } from "lucide-react"
import gsap from "gsap"

// Use your real data source:
import teachers from "@/Json/teachers"
import Link from "next/link"

function twoDigits(n) {
  return String(n).padStart(2, "0")
}

function SocialIcon({ href, label, children }) {
  if (!href) return null
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-50"
    >
      {children}
    </Link>
  )
}

function TeacherCard({ t, priority = false }) {
  return (
    <article className="teacher-card group relative rounded-2xl bg-white p-4 shadow-sm ring-1 ring-emerald-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Portrait area */}
      <div className="portrait relative flex h-80 items-end justify-center overflow-hidden rounded-xl bg-slate-50">
        <Image
          src={t.image || "/placeholder.svg?height=460&width=460&query=teacher portrait"}
          alt={t.name}
          width={420}
          height={420}
          sizes="(min-width:1024px) 280px, (min-width:768px) 360px, 100vw"
          className="h-full w-auto max-w-none object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          priority={priority}
        />
      </div>

      {/* Info panel with subtle corner pattern (CSS radial gradients) */}
      <div
        className="info relative mt-4 rounded-xl px-6 py-6"
        style={{
          backgroundColor: "#eaf5f1",
          backgroundImage:
            "radial-gradient(14px 14px at 28px 100%, rgba(16,185,129,.08) 0 60%, transparent 61%), radial-gradient(14px 14px at calc(100% - 28px) 100%, rgba(16,185,129,.08) 0 60%, transparent 61%)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom left, bottom right",
          backgroundSize: "160px 120px",
        }}
      >
        <h3 className="text-center text-[18px] font-semibold text-emerald-900">{t.name}</h3>
        <p className="mt-1 text-center text-sm text-slate-600">{t.title}</p>

        {/* Socials */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <SocialIcon href={t.facebook} label="Facebook">
            <Facebook className="h-4 w-4" aria-hidden="true" />
          </SocialIcon>
          <SocialIcon href={t.whatsapp} label="WhatsApp">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </SocialIcon>
          <SocialIcon href={t.email} label="Email">
            <Mail className="h-4 w-4" aria-hidden="true" />
          </SocialIcon>
        </div>
      </div>
    </article>
  )
}

const Teachers = () => {
  const id = useId().replace(/[:]/g, "")
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const containerRef = useRef(null)
  const [active, setActive] = useState(0)

  // GSAP: section + cards entrance
  useEffect(() => {
    if (!containerRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(".teachers-heading", { y: 18, autoAlpha: 0, duration: 0.6, ease: "power2.out" })
      gsap.set(".teacher-card", { y: 18, autoAlpha: 0 })
      gsap.to(".teacher-card", {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.06,
        delay: 0.1,
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  // GSAP: active slide micro animation
  const animateActive = (swiper) => {
    const slideEl = swiper.slides[swiper.activeIndex]
    if (!slideEl) return
    const card = slideEl.querySelector(".teacher-card")
    const tl = gsap.timeline()
    tl.fromTo(
      card,
      { y: 8, scale: 0.985, autoAlpha: 0.98 },
      { y: 0, scale: 1, autoAlpha: 1, duration: 0.35, ease: "power2.out" },
    )
    const socials = card.querySelectorAll("a[aria-label]")
    tl.fromTo(
      socials,
      { y: 6, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.25, ease: "power2.out", stagger: 0.05 },
      "-=0.15",
    )
  }

  return (
    <section ref={containerRef} className="w-full bg-[#ebf5f3]">
      <div className="mx-auto container px-4 py-16 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="teachers-heading mb-10 text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-700" />
            <span className="select-none">Our Teachers</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-900 md:text-4xl">আমাদের আলেমরা</h2>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, A11y, Autoplay]}
            loop
            speed={600}
            grabCursor
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            // Autoplay (pause on hover)
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            // Use refs for reliable custom nav
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }}
            onInit={(swiper) => {
              swiper.navigation.init()
              swiper.navigation.update()
              setActive(swiper.realIndex)
              animateActive(swiper)
            }}
            onSlideChange={(swiper) => {
              setActive(swiper.realIndex)
            }}
            onSlideChangeTransitionStart={(swiper) => {
              animateActive(swiper)
            }}
            a11y={{ prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide" }}
          >
            {teachers.map((t, idx) => (
              <SwiperSlide key={t.name + idx} className="pb-2">
                <TeacherCard t={t} priority={idx < 2} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls + fraction */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <Button
              type="button"
              ref={prevRef}
              variant="ghost"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-900 shadow-sm transition-colors hover:bg-emerald-50 focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </Button>

            <div className="min-w-[92px] select-none text-center text-sm font-medium tracking-[0.25em] text-emerald-900">
              {twoDigits(teachers.length ? active + 1 : 0)} <span className="mx-1 text-emerald-600">/</span>{" "}
              {twoDigits(teachers.length)}
            </div>

            <Button
              type="button"
              ref={nextRef}
              variant="ghost"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-900 shadow-sm transition-colors hover:bg-emerald-50 focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teachers
