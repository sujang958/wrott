import { ComponentProps, FC } from "react"
import { twMerge } from "tailwind-merge"

const Input: FC<ComponentProps<"input">> = (props) => {
  return (
    <input
      type="text"
      {...props}
      className={twMerge("rounded-lg px-3 py-1.5 w-full", props.className)}
    />
  )
}

export default Input

// fuck I shouldve used svelte
