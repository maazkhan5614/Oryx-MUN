"use client"

import { motion } from "framer-motion"

const timelineEvents = [
  {
    date: "April 18",
    title: "Conference Begins",
    description: "Opening ceremony and first committee sessions",
  },
  {
    date: "April 19",
    title: "Final Day of Conference",
    description: "Closing ceremony and awards presentation",
  },
]

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 h-full w-px bg-primary/20" />
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="w-1/2 text-right">
              <div className={`space-y-2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <div className="text-primary font-semibold">{event.date}</div>
                <h3 className="text-primary font-bold">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
            <div className="relative z-10">
              <div className="h-4 w-4 rounded-full bg-primary" />
            </div>
            <div className="w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
