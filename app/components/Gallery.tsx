"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { drawings } from "../data/drawings"

export default function Gallery() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", "Subaru", "Ferrari"]

  const filtered = filter === "All"
    ? drawings
    : drawings.filter((d) => d.category === filter)

  return (
    <section className="mb-16 w-full max-w-4xl">
      <h2 className="text-xs font-bold text-yellow-400 tracking-widest uppercase mb-6 text-center">
        Gallery
      </h2>

      {/* カテゴリフィルター */}
      <div className="flex gap-3 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition ${
              filter === cat
                ? "bg-yellow-400 text-gray-900"
                : "bg-gray-800 border border-gray-700 text-gray-300 hover:border-yellow-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 画像グリッド */}
      <div className="grid grid-cols-3 gap-4">
        {filtered.map((drawing) => (
          <Link href={`/gallery/${drawing.id}`} key={drawing.id}>
            <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-yellow-400 transition group">
              <div className="relative aspect-square">
                <Image
                  src={drawing.src}
                  alt={drawing.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-3">
                <p className="text-white text-sm font-bold truncate">{drawing.title}</p>
                <p className="text-yellow-400 text-sm">¥{drawing.price.toLocaleString()}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}