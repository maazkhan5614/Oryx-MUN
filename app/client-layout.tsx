"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Homepage from "@/components/homepage"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showInitialContent, setShowInitialContent] = useState(false)
  const [showMainContent, setShowMainContent] = useState(false)

  useEffect(() => {
    const initialFadeTimer = setTimeout(() => {
      setShowInitialContent(true)
    }, 100)

    const mainContentTimer = setTimeout(() => {
      setShowMainContent(true)
    }, 1200)

    return () => {
      clearTimeout(initialFadeTimer)
      clearTimeout(mainContentTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <div
        className={`fixed inset-0 bg-[#4a000f] z-50 transition-opacity duration-1000 ${
          showMainContent ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Homepage show={showInitialContent} />
      </div>

      <div className={`transition-opacity duration-1000 ${showMainContent ? "opacity-100" : "opacity-0"}`}>
        <div className="pt-16 sm:pt-20">
          {" "}
          {/* Adjusted padding-top */}
          {children}
        </div>
      </div>
    </div>
  )
}
