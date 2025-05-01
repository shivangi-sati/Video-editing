import * as React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = {
  default: "bg-black text-white hover:bg-neutral-800",
  outline: "border border-gray-300 text-black hover:bg-gray-100",
  ghost: "bg-transparent text-black hover:bg-gray-100" 
  
}

export const Button = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        className={cn("px-4 py-2 rounded text-sm", buttonVariants[variant], className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"