import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const filePath = path.join(process.cwd(), "app/posts", `${slug}.md`)
  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center py-20 px-4">
      <div className="w-full max-w-2xl">
        <Link href="/blog" className="text-yellow-400 hover:underline mb-10 block">← Back to Blog</Link>
        <p className="text-xs text-gray-500 mb-2">{data.date}</p>
        <h1 className="text-3xl font-bold mb-8">{data.title}</h1>
        <div className="prose prose-invert max-w-none">
          <MDXRemote source={content} />
        </div>
      </div>
    </main>
  )
}