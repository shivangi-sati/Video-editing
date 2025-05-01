import * as React from "react"

export function Progress({ value, max = 100 }) {
  const percentage = Math.min(Math.max(value, 0), max)
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-black h-2 rounded-full"
        style={{ width: `${(percentage / max) * 100}%` }}
      />
    </div>
  )
}
