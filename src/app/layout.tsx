"use client"

import type { Metadata } from "next"
import "./globals.css"
import Sidebar from "@/components/Sidebar"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"

// export const metadata: Metadata = {
//   title: "Wrott",
//   description: "기록할 수 있는 곳",
// }

// generateMetadata to apply i18n

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-pretendard">
        <PanelGroup direction="horizontal">
          <Panel
            className="p-0 h-screen"
            collapsedSize={10}
            minSize={20}
            maxSize={30}
            collapsible
            defaultSize={25}
          >
            <Sidebar />
          </Panel>
          <PanelResizeHandle className="p-1 hover:bg-neutral-200" />
          <Panel className="w-full" defaultSize={75}>
            <main className="w-full h-full">{children}</main>
          </Panel>
        </PanelGroup>
      </body>
    </html>
  )
}
