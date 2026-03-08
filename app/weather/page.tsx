'use client'

import { useState, useEffect } from 'react'

export default function WeatherApp() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=35.68&longitude=139.69&current=temperature_2m,weathercode')
      .then(res => res.json())
      .then(json => {
        setData(json)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError('データの取得に失敗しました。再度お試しください。')
        setLoading(false)
      })
  }, [])

  if (loading) return <p>読み込み中...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-2xl p-8 text-center shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-4">🗼 東京の天気</h1>
        <p className="text-6xl font-bold text-blue-400">
          {data.current.temperature_2m}°C
        </p>
      </div>
    </div>
  )
}