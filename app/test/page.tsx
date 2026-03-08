'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function MemoPage() {
  const [posts, setPosts] = useState<any[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) router.push('/login')
      else setUser(data.user)
    })
  }, [])

  useEffect(() => {
    if (user) fetchPosts()
  }, [user])

  async function fetchPosts() {
    const res = await fetch('/api/posts')
    const data = await res.json()
    setPosts(data)
  }

  async function addPost() {
    if (!title.trim() || loading) return
    setLoading(true)
    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    })
    setTitle('')
    setContent('')
    await fetchPosts()
    setLoading(false)
  }

  async function deletePost(id: string) {
    await fetch(`/api/posts/${id}`, { method: 'DELETE' })
    fetchPosts()
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <div className="min-h-screen p-8 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">📝 マイメモ</h1>
        <button
          onClick={handleLogout}
          className="text-sm text-gray-400 hover:text-white underline"
        >
          ログアウト
        </button>
      </div>

      <div className="flex flex-col gap-3 mb-8">
        <input
          className="border border-gray-700 bg-gray-900 p-3 rounded-lg text-white"
          placeholder="タイトル"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className="border border-gray-700 bg-gray-900 p-3 rounded-lg text-white h-24 resize-none"
          placeholder="内容"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button
          onClick={addPost}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white p-3 rounded-lg font-bold transition"
        >
          {loading ? '追加中...' : '追加'}
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {posts.length === 0 && (
          <p className="text-gray-500 text-center">メモがありません</p>
        )}
        {posts.map(post => (
          <div key={post.id} className="border border-gray-700 bg-gray-900 p-4 rounded-lg flex justify-between items-start">
            <div>
              <h2 className="font-bold text-lg">{post.title}</h2>
              <p className="text-gray-400 mt-1">{post.content}</p>
              <p className="text-gray-600 text-xs mt-2">
                {new Date(post.created_at).toLocaleString('ja-JP')}
              </p>
            </div>
            <button
              onClick={() => deletePost(post.id)}
              className="text-red-400 hover:text-red-300 ml-4 text-sm"
            >
              削除
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}