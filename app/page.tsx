import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Gallery from "./components/Gallery"
import About from "./components/About"
import FadeIn from "./components/FadeIn"
import ParticlesBackground from "./components/Particles"
import SpotifyWidget from "./components/SpotifyWidget"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center py-20 px-4 relative">
      <ParticlesBackground />
      <div className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        <FadeIn direction="up" delay={0}>
          <About />
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
          <div className="w-screen max-w-3xl px-4">
            <SpotifyWidget />
          </div>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <Skills />
        </FadeIn>
        <FadeIn direction="up" delay={0.3}>
          <Projects />
        </FadeIn>
        <FadeIn direction="up" delay={0.4}>
          <Gallery />
        </FadeIn>
        <FadeIn direction="fade" delay={0.45}>
          <div className="flex flex-row items-center gap-4 flex-wrap justify-center">
            <Link
              href="/blog"
              className="bg-gray-900 border border-gray-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:border-yellow-400 transition hover:scale-105 whitespace-nowrap"
            >
              📝 Blog →
            </Link>
            <Link
              href="/contact"
              className="bg-gray-900 border border-gray-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:border-yellow-400 transition hover:scale-105 whitespace-nowrap"
            >
              📩 Contact Me →
            </Link>
              <a
                href="https://github.com/honeybee-overfly"
                target="_blank"
                className="bg-gray-900 border border-gray-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:border-yellow-400 transition hover:scale-105 whitespace-nowrap"
              >
                Visit my GitHub →
              </a>
            </div>
          </FadeIn>
        </div>
    </main>
  )
}