"use client"

import { useEffect, useState } from "react"
import Image from "next/image" // Import Image for custom icon
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules" // Removed FreeMode, kept Autoplay module
import images from "../../../public/images" // Assuming this import path is correct for your project

// Import Swiper styles
import "swiper/css"
import "swiper/css/autoplay" // Import autoplay styles

// Helper function to format 24-hour time to 12-hour format
const formatTo12Hour = (time24) => {
  if (!time24) return ""
  const [hours, minutes] = time24.split(":").map(Number)
  const ampm = hours >= 12 ? "PM" : "AM"
  const hours12 = hours % 12 || 12 // Convert 0 to 12 for 12 AM/PM
  return `${hours12}:${minutes.toString().padStart(2, "0")} ${ampm}`
}

const PrayerCard = ({ name, time, iqamah }) => (
  <div
    className={`group flex flex-col items-center justify-center p-8 rounded-xl shadow-sm border border-gray-200 min-w-[200px] md:min-w-[220px] lg:min-w-[240px] text-center transition-colors duration-300
      bg-white hover:bg-[#e6f2f0] hover:border-[#00664f]`} // Active state on hover
  >
    <Image
      src={images.svg.watch || "/placeholder.svg?height=40&width=40&query=green clock icon"} // Use custom image icon
      alt="Clock Icon"
      width={40}
      height={40}
      className={`mb-4 group-hover:filter group-hover:brightness-75`} // Adjust filter for hover state
    />
    <h3 className="text-2xl font-bold mb-1 text-gray-900">{name}</h3>
    <p className="text-xl text-gray-700 mb-1">{formatTo12Hour(time)}</p>
    <p className="text-base text-gray-500">Iqamah: {formatTo12Hour(iqamah)}</p>
  </div>
)

const PrayerTimes = () => {
  const [prayerData, setPrayerData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchTimes() {
      try {
        const response = await fetch("https://api.aladhan.com/v1/timingsByCity?city=Dhaka&country=Bangladesh&method=2")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        const timings = data.data.timings

        // Map API data to desired display format and add Iqamah times
        // Note: Iqamah times are hardcoded as they are not available from the API
        const formattedPrayers = [
          { name: "Fajr", time: timings.Fajr, iqamah: "05:00" },
          { name: "Dhuhr", time: timings.Dhuhr, iqamah: "13:30" },
          { name: "Asr", time: timings.Asr, iqamah: "17:30" },
          { name: "Maghrib", time: timings.Maghrib, iqamah: "19:15" },
          { name: "Isha", time: timings.Isha, iqamah: "21:00" },
          // Special case for Jummah, assuming it's Dhuhr time on Friday
          { name: "Jummah", time: timings.Dhuhr, iqamah: "13:45" },
        ].filter(
          (p) =>
            p.name === "Maghrib" || p.name === "Isha" || p.name === "Jummah" || p.name === "Fajr" || p.name === "Dhuhr", // Dhuhr corresponds to Zuhr
        )

        // Reorder to match screenshot: Magrib, Isha, Jummah, Fajr, Zuhr
        const orderedPrayers = [
          formattedPrayers.find((p) => p.name === "Maghrib"),
          formattedPrayers.find((p) => p.name === "Isha"),
          formattedPrayers.find((p) => p.name === "Jummah"),
          formattedPrayers.find((p) => p.name === "Fajr"),
          formattedPrayers.find((p) => p.name === "Dhuhr"), // This will be displayed as Zuhr
        ].filter(Boolean) // Remove any undefined if a prayer name isn't found

        setPrayerData(orderedPrayers) // Corrected variable name
      } catch (e) {
        setError("Failed to fetch prayer times. Please try again later.")
        console.error("Error fetching prayer times:", e)
      } finally {
        setLoading(false)
      }
    }
    fetchTimes()
  }, [])

  if (loading) {
    return <div className="text-center py-8">Loading prayer times...</div>
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>
  }

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        {" "}
        {/* Changed to container and lg:px-0 */}
        <Swiper
          slidesPerView={1} // Default to 1 slide per view
          spaceBetween={20}
          loop={true} // Enable infinite loop
          autoplay={{
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false, // Keep autoplaying even after user interaction
          }}
          modules={[Autoplay]} // Only Autoplay module
          className="mySwiper py-4"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5, // Show 5 cards on large screens
              spaceBetween: 30,
            },
          }}
        >
          {prayerData.map((prayer, index) => (
            <SwiperSlide key={index}>
              {" "}
              <PrayerCard {...prayer} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default PrayerTimes
