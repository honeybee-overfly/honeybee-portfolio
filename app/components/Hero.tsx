import Image from "next/image"

// ★コンポーネント = 部品！exportで外から使えるようにする
export default function Hero() {
  return (
    <div className="mb-16 text-center">
      <Image
        src="/photo.jpg"
        alt="Honeybee"
        width={96}
        height={96}
        className="rounded-full mx-auto mb-6 object-cover"
      />
      <h1 className="text-6xl font-bold text-white mb-4">
        Hello, I am <span className="text-yellow-400">Honeybee</span>
      </h1>
      <p className="text-xl text-gray-400 max-w-lg mx-auto">
        Artist & Developer — passionate about art, programming, and travel.
      </p>
    </div>
  )
}