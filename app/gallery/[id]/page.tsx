import Image from "next/image"
import Link from "next/link"
import { drawings } from "../../data/drawings"
import BuyButton from "../../components/BuyButton"

// ★Next.jsの動的ルーティング！
// /gallery/1 → id=1 の絵を表示
// /gallery/2 → id=2 の絵を表示
export default async function DrawingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const drawing = drawings.find((d) => d.id === Number(id))

  if (!drawing) {
    return <div className="text-white text-center py-20">Drawing not found</div>
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center py-20 px-4">
      
      {/* 戻るボタン */}
      <Link href="/" className="text-yellow-400 hover:underline mb-10 self-start">
        ← Back to Gallery
      </Link>

      <div className="w-full max-w-2xl">
        {/* 画像 */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-8">
          <Image
            src={drawing.src}
            alt={drawing.title}
            fill
            className="object-cover"
          />
        </div>

        {/* 情報 */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{drawing.title}</h1>
            <span className="text-xs bg-yellow-400 text-gray-900 px-2 py-1 rounded-full font-bold">
              {drawing.category}
            </span>
          </div>
          <p className="text-3xl font-bold text-yellow-400">¥{drawing.price.toLocaleString()}</p>
        </div>

        <p className="text-gray-400 mb-8">{drawing.desc}</p>

        {/* 購入ボタン */}
        <BuyButton title={drawing.title} price={drawing.price} />
      </div>

    </main>
  )
}