"use client"
import { useState } from "react"
import { drawings } from "../data/drawings"

export default function AdminPage() {
  const [prices, setPrices] = useState<Record<string, number>>(
    Object.fromEntries(drawings.map((d) => [d.id, d.price]))
  )
  const [saved, setSaved] = useState<Record<string, boolean>>({})
  const [loading, setLoading] = useState<Record<string, boolean>>({})

  const handleSave = async (id: string) => {
    setLoading((prev) => ({ ...prev, [id]: true }))
    await fetch("/api/update-price", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, price: prices[id] }),
    })
    setLoading((prev) => ({ ...prev, [id]: false }))
    setSaved((prev) => ({ ...prev, [id]: true }))
    setTimeout(() => setSaved((prev) => ({ ...prev, [id]: false })), 2000)
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-2xl font-bold text-yellow-400 mb-2">🛠 Admin Panel</h1>
      <p className="text-gray-400 text-sm mb-8">価格を変更して「保存」を押すと drawings.ts が更新されます</p>

      <div className="grid grid-cols-1 gap-4 max-w-xl">
        {drawings.map((drawing) => (
          <div key={drawing.id} className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex items-center gap-4">
            <img src={drawing.src} alt={drawing.title} className="w-16 h-16 object-cover rounded-lg" />
            <div className="flex-1">
              <p className="font-bold text-white mb-1">{drawing.title}</p>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">$</span>
                <input
                  type="number"
                  value={prices[drawing.id]}
                  onChange={(e) =>
                    setPrices((prev) => ({ ...prev, [drawing.id]: Number(e.target.value) }))
                  }
                  className="bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-1 w-28 text-sm focus:outline-none focus:border-yellow-400"
                />
              </div>
            </div>
            <button
              onClick={() => handleSave(drawing.id)}
              disabled={loading[drawing.id]}
              className="bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-lg text-sm hover:bg-yellow-300 transition disabled:opacity-50"
            >
              {loading[drawing.id] ? "..." : saved[drawing.id] ? "✅ 保存!" : "保存"}
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}