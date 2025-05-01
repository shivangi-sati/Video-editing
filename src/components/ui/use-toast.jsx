import { useState, useCallback } from 'react'

let toastId = 0

export function useToast() {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((message) => {
    const id = ++toastId
    const newToast = { id, message }
    setToasts((prev) => [...prev, newToast])

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, 3000)
  }, [])

  return {
    toasts,
    toast: ({ description }) => addToast(description)
  }
}
