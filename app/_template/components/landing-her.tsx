'use client'

import { Show, SignInButton } from '@clerk/nextjs'
import { Upload, ScanSearch, BarChart3, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Upload,
    title: 'Upload Gambar',
    desc: 'Upload gambar kandang ayam dengan mudah.',
  },
  {
    icon: ScanSearch,
    title: 'Deteksi AI',
    desc: 'YOLOv12 mendeteksi setiap ayam secara otomatis.',
  },
  {
    icon: BarChart3,
    title: 'Hitung Otomatis',
    desc: 'Jumlah ayam dihitung secara cepat dan akurat.',
  },
]

const benefits = [
  {
    title: 'Hemat Waktu',
    desc: 'Perhitungan selesai hanya dalam hitungan detik.',
  },
  {
    title: 'Akurat',
    desc: 'Mengurangi kesalahan perhitungan manual.',
  },
  {
    title: 'Real-time',
    desc: 'Monitoring populasi ayam secara langsung.',
  },
  {
    title: 'Produktivitas',
    desc: 'Membantu pengambilan keputusan yang lebih baik.',
  },
]

export function HomeCompo() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-green-200 blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-green-100 blur-3xl opacity-40" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-4 py-1 text-sm font-medium">
              AI Powered • YOLOv12
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight">
              Sistem Cerdas
              <span className="block text-green-600">
                Penghitung Ayam
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Hitung populasi ayam secara otomatis menggunakan AI dengan
              akurasi tinggi, cepat, dan efisien hanya dari sebuah gambar.
            </p>

            <div className="mt-8 flex gap-4">
              <Show when="signed-in">
                <Link
                  href="/dashboard"
                  className="rounded-full bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700 transition"
                >
                  Dashboard
                </Link>
              </Show>

              <Show when="signed-out">
                <SignInButton />
              </Show>
            </div>

          </div>

          <div className="bg-white border border-green-100 rounded-3xl shadow-xl p-10">
            <div className="text-center">
              <div className="text-7xl">🐔</div>

              <h3 className="mt-5 text-2xl font-semibold">
                AI Chicken Counter
              </h3>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-green-50/40 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Fitur Utama
            </h2>

            <p className="mt-3 text-gray-600">
              Teknologi AI modern untuk peternakan yang lebih efisien.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-3xl border border-gray-100 p-8 hover:-translate-y-2 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                  <Icon className="text-green-600" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Mengapa Menggunakan Sistem Ini?
            </h2>

            <p className="mt-3 text-gray-600">
              Membantu peternak bekerja lebih cepat, akurat, dan efisien.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map(({ title, desc }) => (
              <div
                key={title}
                className="rounded-3xl border border-gray-100 bg-white p-6 flex gap-4 hover:border-green-300 hover:shadow-lg transition"
              >
                <CheckCircle2 className="text-green-600 mt-1" />

                <div>
                  <h3 className="font-semibold text-lg">
                    {title}
                  </h3>

                  <p className="mt-2 text-gray-600">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  )
}