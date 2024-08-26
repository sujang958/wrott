import type { Metadata } from "next"
import "./globals.css"
import Link from "next/link"
import Image from "next/image"
import BottomNav from "@/components/layouts/BottomNav"

export const metadata: Metadata = {
  title: "Wrott",
  description: "누구나 쓸 수 있는 곳",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="font-pretendard">
        <main>{children}</main>
        <BottomNav />
      </body>
    </html>
  )
}
