'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [message, setMessage] = useState('')
  const router = useRouter()

  async function handleAuth() {
    if (isSignUp) {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) setMessage(error.message)
      else setMessage('登録完了！')
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) setMessage(error.message)
      else router.push('/test')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4 w-80">
        <h1 className="text-2xl font-bold text-center">
          {isSignUp ? '新規登録' : 'ログイン'}
        </h1>
        <input
          className="border p-2 rounded text-black"
          placeholder="メールアドレス"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="border p-2 rounded text-black"
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={handleAuth}
        >
          {isSignUp ? '登録' : 'ログイン'}
        </button>
        {message && <p className="text-center text-sm text-red-400">{message}</p>}
        <button
          className="text-sm text-gray-400 underline"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? 'ログインはこちら' : '新規登録はこちら'}
        </button>
      </div>
    </div>
  )
}