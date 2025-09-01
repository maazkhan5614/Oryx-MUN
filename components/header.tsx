"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { MobileMenu } from "./mobile-menu"

export default function Header() {
  const handleRegisterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.open(
      "https://drive.google.com/file/d/188P0HrqpeiVQWtv6vEgMHUk47LJXmk-q/view?usp=sharing",
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QCst3VbUSGRUxTxM3JqY3VdU1XbBMo.png"
                alt="OIS MUN Logo"
                fill
                className="object-contain transform -rotate-90"
              />
            </div>
            <span className="ml-2 text-lg sm:text-xl font-bold text-primary">OIS MUN</span>
          </Link>
          <div className="flex items-center">
            <ul className="hidden md:flex space-x-6">
              <li>
                <Link href="/#about" className="text-gray-600 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/committees" className="text-gray-600 hover:text-primary transition-colors">
                  Committees
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-gray-600 hover:text-primary transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleRegisterClick}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Form
                </a>
              </li>
            </ul>
            <MobileMenu scrollToRegister={handleRegisterClick} />
          </div>
        </nav>
      </div>
    </header>
  )
}
