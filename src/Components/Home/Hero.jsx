"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import heroSliderData from "@/Json/heroSliderData"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/autoplay"

// import required modules
import { Autoplay } from "swiper/modules"

// Import GSAP
import { gsap } from "gsap"
import { Play, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

const Hero = () => {
  const slideRefs = useRef([])
  const swiperRef = useRef(null)
  const ctx = useRef(null)

  useEffect(() => {
    ctx.current = gsap.context(() => {})
    return () => ctx.current.revert()
  }, [])

  const animateSlideContent = (slideIndex) => {
    const slideEl = slideRefs.current[slideIndex]
    if (!slideEl) return

    const arabicText = slideEl.querySelector(".arabic-text")
    const arabicSubText = slideEl.querySelector(".arabic-sub-text")
    const title = slideEl.querySelector("h2")
    const description = slideEl.querySelector("p")
    const buttons = slideEl.querySelectorAll("a")

    gsap.killTweensOf([arabicText, arabicSubText, title, description, buttons])

    ctx.current?.add(() => {
      gsap
        .timeline()
        .fromTo(arabicText, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
        .fromTo(arabicSubText, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .fromTo(title, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .fromTo(description, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .fromTo(
          buttons,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 },
          "-=0.5",
        )
    })
  }

  return (
    <section className="w-full h-screen relative rounded-2xl overflow-hidden">
      {/* Social Media Icons */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
        <Link href="https://linkedin.com" target="_blank" className="text-white hover:text-[#ffd54f] transition-colors">
          <Linkedin className="h-6 w-6" />
        </Link>
        <Link href="https://twitter.com" target="_blank" className="text-white hover:text-[#ffd54f] transition-colors">
          <Twitter className="h-6 w-6" />
        </Link>
        <Link href="https://facebook.com" target="_blank" className="text-white hover:text-[#ffd54f] transition-colors">
          <Facebook className="h-6 w-6" />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          className="text-white hover:text-[#ffd54f] transition-colors"
        >
          <Instagram className="h-6 w-6" />
        </Link>
      </div>

      {/* Vertical Dots/Indicators */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center space-y-2">
        {heroSliderData.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              swiperRef.current && swiperRef.current.activeIndex % heroSliderData.length === idx
                ? "bg-[#ffd54f] w-3 h-3" // Active dot
                : "bg-white opacity-50" // Inactive dot
            }`}
          ></div>
        ))}
        <div className="w-px h-24 bg-white opacity-50"></div> {/* Vertical line */}
      </div>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper w-full h-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper
          animateSlideContent(swiper.activeIndex % heroSliderData.length)
        }}
        onSlideChange={() => {
          if (swiperRef.current) {
            animateSlideContent(swiperRef.current.activeIndex % heroSliderData.length)
          }
        }}
      >
        {heroSliderData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-start">
              {/* Background Image */}
              <Image
                src={item.image.src || "/placeholder.svg"}
                alt={item.image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Dark Overlay for better text contrast */}
              <div className="absolute inset-0 bg-black opacity-50"></div>

              {/* Text Overlay */}
              <div
                ref={(el) => (slideRefs.current[index] = el)}
                className="relative z-10 text-left text-white px-6 md:px-12 lg:px-24 max-w-4xl"
              >
                {item.arabicText && (
                  <div className="mb-4">
                    <p
                      className="arabic-text text-4xl md:text-5xl font-bold mb-2 text-right"
                      style={{ fontFamily: "Amiri, serif" }}
                    >
                      {item.arabicText}
                    </p>
                    <p className="arabic-sub-text text-lg md:text-xl text-left">{item.arabicSubText}</p>
                  </div>
                )}
                <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{item.title}</h2>
                <p className="mb-8 text-lg md:text-xl leading-relaxed">{item.description}</p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  {item.buttons.map((button, btnIndex) => (
                    <Link
                      key={btnIndex}
                      href={button.link}
                      className={`inline-flex items-center justify-center font-medium px-8 py-4 rounded-md transition-all duration-300 ${
                        button.style === "yellow"
                          ? "bg-[#ffd54f] text-black hover:bg-black hover:text-white"
                          : "bg-white text-black hover:bg-gray-200"
                      }`}
                    >
                      {button.icon === "Play" && <Play className="h-5 w-5 mr-2" />}
                      {button.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero
