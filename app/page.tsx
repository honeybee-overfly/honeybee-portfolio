import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Gallery from "./components/Gallery"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center py-20 px-4">
      <Hero />
      <Skills />
      <Projects />
      <Gallery />
      <a href="https://github.com/honeybee-overfly" target="_blank" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-300 transition hover:scale-105">Visit my GitHub →</a>
    </main>
  )
}
