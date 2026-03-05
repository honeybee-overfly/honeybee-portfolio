export default function Skills() {
  // ★データを配列で管理→追加・削除が簡単！
  const skills = [
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Git & GitHub"
  ]

  return (
    <section className="mb-16 w-full max-w-2xl">
      <h2 className="text-xs font-bold text-yellow-400 tracking-widest uppercase mb-6 text-center">
        Skills
      </h2>
      {/* mapで配列を展開してバッジを自動生成 */}
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm hover:border-yellow-400 hover:text-yellow-400 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}