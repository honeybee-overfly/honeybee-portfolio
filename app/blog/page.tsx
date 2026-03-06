import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"

export default function BlogPage() {
  const postsDir = path.join(process.cwd(), "app/posts")
  const files = fs.readdirSync(postsDir)

  const posts = files.map((file) => {
    const content = fs.readFileSync(path.join(postsDir, file), "utf-8")
    const { data } = matter(content)
    return {
      slug: file.replace(".md", ""),
      title: data.title,
      date: data.date,
      desc: data.desc,
    }
  })

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center py-20 px-4">
      <div className="w-full max-w-2xl">
        <Link href="/" className="text-yellow-400 hover:underline mb-10 block">← Back</Link>
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-yellow-400 transition"
            >
              <p className="text-xs text-gray-500 mb-1">{post.date}</p>
              <h2 className="text-white font-bold text-lg mb-1">{post.title}</h2>
              <p className="text-gray-400 text-sm">{post.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}