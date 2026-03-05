// export default → このファイルをNext.jsが読み込むために必須
import Image from "next/image"
export default function Home() {
  return (
    // min-h-screen → 画面の高さ100%以上
    // flex flex-col items-center → 縦並び中央揃え
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center py-20 px-4">

      {/* ヒーローセクション */}
      <div className="mb-16 text-center">
        {/* w-24 h-24 → 96px正方形、rounded-full → 完全な円 */}
      <Image
        src="/photo.jpg"
        alt="Honeybee"
        width={96}
        height={96}
        className="rounded-full mx-auto mb-6 object-cover"
/>
        <h1 className="text-6xl font-bold text-white mb-4">
          {/* spanで一部だけ色を変える */}
          Hello, I am <span className="text-yellow-400">Honeybee</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-lg mx-auto">
          Artist & Developer — passionate about art, programming, and travel.
        </p>
      </div>

      {/* スキルセクション */}
      <section className="mb-16 w-full max-w-2xl">
        <h2 className="text-xs font-bold text-yellow-400 tracking-widest uppercase mb-6 text-center">
          Skills
        </h2>
        {/* flex-wrap → 画面が狭くなったら自動で折り返す */}
        <div className="flex flex-wrap gap-3 justify-center">
          {/* ★mapで配列を展開→バッジを自動生成★ */}
          {["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Git & GitHub"].map((skill) => (
            <span key={skill} className="bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm hover:border-yellow-400 hover:text-yellow-400 transition">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* プロジェクトセクション */}
      <section className="mb-16 w-full max-w-2xl">
        <h2 className="text-xs font-bold text-yellow-400 tracking-widest uppercase mb-6 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {/* ★オブジェクトの配列をmapで展開★ */}
          {[
            { title: "Portfolio Website", desc: "Built with Next.js and Tailwind CSS", tag: "Web" },
            { title: "Art Gallery", desc: "Digital drawings and illustrations", tag: "Art" },
          ].map((project) => (
            // group → 親にhoverした時に子のスタイルも変えられる
            <div key={project.title} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-yellow-400 transition group">
              <div className="flex justify-between items-start mb-2">
                {/* group-hover: → 親がhoverされた時に発動 */}
                <h3 className="text-white font-bold text-lg group-hover:text-yellow-400 transition">{project.title}</h3>
                <span className="text-xs bg-yellow-400 text-gray-900 px-2 py-1 rounded-full font-bold">{project.tag}</span>
              </div>
              <p className="text-gray-400 text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="mb-16 w-full max-w-2xl">
        <h2 className="text-xs font-bold text-yellow-400 tracking-widest uppercase mb-6 text-center">
          Gallery
        </h2>
        {/* grid-cols-3 → 3列グリッド */}
        <div className="grid grid-cols-3 gap-4">
          {/* ★数字の配列をmapで6枚のカードに変換★ */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-800 border border-gray-700 rounded-2xl aspect-square flex items-center justify-center hover:border-yellow-400 transition">
              <span className="text-4xl">🎨</span>
            </div>
          ))}
        </div>
      </section>

      {/* GitHubリンクボタン */}
      {/* ★ここに<a を手打ちで追加してね★ */}
      <a
        href="https://github.com/honeybee-overfly"
        target="_blank"
        className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-300 transition hover:scale-105"
      >
        Visit my GitHub →
      </a>

    </main>
  )
}