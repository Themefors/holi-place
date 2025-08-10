"use client"

import { useEffect, useId, useRef, useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { BookOpen, Building2, Boxes, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import services from "@/Json/services"

export default function Services() {
  const id = useId().replace(/[:]/g, "")
  const prevClass = `prev-${id}`
  const nextClass = `next-${id}`
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)

  // Helper kept inline
  const twoDigits = (n) => String(n).padStart(2, "0")
  const icons = [BookOpen, Building2, Boxes]

  // Reset active when data changes
  useEffect(() => setActive(0), [services])

  // Entrance animation only (simple)
  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(".services-heading", { y: 18, autoAlpha: 0, duration: 0.55, ease: "power2.out" })
      gsap.set(".service-card", { y: 18, autoAlpha: 0 })
      gsap.to(".service-card", {
        y: 0,
        autoAlpha: 1,
        duration: 0.45,
        stagger: 0.06,
        ease: "power2.out",
        delay: 0.1,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="w-full bg-[#ebf5f3]">
      <div className="mx-auto container px-4 py-16 md:px-6 lg:px-8">
        {/* Header */}
        <div className="services-heading mb-10 text-center">
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
              // Safely (re)bind custom nav after buttons exist
              setTimeout(() => {
                const prevEl = document.querySelector(`.${prevClass}`)
                const nextEl = document.querySelector(`.${nextClass}`)
                if (!prevEl || !nextEl) return
                // Re-assign and init if module is present
                if (sw?.params?.navigation) {
                  sw.params.navigation.prevEl = prevEl
                  sw.params.navigation.nextEl = nextEl
                }
                if (sw?.navigation) {
                  // guard against undefined
                  sw.navigation.destroy?.()
                  sw.navigation.init?.()
                  sw.navigation.update?.()
                }
              }, 0)
            }}
            a11y={{ prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide" }}
            className="!px-1"
          >
            {services.map((service, idx) => {
              const Icon = icons[idx % icons.length]
              return (
                <SwiperSlide key={`${service.title}-${idx}`} className="pb-2">
                  <div className="service-card group relative">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-3xl">
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={service.image || "/placeholder.svg?height=600&width=800&query=service%20image"}
                          alt={service.title || "Service"}
                          fill
                          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                          priority={idx < 2}
                        />
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="relative -mt-10 mx-4 rounded-2xl bg-[#eaf5f1] p-6 shadow-sm ring-1 ring-emerald-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg">
                      {/* Emblem tab */}
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
                          <span
                            className="absolute -left-3 top-1/2 hidden -translate-y-1/2 md:block"
                            aria-hidden="true"
                          >
                            <span className="block h-3 w-3 rotate-45 bg-[#f7cc4b]" />
                          </span>
                          <Button className="rounded-xl bg-[#f7cc4b] px-6 py-6 text-[0.95rem] font-semibold text-emerald-900 shadow-sm transition-transform duration-300 ease-out hover:bg-[#f3c029] group-hover:-translate-y-0.5 group-hover:shadow-md">
                            {service.buttonName || "Read More"}
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>

          {/* Controls + Pagination */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <Button
              type="button"
              className={`${prevClass} inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-900 shadow-sm transition-colors hover:bg-emerald-50 focus-visible:ring-2 focus-visible:ring-emerald-400`}
              aria-label="Previous slide"
              variant="ghost"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </Button>

            <div
              className="min-w-[92px] select-none text-center text-sm font-medium tracking-[0.25em] text-emerald-900"
              aria-live="polite"
              aria-atomic="true"
            >
              {twoDigits(services.length ? active + 1 : 0)} <span className="mx-1 text-emerald-600">/</span>{" "}
              {twoDigits(services.length)}
            </div>

            <Button
              type="button"
              className={`${nextClass} inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-900 shadow-sm transition-colors hover:bg-emerald-50 focus-visible:ring-2 focus-visible:ring-emerald-400`}
              aria-label="Next slide"
              variant="ghost"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
