"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CommitteesSection() {
  const committees = [
    {
      name: "GA1: Disarmament and International Security",
      description:
        "Addressing global challenges in the sphere of disarmament, threat to peace and international security.",
    },
    {
      name: "Security Council",
      description: "Maintaining international peace and security, and dealing with threats to global stability.",
    },
    {
      name: "ECOSOC: Economic and Social Council",
      description:
        "Advancing sustainable development, promoting economic and social progress, and fostering international cooperation.",
    },
  ]

  return (
    <section id="committees" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-primary">Our Committees</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {committees.map((committee, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer hover-trigger perspective"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-primary">{committee.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{committee.description}</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/committees"
                  className="block mt-6 bg-primary text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-primary/90 transition-colors w-full text-center"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
