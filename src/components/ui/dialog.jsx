import * as React from "react"


export function Dialog({ isOpen, onClose, children }) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md relative">
        <button onClick={onClose} className="absolute top-2 right-2">✕</button>
        {children}
      </div>
    </div>
  )
}