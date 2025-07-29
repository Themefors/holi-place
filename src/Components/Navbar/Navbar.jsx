"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, LayoutGrid } from "lucide-react"
import images from "../../../public/images"

// Dynamic navigation links
const leftNavLinks = [
  { name: "Home", href: "/", hasDropdown: true },
  { name: "About Us", href: "/about" },
  { name: "Service", href: "/service", hasDropdown: true },
]

const rightNavLinks = [
  { name: "Courses", href: "/courses", hasDropdown: true },
  { name: "Pages", href: "/pages", hasDropdown: true },
  { name: "Contact Us", href: "/contact" },
]

const allMobileLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Service", href: "/service" },
  { name: "Courses", href: "/courses" },
  { name: "Pages", href: "/pages" },
  { name: "Contact Us", href: "/contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Scroll listener for navbar background change
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

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`transition-all duration-300 ease-in-out w-full z-50 bg-white ${
          isScrolled
            ? "fixed shadow-md py-4" // Fixed, white background, shadow, reduced padding
            : "relative py-8" // Relative, white background, more padding for initial state
        }`}
      >
        <div className="container mx-auto px-5 lg:px-0">
          <div className="flex justify-between h-16">
            {/* Left Side - Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {leftNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center text-lg font-medium transition-colors duration-300 hover:text-[#ffd54f] text-gray-900`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
              ))}
            </div>

            {/* Center - Logo */}
            <div className="flex-1 flex justify-center items-center lg:flex-none lg:mx-8">
              <Link href="/" className="flex items-center">
                <Image
                  src={images.image.logo} // Corrected image path
                  width={150} // Adjusted width based on screenshot
                  height={40} // Adjusted height
                  alt="Tawha Logo"
                  className={`transition-all duration-300 filter-none`} // Always filter-none as background is always white
                />
              </Link>
            </div>

            {/* Right Side - Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {rightNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center text-lg font-medium transition-colors duration-300 hover:text-[#ffd54f] text-gray-900`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
              ))}
              <Link
                href="/donate" // Changed to donate
                className="bg-[#ffd54f] text-lg text-black font-medium px-6 py-3 rounded-md hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Donate Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-md transition-colors duration-300 text-gray-900 hover:bg-gray-100`}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-[9999] lg:hidden transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeMobileMenu}></div>

        {/* Drawer */}
        <div
          className={`fixed right-0 top-0 h-full w-[80%] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-md text-gray-900 hover:bg-gray-100 transition-colors duration-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6">
              <div className="space-y-4">
                {allMobileLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block py-3 text-lg font-medium text-gray-900 hover:text-[#ffd54f] transition-colors duration-300 border-b border-gray-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Admission Button */}
            <div className="p-6">
              <Link
                href="/donate"
                onClick={closeMobileMenu}
                className="block w-full text-center bg-[#ffd54f] text-black font-medium px-4 py-3 rounded-md hover:bg-[#ffcc02] transition-colors duration-300"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
