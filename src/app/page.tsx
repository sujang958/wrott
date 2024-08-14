import Container from "@/components/Container";
import WritingItem from "@/components/WritingItem";
import { Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <p className="text-4xl font-bold">탐색하기</p>

      <section className="mt-8">
        <p className="text-xl font-semibold">인기있는 글</p>
        <div className="flex flex-row items-center justify-start mt-4 gap-x-8">
          <WritingItem />
          <WritingItem />
          <WritingItem />
          <WritingItem />

        </div>
      </section>

    </Container>
  )
}
