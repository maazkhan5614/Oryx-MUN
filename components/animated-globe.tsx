"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Dynamically import the Globe component with no SSR
const Globe = dynamic(() => import("./globe-component"), { ssr: false })

export default function AnimatedGlobe() {
  return (
    <div className="absolute inset-0 opacity-20">
      <Suspense fallback={<div>Loading...</div>}>
        <Globe />
      </Suspense>
    </div>
  )
}
