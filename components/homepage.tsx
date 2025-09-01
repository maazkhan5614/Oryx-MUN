"use client"

import { motion } from "framer-motion"

export default function Homepage({ show }: { show: boolean }) {
  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <motion.div
        className="container mx-auto px-4 text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Welcome to <span className="text-white">Oryx International School MUN</span>
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-semibold tracking-wide">DOHA - QATAR</p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Empowering future leaders through diplomacy and global understanding
        </p>
      </motion.div>
    </section>
  )
}
