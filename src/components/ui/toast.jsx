import * as React from "react"

export function ToastContainer({ toasts }) {
  if (!toasts || toasts.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 space-y-2 z-50">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-black text-white px-4 py-2 rounded shadow"
        >
          {toast.message}
        </div>
      ))}
    </div>
  )
}

