import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const BottomNav: FC = () => {
  return (
    <nav className="flex flex-col items-center fixed bottom-4 right-0 left-0">
      <div className="flex flex-row items-center gap-x-4 rounded-lg bg-neutral-50 px-2 py-1">
        <Link href="/introduction" className="group relative overflow-visible">
          <p className="absolute -top-6 -left-4 w-max text-xs z-10 bg-white rounded px-1 py-0.5 shadow-lg translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 duration-200 transition">
            Wrott 소개
          </p>
          <Image src="/favicon.png" alt="Logo" width={32} height={32} />
        </Link>
        <div className="border-l border-neutral-200">&nbsp;</div>
        <Link
          href="/"
          className="flex flex-row justify-center items-center py-2 px-6 w-24 rounded-lg bg-neutral-200/80"
        >
          <p className="text-xs font-medium">홈</p>
        </Link>
        <div className="border-l border-neutral-200">&nbsp;</div>
        <Link
          href="/"
          className="flex flex-row justify-center items-center py-2 px-6 w-24 rounded-lg"
        >
          <p className="text-xs font-medium">검색</p>
        </Link>
        <div className="border-l border-neutral-200">&nbsp;</div>
        <Link
          href="/"
          className="flex flex-row justify-center items-center py-2 px-6 w-24 rounded-lg"
        >
          <p className="text-xs font-medium">내 서재</p>
        </Link>
      </div>
    </nav>
  )
}

export default BottomNav
