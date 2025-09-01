"use client"

import { useState, useEffect } from "react"

export default function ConferenceCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const conferenceDate = new Date("2025-04-18T00:00:00")

    const timer = setInterval(() => {
      const now = new Date()
      const difference = conferenceDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-white max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-center">Conference Starts In</h3>
      <div className="grid grid-cols-4 gap-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="text-3xl font-bold">{value}</div>
            <div className="text-sm uppercase tracking-wider">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
