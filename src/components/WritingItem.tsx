import { Heart } from "lucide-react"
import Image from "next/image"
import { FC } from "react"

const WritingItem: FC = () => {
  return (
    <div className="cursor-pointer">
      <Image
        src="/cover.png"
        width={1024 * 0.14}
        height={1401 * 0.14}
        alt="cover"
        className="object-contain rounded-lg"
        draggable={false}
      />

      <div className="flex flex-row items-center justify-between mt-3">
        <p className="text-sm text-neutral-400">에로티시즘</p>
        <div className="flex flex-row items-center gap-x-0.5">
          <Heart className="fill-red-900 stroke-0 size-3.5" />
          <p className="text-xs text-red-900 font-semibold">19</p>
        </div>
      </div>
      <p className="text-lg font-semibold">롤리타</p>
      <p className="text-sm text-neutral-400 mt-0.5">블라디미르 지음</p>
    </div>
  )
}

export default WritingItem
