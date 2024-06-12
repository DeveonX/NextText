"use client"
import { ReactNode } from "react"
import { useState, createContext, useContext } from "react"

type ChatNameContextType = {
  chatName: string,
  setChatName: (name: string) => void
}

const ChatNameContext = createContext<ChatNameContextType | undefined>(undefined)

export const ChatNameProvider = ({children}: {children: ReactNode}) => {
  const [chatName, setChatName] = useState("global")
  return (
    <ChatNameContext.Provider value={{chatName, setChatName}}>
      {children}
    </ChatNameContext.Provider>
  )
}

export const useChatName = () => {
  const context = useContext(ChatNameContext);
  if (!context){
    throw new Error("useChatName must be used within a ChatNameProvider")
  }
  return context;
}