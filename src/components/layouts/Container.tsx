import { FC, PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

const Container: FC<PropsWithChildren & { className?: string }> = ({
  children,
  className,
}) => {
  return (
    <section className="flex flex-col items-center w-full">
      <div
        className={twMerge("max-w-xl w-full flex flex-col px-16 py-12", className)}
      >
        {children}
      </div>
    </section>
  )
}

export default Container
