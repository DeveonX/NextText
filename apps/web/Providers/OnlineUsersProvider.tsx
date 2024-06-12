"use client"

import { createContext, useState, useContext} from "react"
import { ReactNode } from "react"


type OnlineUsersContextType = {
  onlineUsers: number,
  setOnlineUsers: (onlineUsers: number) => void
}

const OnlineUsersContext = createContext<OnlineUsersContextType | undefined>(undefined)

export const OnlineUsersProvider = ({children}: {children: ReactNode})=>{
  const [onlineUsers, setOnlineUsers] = useState(0)

  return (
    <OnlineUsersContext.Provider value={{onlineUsers, setOnlineUsers}}>
      {children}
    </OnlineUsersContext.Provider>
  )
}

export const useOnlineUsers = () => {
  const context = useContext(OnlineUsersContext)
  if (!context) {
    throw new Error("useOnlineUsers must be used within a OnlineUsersProvider")
  }
  return context
}
