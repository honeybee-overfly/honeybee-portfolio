import Link from "next/link"

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center py-20 px-4">
      <div className="text-center">
        <div className="w-24 h-24 rounded-full bg-yellow-400 mx-auto mb-8 flex items-center justify-center text-5xl">
          ✅
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Purchase Complete!
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          Thank you for your purchase! I will send you the artwork soon.
        </p>
        <Link
          href="/"
          className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-300 transition"
        >
          Back to Gallery
        </Link>
      </div>
    </main>
  )
}