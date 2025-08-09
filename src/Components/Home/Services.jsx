"use client"

import { useEffect, useId, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import { BookOpen, Building2, Boxes } from "lucide-react"
import services from "@/Json/services"
import { Button } from "../ui/button"
import Image from "next/image"

function twoDigits(n) {
  return String(n).padStart(2, "0")
}

function Emblem({ index }) {
  const icons = [BookOpen, Building2, Boxes]
  const Icon = icons[index % icons.length]
  return (
    <div className="absolute -top-4 left-6">
      <div className="relative">
        <div className="flex h-8 w-10 items-center justify-center rounded-t-lg rounded-b-sm bg-emerald-800">
          <Icon className="h-4 w-4 text-white" aria-hidden="true" />
        </div>
        <div
          className="absolute -bottom-[6px] left-0 h-0 w-0 border-l-[10px] border-l-transparent border-t-[6px] border-t-emerald-900"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

function ServiceCard({ service, index }) {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          src={service.image}
          alt={service.title}
          className="h-96 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        />
      </div>

      <div className="relative -mt-10 mx-4 rounded-2xl bg-[#eaf5f1] p-6 shadow-sm ring-1 ring-emerald-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg">
        <Emblem index={index} />

        <div className="pt-2">
          <h3 className="text-xl font-semibold text-emerald-900">{service.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
        </div>

        <div className="mt-6">
          <a
            href={service.buttonLink || "#"}
            aria-label={`Read more about ${service.title}`}
            className="relative inline-block"
          >
            {/* folded paper accent */}
            <span className="absolute -left-3 top-1/2 hidden -translate-y-1/2 md:block" aria-hidden="true">
              <span className="block h-3 w-3 rotate-45 bg-[#f7cc4b]" />
            </span>
            <Button className="rounded-xl bg-[#f7cc4b] px-6 py-6 text-[0.95rem] font-semibold text-emerald-900 shadow-sm transition-transform duration-300 ease-out hover:bg-[#f3c029] group-hover:-translate-y-0.5 group-hover:shadow-md">
              {service.buttonName || "Read More"}
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function ServicesSwiper() {
  const id = useId().replace(/[:]/g, "")
  const prevClass = `prev-${id}`
  const nextClass = `next-${id}`

  const [active, setActive] = useState(0)

  // Keep active index up to date if items change
  useEffect(() => {
    setActive(0)
  }, [services])

  return (
    <section className="w-full bg-[#ebf5f3]">
      <div className="mx-auto container px-4 py-16 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
            <span className="select-none">OUR SERVICES</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-900 md:text-4xl">আমাদের সেবাসমূহ</h2>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, A11y]}
            loop
            speed={500}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            navigation={{ prevEl: `.${prevClass}`, nextEl: `.${nextClass}` }}
            onSlideChange={(sw) => setActive(sw.realIndex)}
            onSwiper={(sw) => {
              // ensure nav initialized when custom buttons mount
              setTimeout(() => {
                sw.params.navigation.prevEl = document.querySelector(`.${prevClass}`)
                sw.params.navigation.nextEl = document.querySelector(`.${nextClass}`)
                sw.navigation.destroy()
                sw.navigation.init()
                sw.navigation.update()
              })
            }}
            a11y={{ prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide" }}
            className="!px-1"
          >
            {services.map((service, idx) => (
              <SwiperSlide key={`${service.title}-${idx}`} className="pb-2">
                <ServiceCard service={service} index={idx} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls + Pagination */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              className={`${prevClass} inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-900 shadow-sm transition-colors hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-400`}
              aria-label="Previous slide"
            >
              <span className="sr-only">Previous</span>
              <svg width="20" height="20" viewBox="0 0 24 24" className="fill-none stroke-current">
                <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              className="min-w-[92px] select-none text-center text-sm font-medium tracking-[0.25em] text-emerald-900"
              aria-live="polite"
              aria-atomic="true"
            >
              {twoDigits(services.length ? active + 1 : 0)} <span className="mx-1 text-emerald-600">/</span>{" "}
              {twoDigits(services.length)}
            </div>

            <button
              type="button"
              className={`${nextClass} inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-900 shadow-sm transition-colors hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-400`}
              aria-label="Next slide"
            >
              <span className="sr-only">Next</span>
              <svg width="20" height="20" viewBox="0 0 24 24" className="fill-none stroke-current">
                <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
