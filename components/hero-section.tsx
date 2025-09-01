"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import ConferenceCountdown from "./conference-countdown"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-[72px]">
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ppPRDrOxMocClYUR1kQzHdxd8I7Jx3.png"
          alt="MUN Delegates"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Oryx International
            <br />
            School MUN
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 font-semibold tracking-wide">DOHA - QATAR</p>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Empowering future leaders through diplomacy and global understanding
          </p>
          <ConferenceCountdown />
        </motion.div>
      </div>
    </section>
  )
}
