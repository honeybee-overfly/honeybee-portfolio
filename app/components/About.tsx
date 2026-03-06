export default function About() {
  return (
    <section className="mb-16 w-full max-w-2xl">
      <h2 className="text-xs font-bold text-yellow-400 tracking-widest uppercase mb-6 text-center">
        About
      </h2>
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
        <div className="flex flex-col gap-4 text-gray-300 text-sm leading-relaxed">
          <p>
            Hi! I'm <span className="text-yellow-400 font-bold">Honeybee</span> — a developer based in Japan.
          </p>
          <p>
            I'm currently learning web development and building projects with <span className="text-yellow-400">Next.js</span> and <span className="text-yellow-400">React</span>. Still growing every day, but I love the process of creating things from scratch.
          </p>
          <p>
            Outside of coding, I enjoy music, travel, and exploring new things. Always curious, always learning.
          </p>
        </div>
      </div>
    </section>
  )
}