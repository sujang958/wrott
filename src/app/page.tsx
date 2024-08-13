import Container from "@/components/Container";
import { Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <p className="text-4xl font-bold">탐색하기</p>
      <div className="flex flex-row items-center gap-x-3 mt-6">
        <div className="relative w-full">
          <Search size={17} className="stroke-neutral-700 absolute left-2 top-1/2 -translate-y-1/2" /><input type="text" name="" id="" className="w-full bg-neutral-200 rounded-lg border-0 pl-8 pr-3 py-1" placeholder="검색하기" />
        </div>

        <Image src="/cat.jpg" alt="pfp" width={64} height={64} className="rounded-full h-8 w-8" />
      </div>

    </Container>
  )
}
