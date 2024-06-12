"use client"
import { createContext, useState, useContext} from "react"
import { ReactNode } from "react"

type NameProviderProps = {
  children: ReactNode
}

type NameContextType = {
  name: string
  setName: (name: string) => void
}

const NameContext = createContext<NameContextType | undefined>(undefined)

export const NameProvider = ({children}: NameProviderProps) => {
  const [name, setName] = useState("")

  return (
    <NameContext.Provider value={{name, setName}}>
      {children}
    </NameContext.Provider>
  )
}

export const useName = () => {
  const context = useContext(NameContext)
  if (!context) {
    throw new Error("useName must be used within a NameProvider")
  }
  return context
}

