import Container from "@/components/layouts/Container"

export default function Home() {
  return (
    <Container>
      <p className="text-3xl font-semibold">탐색하기</p>
      <p className="mt-8 text-base font-medium">인기있는 글</p>
      <p className="mt-8 text-base font-medium">분류별 글</p>
      <p className="mt-8 text-base font-medium">새로운 글</p>
    </Container>
  )
}
