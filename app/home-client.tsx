"use client"

import dynamic from "next/dynamic"
import { ErrorBoundary } from "react-error-boundary"
import ClientLayout from "./client-layout"
import Header from "@/components/header"
import Footer from "@/components/footer"

const HeroSection = dynamic(() => import("@/components/hero-section"), { ssr: false })
const AboutSection = dynamic(() => import("@/components/about-section"), { ssr: false })
const CommitteesSection = dynamic(() => import("@/components/committees-section"), { ssr: false })
const HandbookSection = dynamic(() => import("@/components/handbook-section"), { ssr: false })
const TimelineSection = dynamic(() => import("@/components/timeline-section"), { ssr: false })
const TeamSection = dynamic(() => import("@/components/team-section"), { ssr: false })
const RegisterSection = dynamic(() => import("@/components/register-section"), { ssr: false })

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export default function HomeClient() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ClientLayout>
        <div>
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <CommitteesSection />
            <HandbookSection />
            <TimelineSection />
            <TeamSection />
            <RegisterSection />
          </main>
          <Footer />
        </div>
      </ClientLayout>
    </ErrorBoundary>
  )
}
