import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(req: NextRequest) {
  const { id, price } = await req.json()

  const filePath = path.join(process.cwd(), "app/data/drawings.ts")
  let content = fs.readFileSync(filePath, "utf-8")

  // id: 1 (数字) に対応した正規表現
  const regex = new RegExp(
    `(id:\\s*${id}[^}]*?price:\\s*)([0-9]+)`,
    "s"
  )
  content = content.replace(regex, `$1${price}`)

  fs.writeFileSync(filePath, content, "utf-8")

  return NextResponse.json({ success: true })
}