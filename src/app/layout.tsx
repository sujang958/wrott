import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Wrott",
  description: "기록할 수 있는 곳",
}

// generateMetadata to apply i18n

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-pretendard">{children}</body>
    </html>
  )
}
