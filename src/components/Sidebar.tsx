import { Bookmark, House, Library, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const Sidebar: FC = () => {
  return (
    <aside className="bg-white border-r border-neutral-200 flex flex-col gap-y-2.5 p-4 w-full h-screen">
      <div className="flex flex-row items-center gap-x-2 px-1">
        <Image
          src="/logo.png"
          width={128}
          height={128}
          className="size-6"
          alt="logo"
        />
        <p className="text-lg font-semibold -mb-0.5">Wrott</p>
      </div>

      <div className="py-1.5"></div>

      <Link
        href="/"
        className="rounded-lg bg-neutral-300/40 flex flex-row items-center gap-x-3 px-3 py-1.5"
      >
        <House size={16} />
        <p className="text-base">홈</p>
      </Link>
      <Link
        href="/"
        className="rounded-lg flex flex-row items-center gap-x-3 px-3 py-1.5"
      >
        <Search size={16} />
        <p className="text-base">검색</p>
      </Link>
      <Link
        href="/"
        className="rounded-lg flex flex-row items-center gap-x-3 px-3 py-1.5"
      >
        <Library size={16} />
        <p className="text-base">내 서재</p>
      </Link>

      {/* <Link href="/" className="mt-auto rounded-lg flex flex-row items-center gap-x-3 px-3 py-1.5">
        <Image src="/cat.jpg" alt="pfp" width={24} height={24} className="rounded-lg size-6" />
        <p className="text-base font-medium">sujang958</p>
      </Link> */}
    </aside>
  )
}

export default Sidebar
