export default function Gallery() {
  return (
    <section className="mb-16 w-full max-w-2xl">
      <h2 className="text-xs font-bold text-yellow-400 tracking-widest uppercase mb-6 text-center">
        Gallery
      </h2>
      {/* grid-cols-3 → 3列グリッド */}
      <div className="grid grid-cols-3 gap-4">
        {/* ★数字の配列をmapで6枚のカードに変換 */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-gray-800 border border-gray-700 rounded-2xl aspect-square flex items-center justify-center hover:border-yellow-400 transition"
          >
            <span className="text-4xl">🎨</span>
          </div>
        ))}
      </div>
    </section>
  )
}