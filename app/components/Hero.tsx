"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"

export default function Hero() {
  const [bgmOn, setBgmOn] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2
      audioRef.current.muted = true
      audioRef.current.play().catch(() => {})
    }
  }, [])

  const toggleBgm = () => {
    if (!audioRef.current) return
    if (bgmOn) {
      audioRef.current.muted = true
    } else {
      audioRef.current.muted = false
    }
    setBgmOn(!bgmOn)
  }

  return (
    <>
      <audio ref={audioRef} src="/bgm.mp3" loop />

      {/* ★ヒーローセクション内にBGMボタン */}
      <div className="relative w-full mb-16 rounded-3xl overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex flex-col items-center text-center py-32 px-4">
          <div className="relative mx-auto mb-6 w-24 h-24">
        {/* ネオングロー枠 */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-spin-slow blur-sm" />
        {/* 画像 */}
          <div className="relative rounded-full overflow-hidden w-24 h-24 border-2 border-yellow-400">
            <Image
              src="/photo.jpg"
              alt="Honeybee"
              fill
              className="object-cover"
            />
          </div>
      </div>
          <h1 className="text-6xl font-bold text-white mb-4">
            Hello, I am{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]">
            Honeybee
          </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-lg mx-auto mb-8">
            Artist & Developer — passionate about art, programming, and travel.
          </p>

          {/* BGMボタンをヒーロー内に配置 */}
          <button
            onClick={toggleBgm}
            className="bg-gray-800/80 border border-gray-600 text-white px-6 py-3 rounded-full hover:border-yellow-400 transition"
          >
            {bgmOn ? "🔊 BGM ON" : "🔇 BGM OFF"}
          </button>
        </div>
      </div>
    </>
  )
}