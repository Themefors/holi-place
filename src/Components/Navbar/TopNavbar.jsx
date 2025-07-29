"use client"

import { useState, useEffect } from "react" // Added useState and useEffect
import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function TopNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Scroll listener for TopNavbar visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`bg-gray-100 py-2 text-sm text-gray-600 hidden lg:block ${isScrolled ? "hidden" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Contact Info */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <Phone className="h-4 w-4 text-[#ffd54f]" />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail className="h-4 w-4 text-[#ffd54f]" />
            <span>info@example.com</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4 text-[#ffd54f]" />
            <span>123 Street, City, Country</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center space-x-4">
          <Link href="https://facebook.com" target="_blank" className="hover:text-[#ffd54f] transition-colors">
            <Facebook className="h-4 w-4" />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-[#ffd54f] transition-colors">
            <Twitter className="h-4 w-4" />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="hover:text-[#ffd54f] transition-colors">
            <Instagram className="h-4 w-4" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-[#ffd54f] transition-colors">
            <Linkedin className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
