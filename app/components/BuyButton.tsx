"use client"
// ★"use client" → ボタンのクリックなどブラウザ側の動作に必要！

import { useState } from "react"

// ★Propsの型定義
interface BuyButtonProps {
  title: string
  price: number
}

export default function BuyButton({ title, price }: BuyButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleBuy = async () => {
    setLoading(true)

    // ★APIルートに注文情報を送る
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price }),
    })

    const data = await res.json()

    // ★Stripeの決済ページにリダイレクト
    window.location.href = data.url
  }

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition disabled:opacity-50"
    >
      {loading ? "処理中..." : `¥${price.toLocaleString()} で購入`}
    </button>
  )
}