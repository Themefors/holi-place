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
import "swiper/css/effect-fade" // Import fade effect styles

// import required modules
import { Autoplay, EffectFade } from "swiper/modules" // Import EffectFade module

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
      <div className="fixed left-20 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
        <Link href="https://linkedin.com" target="_blank" className="text-black hover:text-[#ffd54f] transition-colors">
          <Linkedin className="h-6 w-6" />
        </Link>
        <Link href="https://twitter.com" target="_blank" className="text-black hover:text-[#ffd54f] transition-colors">
          <Twitter className="h-6 w-6" />
        </Link>
        <Link href="https://facebook.com" target="_blank" className="text-black hover:text-[#ffd54f] transition-colors">
          <Facebook className="h-6 w-6" />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          className="text-black hover:text-[#ffd54f] transition-colors"
        >
          <Instagram className="h-6 w-6" />
        </Link>
      </div>

      {/* Vertical Dots/Indicators */}
      <div className="fixed right-20 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center space-y-2">
               <div className="w-px h-24 bg-black opacity-50"></div> {/* Vertical line */}
        {heroSliderData.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              swiperRef.current && swiperRef.current.activeIndex % heroSliderData.length === idx
                ? "bg-[#ffd54f] w-3 h-3" // Active dot
                : "bg-black opacity-50" // Inactive dot
            }`}
          ></div>
        ))}
        <div className="w-px h-24 bg-black opacity-50"></div> {/* Vertical line */}
      </div>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        effect="fade" // Apply fade effect
        fadeEffect={{ crossFade: true }} // Enable crossFade for smoother transition
        modules={[Autoplay, EffectFade]} // Include EffectFade module
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
            <div className="container mx-auto rounded-2xl relative w-full h-full flex items-center justify-start">
              {/* Background Image */}
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                className="rounded-2xl object-cover"
                priority={index === 0}
              />
              {/* Dark Overlay for better text contrast */}
              <div className="rounded-2xl absolute inset-0 bg-black opacity-50"></div>

              {/* Text Overlay - Wrapped in a container for max-width and centering */}
              <div className="relative z-10 w-full mx-auto px-6 md:px-12 lg:px-24">
                <div
                  ref={(el) => (slideRefs.current[index] = el)}
                  className="text-left text-white w-full lg:w-[50%] " // Content aligned left
                >
                  {item.arabicText && (
                    <div className="mb-4 ">
                      <p
                        className="arabic-text text-4xl md:text-5xl font-bold mb-2 text-right"
                        style={{ fontFamily: "Amiri, serif" }}
                      >
                        {item.arabicText}
                      </p>
                      <p className="arabic-sub-text text-lg md:text-xl">{item.arabicSubText}</p>
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero
