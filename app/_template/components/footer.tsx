'use client'

import { Bird } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white border-t border-green-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-green-600 p-2 rounded-lg text-white">
                <Bird size={24} />
              </div>
              <span className="text-xl font-bold text-gray-900">
                AyamAI
              </span>
            </div>

            <p className="text-sm text-gray-600">
              Solusi cerdas untuk peternak ayam modern
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900">
              Menu
            </h4>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="/" className="hover:text-green-600 transition-colors">
                  Beranda
                </a>
              </li>

              <li>
                <a href="/deteksi" className="hover:text-green-600 transition-colors">
                  Deteksi Ayam
                </a>
              </li>

              <li>
                <a href="/informasi" className="hover:text-green-600 transition-colors">
                  Informasi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900">
              Kontak
            </h4>

            <p className="text-sm text-gray-600">
              Email: info@ayamai.com
            </p>

            <p className="text-sm text-gray-600">
              Telepon: +62 xxx-xxxx-xxxx
            </p>
          </div>
        </div>

        <div className="border-t border-green-100 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; 2024 AyamAI. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}