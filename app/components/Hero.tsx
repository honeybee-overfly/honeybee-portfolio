"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaInstagram, FaXTwitter, FaDiscord, FaYoutube, FaSpotify, FaSteam } from "react-icons/fa6"
import { SiFiverr, SiMedium } from "react-icons/si"

export default function Hero() {
  const [bgmOn, setBgmOn] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2
    }
  }, [])

  const toggleBgm = () => {
    if (!audioRef.current) return
    if (bgmOn) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setBgmOn(!bgmOn)
  }

  const snsLinks = [
    { href: "https://github.com/honeybee-overfly", icon: <FaGithub size={18} />, label: "GitHub" },
    { href: "https://www.instagram.com/honeybee.overfly", icon: <FaInstagram size={18} />, label: "Instagram" },
    { href: "https://x.com/_honeybeeOC", icon: <FaXTwitter size={18} />, label: "X" },
    { href: "https://discord.com/users/l.symphony", icon: <FaDiscord size={18} />, label: "Discord" },
    { href: "https://www.youtube.com/@honeybee.overfly", icon: <FaYoutube size={18} />, label: "YouTube" },
    { href: "https://open.spotify.com/user/31cnyjwg4tiev3jfcbuyrnwxsws4", icon: <FaSpotify size={18} />, label: "Spotify" },
    { href: "https://steamcommunity.com/id/honeybee", icon: <FaSteam size={18} />, label: "Steam" },
    { href: "https://www.fiverr.com/sellers/harrison_mars", icon: <SiFiverr size={18} />, label: "Fiverr" },
    { href: "https://medium.com/@honeybee.overfly", icon: <SiMedium size={18} />, label: "Medium" },
  ]

  return (
    <>
      <audio ref={audioRef} src="/bgm.mp3" loop />

      <div className="relative w-full mb-16 rounded-3xl overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex flex-col items-center text-center py-32 px-4">

          {/* プロフィール画像 */}
          <motion.div
            className="relative mx-auto mb-6 w-24 h-24"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-spin-slow blur-sm" />
            <div className="relative rounded-full overflow-hidden w-24 h-24 border-2 border-yellow-400">
              <Image src="/photo.jpg" alt="Honeybee" fill className="object-cover" />
            </div>
          </motion.div>

          {/* タイトル */}
          <motion.h1
            className="text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hello, I am{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]">
              Honeybee
            </span>
          </motion.h1>

          {/* サブタイトル */}
          <motion.p
            className="text-xl text-gray-300 max-w-lg mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Developer & Hobbyist Artist — passionate about cars, programming, and travel.
          </motion.p>

          {/* SNSリンク */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {snsLinks.map((sns, i) => (
              <motion.a
                key={sns.label}
                href={sns.href}
                target="_blank"
                className="flex items-center gap-2 bg-gray-800/80 border border-gray-700 text-white px-4 py-2 rounded-full text-sm hover:border-yellow-400 hover:text-yellow-400 transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {sns.icon}
                {sns.label}
              </motion.a>
            ))}
          </motion.div>

          {/* BGMボタン */}
          <motion.button
            onClick={toggleBgm}
            className="bg-gray-800/80 border border-gray-600 text-white px-6 py-3 rounded-full hover:border-yellow-400 transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {bgmOn ? "🔊 BGM ON" : "🔇 BGM OFF"}
          </motion.button>

        </div>
      </div>
    </>
  )
}