import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

async function getUser() {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll() {},
      },
    }
  )
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export async function GET() {
  const user = await getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const posts = await prisma.posts.findMany({
    where: { user_id: user.id },
    orderBy: { created_at: 'desc' }
  })

  const serialized = posts.map(post => ({
    ...post,
    id: post.id.toString()
  }))

  return NextResponse.json(serialized)
}

export async function POST(request: Request) {
  const user = await getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { title, content } = await request.json()

  const post = await prisma.posts.create({
    data: { title, content, user_id: user.id }
  })

  return NextResponse.json({ ...post, id: post.id.toString() })
}