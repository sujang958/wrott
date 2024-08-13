import { FC } from "react";
import { twMerge } from "tailwind-merge";

const Container: FC<{ children: React.ReactNode, className: string }> = ({ children, className }) => {
  return (
    <section className="flex flex-col items-center">
      <main className={twMerge("max-w-5xl w-full", className)}>
        {children}
      </main>
    </section>
  )
}

export default Container