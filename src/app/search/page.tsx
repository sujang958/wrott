import Container from "@/components/layouts/Container"
import Input from "@/components/ui/Input"
import { Search } from "lucide-react"
import { NextPage } from "next"

const SearchPage: NextPage = () => {
  return (
    <Container>
      <p className="text-3xl font-semibold">검색하기</p>
      <div className="relative mt-2">
        {/* TODO: make this a button */}
        <Search className="absolute top-1/2 right-2 translate-y-1"size={16} />
        <Input
          placeholder="검색어 입력"
          className="mt-6 text-sm border-0 bg-[#f0f0f0]"
        />
      </div>
    </Container>
  )
}

export default SearchPage
