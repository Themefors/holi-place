"use client"

import { useState } from "react"
import Link from "next/link"
import Swal from "sweetalert2"
import "sweetalert2/dist/sweetalert2.min.css"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import {  MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react"
import images from "../../../public/images"
import Image from "next/image"


export default function SiteFooter() {
  const [email, setEmail] = useState("")

  function onSubscribe(e) {
    e.preventDefault()
    const isValid = !!email && /.+@.+/.test(email)
    if (!isValid) {
      Swal.fire({
        icon: "error",
        title: "ইমেইল সঠিক নয়",
        text: "সঠিক ইমেইল ঠিকানা দিন।",
        confirmButtonColor: "#047857", // emerald-700
        confirmButtonText: "ঠিক আছে",
      })
      return
    }

    // Simulate async submit (optional)
    Swal.fire({
      title: "সাবস্ক্রাইব করা হচ্ছে...",
      timer: 800,
      didOpen: () => {
        Swal.showLoading()
      },
      willClose: () => {},
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "সাবস্ক্রাইব সম্পন্ন!",
        text: "আমাদের নিউজলেটারে যুক্ত হওয়ার জন্য ধন্যবাদ।",
        confirmButtonColor: "#047857",
        confirmButtonText: "চালিয়ে যান",
      })
      setEmail("")
    })
  }

  return (
    <footer className="mt-16 bg-[#ebf5f3] text-emerald-900">
      {/* top divider */}
      <div
        className="h-8 w-full"
        style={{
          background:
            "radial-gradient(16px 16px at 24px 0, rgba(16,185,129,.08) 0 60%, transparent 61%), radial-gradient(16px 16px at calc(100% - 24px) 0, rgba(16,185,129,.08) 0 60%, transparent 61%)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left, top right",
          backgroundSize: "160px 100%",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                  src={images.image.logo || "/placeholder.svg"} // Corrected image path
                  width={150} // Adjusted width based on screenshot
                  height={40} // Adjusted height
                  alt="Tawha Logo"
                  className={`transition-all duration-300 filter-none`} // Always filter-none as background is always white
                />
            </Link>
            <p className="mt-4 max-w-sm text-[15px] leading-7 text-emerald-800/80">
              Quran, Sunnah and character-building through balanced Islamic and modern education.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-800 transition-colors hover:bg-emerald-50"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-800 transition-colors hover:bg-emerald-50"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-800 transition-colors hover:bg-emerald-50"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#"
                aria-label="YouTube"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-800 transition-colors hover:bg-emerald-50"
              >
                <Youtube className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-[15px] text-emerald-800/80">
              <li>
                <Link href="/services" className="transition-colors hover:text-emerald-900">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/teachers" className="transition-colors hover:text-emerald-900">
                  Teachers
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="transition-colors hover:text-emerald-900">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-emerald-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-emerald-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3 text-[15px] text-emerald-800/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-emerald-700" aria-hidden="true" />
                <span>123 Madrasa Road, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                <a href="tel:+8801700000000" className="hover:text-emerald-900">
                  +880 1700-000000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                <a href="mailto:info@example.com" className="hover:text-emerald-900">
                  info@example.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-base font-semibold">Newsletter</h4>
            <p className="mt-3 text-[15px] leading-7 text-emerald-800/80">
              Get updates on classes, events, and community programs.
            </p>
            <form onSubmit={onSubscribe} className="mt-4 flex w-full items-center gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/80 placeholder:text-emerald-900/50"
                aria-label="Email address"
                required
              />
              <Button type="submit" className="bg-emerald-700 hover:bg-emerald-800">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </form>
            <p className="mt-2 text-xs text-emerald-800/60">We respect your privacy. Unsubscribe any time.</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-emerald-200/70 pt-6 text-sm text-emerald-800/80 md:flex-row">
          <p>© {new Date().getFullYear()} Madrasa. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-emerald-900">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-emerald-900">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="hover:text-emerald-900">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
