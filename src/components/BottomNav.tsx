import { Bookmark, House, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const BottomNav: FC = () => {
  return (
    <nav className="fixed right-0 left-0 bottom-4 flex flex-col items-center">
      <div className="flex flex-row items-center justify-evenly bg-white rounded-3xl px-6 py-3 border border-neutral-200 shadow-lg gap-x-2">
        <Link href="/" className="flex items-center flex-col gap-y-1 rounded-xl bg-neutral-800/10 py-2 px-5">
          <House size={16} />
          <p className="text-sm">홈</p>
        </Link>
        <Link href="/search" className=" flex items-center flex-col gap-y-1 py-2 px-5 rounded-xl">
          <Search size={16} />
          <p className="text-sm">검색</p>
        </Link>
        <Link href="/" className=" flex items-center flex-col gap-y-1 py-2 px-5 rounded-xl">
          <Image src="/cat.jpg" alt="pfp" width={32} height={32} className="rounded-lg h-5 w-5" />
          <p className="text-sm">내 서재</p>
        </Link>
      </div>
    </nav>
  )
}

export default BottomNav