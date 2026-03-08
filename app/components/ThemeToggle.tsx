"use client"

import { useState, useEffect } from "react"

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.remove("light")
    } else {
      document.documentElement.classList.add("light")
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 z-50 bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-full text-sm font-bold hover:border-yellow-400 transition"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  )
}