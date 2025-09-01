"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { User, Award, FileText, Coffee } from "lucide-react"

interface ScheduleItem {
  time: string
  event: string
  type: "registration" | "ceremony" | "session" | "break" | "awards"
}

const fridaySchedule: ScheduleItem[] = [
  { time: "8:30-9:00", event: "Arrival and Registration", type: "registration" },
  { time: "9:00-11:00", event: "Committee Session 1", type: "session" },
  { time: "11:00-12:30", event: "Lunch and Prayer", type: "break" },
  { time: "12:30-15:00", event: "Committee Session 2", type: "session" },
  { time: "15:00-15:30", event: "Break", type: "break" },
  { time: "15:45-17:00", event: "Opening Ceremony", type: "ceremony" },
  { time: "17:00-19:00", event: "Committee Session 3", type: "session" },
]

const saturdaySchedule: ScheduleItem[] = [
  { time: "9:00-9:30", event: "Arrival and sign in", type: "registration" },
  { time: "9:30-12:00", event: "Committee Session 4", type: "session" },
  { time: "12:00-13:30", event: "Lunch", type: "break" },
  { time: "13:30-17:00", event: "Committee Session 5", type: "session" },
  { time: "17:00-18:00", event: "Closing Ceremony + Awards", type: "awards" },
]

const getIcon = (type: ScheduleItem["type"]) => {
  switch (type) {
    case "registration":
      return <User className="w-6 h-6" />
    case "ceremony":
    case "awards":
      return <Award className="w-6 h-6" />
    case "session":
      return <FileText className="w-6 h-6" />
    case "break":
      return <Coffee className="w-6 h-6" />
    default:
      return <User className="w-6 h-6" />
  }
}

function ScheduleTimeline({ day, schedule }: { day: string; schedule: ScheduleItem[] }) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-primary">{day}</h2>
      <div className="relative">
        <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gray-200"></div>
        {schedule.map((item, index) => (
          <motion.div
            key={index}
            className="relative mb-8 ml-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="absolute -left-16 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
              {getIcon(item.type)}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-sm font-semibold text-primary mb-2">{item.time}</p>
              <p className="text-gray-700 text-lg">{item.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function SchedulePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Conference Schedule</h1>
            <ScheduleTimeline day="Friday, April 18" schedule={fridaySchedule} />
            <ScheduleTimeline day="Saturday, April 19" schedule={saturdaySchedule} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
