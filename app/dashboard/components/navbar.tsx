'use client'

import Link from 'next/link'
import { Bird } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-green-100 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white shadow-lg shadow-green-200">
            <Bird size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-900">
              AyamAI
            </h1>
            <p className="text-xs text-gray-500 -mt-1">
              Smart Chicken Counter
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home" className="text-gray-600 hover:text-green-600 transition">
            Beranda
          </a>

          <a href="#fitur" className="text-gray-600 hover:text-green-600 transition">
            Fitur
          </a>

          <a href="#manfaat" className="text-gray-600 hover:text-green-600 transition">
            Manfaat
          </a>
        </div>

        {/* Action */}
        <div>
            <Link
              href="/dashboard"
              className="rounded-full bg-green-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-green-700"
            >
              Masuk
            </Link>
        </div>
      </div>
    </nav>
  )
}