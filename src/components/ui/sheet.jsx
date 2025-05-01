import * as React from "react"

export function Sheet({ children }) {
  return <div>{children}</div>
}

export function SheetTrigger({ children, onClick }) {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-gray-200 rounded">
      {children}
    </button>
  )
}

export function SheetContent({ isOpen, onClose, children }) {
  if (!isOpen) return null
  return (
    <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg z-50 p-4">
      <button onClick={onClose} className="mb-4">Close</button>
      {children}
    </div>
  )
}
