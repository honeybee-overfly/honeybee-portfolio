export default function SpotifyWidget() {
  return (
    <section className="mb-16 w-full max-w-3xl mx-auto">
      <h2 className="text-xs font-bold text-yellow-400 tracking-widest uppercase mb-6 text-center">
        Now Playing
      </h2>
      <iframe
        src="https://open.spotify.com/embed/album/78bpIziExqiI9qztvNFlQu?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-2xl"
      />
    </section>
  )
}