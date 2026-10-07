import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type LikesContextValue = { likes: number; addLike: () => void }

const LikesContext = createContext<LikesContextValue | null>(null)

export function LikesProvider({ children }: { children: ReactNode }) {
  const [likes, setLikes] = useState(0)
  const addLike = () => setLikes((prev) => prev + 1)

  return (
    <LikesContext.Provider value={{ likes, addLike }}>
      {children}
    </LikesContext.Provider>
  )
}

export function useLikes() {
  const context = useContext(LikesContext)
  if (!context) {
    throw new Error('useLikes must be used inside a LikesProvider')
  }
  return context
}