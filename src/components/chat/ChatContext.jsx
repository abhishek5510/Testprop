import { createContext, useContext, useMemo, useState } from 'react'

const ChatContext = createContext(null)

export function ChatProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeProperty, setActiveProperty] = useState(null)
  const [toast, setToast] = useState('')

  const openWithProperty = (property) => {
    setActiveProperty(property)
    setIsOpen(true)
  }

  const showToast = (message) => {
    setToast(message)
    window.setTimeout(() => setToast(''), 2500)
  }

  const value = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      activeProperty,
      openWithProperty,
      toast,
      showToast,
    }),
    [isOpen, activeProperty, toast],
  )

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

export function useChat() {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error('useChat must be used within ChatProvider')
  }
  return context
}
