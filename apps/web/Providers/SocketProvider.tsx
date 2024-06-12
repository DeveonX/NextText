"use client"

import React, { useCallback, useContext, useEffect } from "react"
import { createContext } from "react"
import { io, Socket } from "socket.io-client"
import { useOnlineUsers } from "./OnlineUsersProvider"
import { useMessages } from "./MessageProvider"
import { useChatName } from "./ChatNameProvider"

type TypeSocketContext = {
  // eslint-disable-next-line no-unused-vars
  sendMessage: ({name, message, time}: {name: string, message: string, time: string}) => any,
  // eslint-disable-next-line no-unused-vars
  joinRoomHook: (roomName: string) => any
  // eslint-disable-next-line no-unused-vars
  createRoomHook: (roomName: string) => any
}


interface SocketProviderProps {
  children?: React.ReactNode;
}

const SocketContext = createContext<TypeSocketContext | null>(null)

export const SocketProvider = ({ children }: SocketProviderProps)=>{
  const [socket, setSocket] = React.useState<Socket | null>(null)
  const { setOnlineUsers } = useOnlineUsers()
  const { emptyMessages, setMessages } = useMessages()
  const { setChatName } = useChatName()

  const sendMessage = useCallback((data: {message: string, name: string, time: string})=>{
    console.log("Sending message", data)
    if (socket){
      socket.emit("event:message", data)
    }
    else{
      console.error("Socket not connected")
    }
  }, [socket])

  const joinRoomHook = useCallback((roomName: string) => {
    if (socket){
      socket.emit("event:join", roomName)
    }
  }, [socket])

  const createRoomHook = useCallback((roomName: string) => {
    if (socket){
      socket.emit("event:create", roomName)
    }
  }, [socket])

  useEffect(()=>{
    const socket = io("https://next-text-server.vercel.app")
    setSocket(socket)
    socket.on("connect", ()=>{
      console.log("Connected")
    })

    socket.on("event:count", (count: number)=>{
      setOnlineUsers(count)
    })

    socket.on("event:message", (data: {name: string, message: string, time: string})=>{
      console.log("Received message", data)
      setMessages(prev => [...prev, data]); })

    socket.on("event:joined", (room: string)=>{
      console.log("Joined room", room)
      setChatName(room)
      emptyMessages()
    })

    socket.on("event:created", (room: string)=>{
      console.log("Room created", room)
      setChatName(room)
      emptyMessages()
    })

    socket.on("event:error", (error: string)=>{
      alert(error)
    })

    return ()=>{
      socket.disconnect()
    }
  }, [])

  return (
    <SocketContext.Provider value={{sendMessage, joinRoomHook, createRoomHook}}>
      {children}
    </SocketContext.Provider>
  )
}

export const useSocket = () => {
  const state = useContext(SocketContext)
  if (!state){
    throw new Error("Socket context not found")
  }
  return state
}