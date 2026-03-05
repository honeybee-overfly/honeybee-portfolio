import Image from "next/image"
import Link from "next/link"
import { drawings } from "../data/drawings"

export default function Gallery() {
  return (
    <section className="mb-16 w-full max-w-4xl">
      <h2 className="text-xs font-bold text-yellow-400 tracking-widest uppercase mb-6 text-center">
        Gallery
      </h2>
      {/* grid-cols-3 → 3列グリッド */}
      <div className="grid grid-cols-3 gap-4">
        {/* ★drawingsデータをmapで展開 */}
        {drawings.map((drawing) => (
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