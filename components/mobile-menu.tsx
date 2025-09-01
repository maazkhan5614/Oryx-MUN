"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

interface MobileMenuProps {
  scrollToRegister: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export function MobileMenu({ scrollToRegister }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-primary transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-16 sm:top-20 bg-white border-b shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 hover:text-primary transition-colors block"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/committees"
                  className="text-gray-600 hover:text-primary transition-colors block"
                  onClick={closeMenu}
                >
                  Committees
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="text-gray-600 hover:text-primary transition-colors block"
                  onClick={closeMenu}
                >
                  Schedule
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors block"
                  onClick={(e) => {
                    closeMenu()
                    scrollToRegister(e)
                  }}
                >
                  Register
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
