import BuyButton from "./BuyButton"

interface Project {
  title: string
  desc: string
  tag: string
  price: number
}

export default function Projects() {
  const projects: Project[] = [
    { title: "Portfolio Website", desc: "Built with Next.js and Tailwind CSS", tag: "Web", price: 5000 },
    { title: "Art Gallery", desc: "Digital drawings and illustrations", tag: "Art", price: 3000 },
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
            <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
            {/* ★BuyButtonコンポーネントを使う！ */}
            <BuyButton title={project.title} price={project.price} />
          </div>
        ))}
      </div>
    </section>
  )
}