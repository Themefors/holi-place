import Image from "next/image"
import Link from "next/link"
import aboutContent from "@/Json/aboutContent"
import images from "../../../public/images"
import { SpinningText } from "@/components/magicui/spinning-text";

const AboutSection = () => {
  const { about } = aboutContent

  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left Content Column */}
        <div className="lg:w-1/2 space-y-6">
          {/* ABOUT US Label */}
          <div className="flex items-center gap-2 text-sm font-semibold uppercase text-[#1E4D42]">
            <Image src={images.svg.mashjid || "/placeholder.svg"} alt="About Us Icon" width={20} height={20} />
            {about.label}
            <h2 className="text-[15px] font-bold leading-tight text-[#1E4D42]">{about.title}</h2>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#1E4D42]">{about.subtitle}</h2>

          {/* Main Title */}

          {/* Description Paragraph */}
          <p className="text-lg leading-relaxed text-gray-700">{about.description}</p>

          {/* Mission Card */}
          <div className="bg-[#E0F2F1] p-6 rounded-xl flex items-start gap-4 shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 bg-[#FFD54F] rounded-full flex items-center justify-center">
              <Image src={images.svg.missionIcon || "/placeholder.svg"} alt="Mission Icon" width={28} height={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1E4D42] mb-1">{about.mission}</h3>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-[#E0F2F1] p-6 rounded-xl flex items-start gap-4 shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 bg-[#FFD54F] rounded-full flex items-center justify-center">
              <Image src={images.svg.visionIcon || "/placeholder.svg"} alt="Vision Icon" width={28} height={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1E4D42] mb-1">{about.vision}</h3>
            </div>
          </div>

          {/* Button */}
          <Link href={about.button.link} passHref>
            <button className="mt-6 bg-[#FFD54F] text-black font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-yellow-400 transition-colors duration-300">
              {about.button.text}
            </button>
          </Link>
        </div>

        {/* Right Image Column */}
       <div className="flex lg:w-1/2 relative gap-6 items-end lg:items-end">
  <div className="w-full max-w-md lg:max-w-lg group relative">
    <Image
      src={images.image.about_1 || "/placeholder.svg"}
      alt="About Us Image"
      width={600}
      height={400}
      className="rounded-lg shadow-lg object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </div>

  {/* 2nd image with spinning text at the top */}
  <div className="w-full max-w-md lg:max-w-lg group relative">
    <Image
      src={images.image.about_2 || "/placeholder.svg"}
      alt="About Us Image"
      width={600}
      height={400}
      className="rounded-lg shadow-lg object-cover transition-transform duration-500 group-hover:scale-105"
    />

    {/* SpinningText positioned at top center */}
    <div className="absolute -top-42 left-[10%] -translate-x-1/2 z-10 pointer-events-none">
  <div className="relative w-[300px] h-[300px] flex items-center justify-center">
    <SpinningText radius={9} fontSize={1.5}>
      learn more • earn more • grow more •
    </SpinningText>

    <Image
      src={images.svg?.moon || "/placeholder.svg"}
      alt="Moon Icon"
      width={100}
      height={100}
      className="absolute"
    />
  </div>
</div>

  </div>
</div>

      </div>
    </section>
  )
}

export default AboutSection
