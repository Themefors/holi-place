"use client"

import { useEffect, useId, useRef, useState } from "react"
// import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, A11y, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import { Button } from "../ui/button"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import gsap from "gsap"

// Use your real data:
import testimonials from "@/Json/testimonials"

function twoDigits(n) {
  return String(n).padStart(2, "0")
}

function Stars({ rating = 0 }) {
  const full = Math.max(0, Math.min(5, Math.round(rating)))
  return (
<div className="flex items-center gap-1">
  {Array.from({ length: 5 }).map((_, i) => (
    <Star
      key={i}
      className={`h-4 w-4 ${i < full ? "stroke-yellow-400" : "stroke-gray-300"}`}
      fill={i < full ? "yellow" : "none"}
      aria-hidden="true"
    />
  ))}
</div>

  )
}

function TestimonialCard({ t, priority = false }) {
  return (
    <article className="testimonial-card group relative min-h-[320px] md:min-h-[340px] rounded-2xl bg-white p-5 shadow-sm ring-1 ring-emerald-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col">
      {/* Quote badge */}
      <div className="absolute -top-3 left-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md">
        <Quote className="h-5 w-5" aria-hidden="true" />
      </div>

      {/* Review */}
      <p className="mt-6 flex-1 text-[15px] leading-7 text-slate-700 overflow-hidden min-h-[154px] max-h-[154px] [display:-webkit-box] [-webkit-line-clamp:6] [-webkit-box-orient:vertical]">
        {t.review}
      </p>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-100 ring-1 ring-emerald-100">
            <Image
              src={t.image || "/placeholder.svg?height=96&width=96&query=testimonial avatar"}
              alt={t.name}
              width={96}
              height={96}
              className="h-full w-full object-cover"
              priority={priority}
            />
          </div> */}
          <div>
            <div className="text-[15px] font-semibold text-emerald-900">{t.name}</div>
            <div className="text-xs text-slate-500">{t.title}</div>
          </div>
        </div>
        <Stars rating={t.rating} />
      </div>
    </article>
  )
}

const Testimonials = () => {
  // const id = useId().replace(/[:]/g, "")
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const containerRef = useRef(null)
  const [active, setActive] = useState(0)

  // GSAP: entrance
  useEffect(() => {
    if (!containerRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(".testimonials-heading", { y: 18, autoAlpha: 0, duration: 0.6, ease: "power2.out" })
      gsap.set(".testimonial-card", { y: 18, autoAlpha: 0 })
      gsap.to(".testimonial-card", {
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
    const el = swiper.slides[swiper.activeIndex]?.querySelector(".testimonial-card")
    if (!el) return
    gsap.fromTo(
      el,
      { y: 8, scale: 0.985, autoAlpha: 0.98 },
      { y: 0, scale: 1, autoAlpha: 1, duration: 0.35, ease: "power2.out" },
    )
  }

  return (
    <section ref={containerRef} className="w-full bg-white">
      <div className="mx-auto container px-4 py-16 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="testimonials-heading mb-10 text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-700" />
            <span className="select-none">TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-900 md:text-4xl">আমাদের সম্পর্কে</h2>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
wrapperClass="py-8"
            modules={[Navigation, A11y, Autoplay]}
            loop
            speed={600}
            spaceBetween={24}
            grabCursor
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
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
            onSlideChange={(swiper) => setActive(swiper.realIndex)}
            onSlideChangeTransitionStart={animateActive}
            a11y={{ prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide" }}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={t.name + idx} className="pb-2">
                <TestimonialCard t={t} priority={idx < 2} />
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
              {twoDigits(testimonials.length ? active + 1 : 0)} <span className="mx-1 text-emerald-600">/</span>{" "}
              {twoDigits(testimonials.length)}
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

export default Testimonials
