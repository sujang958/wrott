import Container from "@/components/Container";
import { Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <p className="text-4xl font-bold">탐색하기</p>

      <section className="mt-8">
        <p className="text-xl font-semibold">인기있는 글</p>
        <div className="flex flex-row items-center justify-start mt-4 gap-x-4">
          <div className="cursor-pointer">
            <Image src="/cover.png" width={1024 * 0.14} height={1401 * 0.14} alt="cover" className="object-contain rounded-lg" draggable={false} />

            <p className="text-sm text-neutral-400 mt-3.5">에로티시즘</p>
            <p className="text-lg font-semibold">롤리타</p>
            <p className="text-sm text-neutral-400 mt-0.5">블라디미르 지음</p>
          </div>
        </div>
      </section>

    </Container>
  )
}
