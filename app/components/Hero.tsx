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

      <button
        onClick={toggleBgm}
        className="fixed bottom-6 right-6 z-50 bg-gray-900/90 border border-gray-600 text-white px-5 py-3 rounded-full hover:border-yellow-400 transition shadow-lg"
      >
        {bgmOn ? "🔊 BGM ON" : "🔇 BGM OFF"}
      </button>

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
          <Image
            src="/photo.jpg"
            alt="Honeybee"
            width={96}
            height={96}
            className="rounded-full mx-auto mb-6 object-cover border-4 border-yellow-400"
          />
          <h1 className="text-6xl font-bold text-white mb-4">
            Hello, I am <span className="text-yellow-400">Honeybee</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-lg mx-auto">
            Artist & Developer — passionate about art, programming, and travel.
          </p>
        </div>
      </div>
    </>
  )
}