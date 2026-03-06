"use client"

import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")

  const handleSubmit = async () => {
    if (!name || !email || !message) return
    setStatus("sending")
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })
    if (res.ok) {
      setStatus("done")
      setName("")
      setEmail("")
      setMessage("")
    } else {
      setStatus("error")
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center py-20 px-4">
      <div className="w-full max-w-lg">
        <Link href="/" className="text-yellow-400 hover:underline mb-10 block">
          ← Back
        </Link>
        <h1 className="text-3xl font-bold text-white mb-2">Contact</h1>
        <p className="text-gray-400 mb-8">Feel free to send me a message anytime 😊</p>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 resize-none"
          />
          <button
            onClick={handleSubmit}
            disabled={status === "sending"}
            className="bg-yellow-400 text-gray-900 font-bold py-3 rounded-xl hover:bg-yellow-300 transition disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : status === "done" ? "✅ Sent!" : "Send Message"}
          </button>
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
          )}
        </div>
      </div>
    </main>
  )
}