import Container from "@/components/layouts/Container"
import { NextPage } from "next"

const MyPage: NextPage = () => {
  return (
    <Container>
      <p className="text-3xl font-semibold">내 서재</p>

      <section className="flex flex-col gap-y-2">
    <div className="flex flex-row items-center"></div>
      </section>
    </Container>
  )
}

export default MyPage
