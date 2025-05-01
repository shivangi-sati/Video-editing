import * as React from "react"

export function Card({ className, children }) {
  return <div className={`rounded-xl border bg-white p-4 shadow ${className}`}>{children}</div>
}

export function CardContent({ children }) {
  return <div className="p-2">{children}</div>
}