"use client"

import { useRef } from "react"
import Image from "next/image"
import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

// Define team member type for better type safety
interface TeamMember {
  name: string
  title: string
  image: string
  linkedin: string
}

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Spyridon Kouloumprakis",
      title: "Secretary General",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rkdTQHWmjeRkx0s9X1LBv1pdudDh2g.png",
      linkedin: "#",
    },
    {
      name: "Malvika Bindinganavile",
      title: "Secretary General",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4WiE22UmMgxOamFwIL5FpTzyv5rGHB.png",
      linkedin: "#",
    },
    {
      name: "Anvi Joshi",
      title: "Deputy Secretary General",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VGz2ETuRqFREekQRTyWUAi9y6XXJqH.png",
      linkedin: "#",
    },
    {
      name: "Khadijah Rabbani",
      title: "Deputy Secretary General",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CAcdCCrGXaIIv8ucjvImcJEaRYpRM0.png",
      linkedin: "#",
    },
    {
      name: "Nivedita Menon",
      title: "Head of Press",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f2QlLbM69vmZgZxVxCqPCEvhfqtB5N.png",
      linkedin: "#",
    },
        {
      name: "Chelsea Fernandes", // Please provide the name
      title: "Deputy Head of Press", // Please provide the position
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E8hmyAXAKyCWglcEaE9eDedK10Qn5f.png",
      linkedin: "#",
    },
    {
      name: "Anna Kovarova", // Please provide the name
      title: "Deputy Head of Press", // Please provide the position
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pYl9m2BSm5qaNXHPsgULYm1Hkvushw.png",
      linkedin: "#",
    },
    // New team members added here
    {
      name: "Aarna Kalakoti",
      title: "Co-Head of Admin",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8eoYXAVdtfDJGczqNVhDz2njtXXmCb.png",
      linkedin: "#",
    },
    {
      name: "Tanishk Dalal",
      title: "Co-Head of Admin",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WZPc7WbaFpQdmxVvApCu7xZqnvXfky.png",
      linkedin: "#",
    },
    {
      name: "Maaz Khan",
      title: "Head of IT",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H1EXrLRFtT0ZxEjir6FdGq2p0mD53p.png",
      linkedin: "#",
    },
    {
      name: "Sanahas Kodisinghe",
      title: "Co-Head of IT",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zDA2CFAZDPPUYPhn2QEUEhL7MpBWLE.png",
      linkedin: "#",
    },
    // Adding the new team member

  ]

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -250 : 250
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 sm:py-20 bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-white">Meet Our Team</h2>
        <div className="relative">
          <motion.div
            ref={scrollContainerRef}
            className="flex space-x-4 sm:space-x-6 overflow-x-auto pb-8 scroll-smooth custom-horizontal-scrollbar"
            whileTap={{ cursor: "grabbing" }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="flex-none w-60 sm:w-72 transform transition-all duration-300 hover:scale-105 group cursor-grab active:cursor-grabbing"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative rounded-lg overflow-hidden aspect-[4/5] mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={288}
                    height={360}
                    className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">{member.name}</h3>
                    <p className="text-sm sm:text-base text-gray-400">{member.title}</p>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 transition-colors rounded-full p-2 focus:outline-none"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 transition-colors rounded-full p-2 focus:outline-none"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}
