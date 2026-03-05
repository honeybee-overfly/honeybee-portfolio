// ★interfaceでオブジェクトの型を定義！
// これがTypeScriptの強み！型があると間違いをすぐ発見できる
interface Project {
  title: string
  desc: string
  tag: string
}

export default function Projects() {
  // ★データを変数として管理→追加が簡単！
  const projects: Project[] = [
    { title: "Portfolio Website", desc: "Built with Next.js and Tailwind CSS", tag: "Web" },
    { title: "Art Gallery", desc: "Digital drawings and illustrations", tag: "Art" },
  ]

  return (
    <section className="mb-16 w-full max-w-2xl">
      <h2 className="text-xs font-bold text-yellow-400 tracking-widest uppercase mb-6 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-yellow-400 transition group"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-white font-bold text-lg group-hover:text-yellow-400 transition">
                {project.title}
              </h3>
              <span className="text-xs bg-yellow-400 text-gray-900 px-2 py-1 rounded-full font-bold">
                {project.tag}
              </span>
            </div>
            <p className="text-gray-400 text-sm">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}