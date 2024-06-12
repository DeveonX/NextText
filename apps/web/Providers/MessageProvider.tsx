"use client"

import { useState, useContext, createContext } from "react";

type Messages = {
  name: string;
  time: string;
  message: string;
  mine?: boolean
}

type MessageContextType = {
  messages: Messages[];
  setMessages: (value: ((prevState: Messages[]) => Messages[]) | Messages[]) => void;
  emptyMessages: () => void;
}
const MessageContext = createContext<MessageContextType | null>(null);

export const MessageProvider = ({children}: {children: React.ReactNode}) => {
  const [messages, setMessages] = useState([
    {
       name: "System",
       time: "00:00:00 AM",
       message: "Hello, and welcome to the global chat!!\nPrevious message are not stored, new messages will be displayed here",
    }
 ]);

 const emptyMessages = () => {
    setMessages([
      {
        name: "System",
        time: "00:00:00 AM",
        message: "Hello, and welcome to this chat!!\nPrevious message are not stored, new messages will be displayed here",
      }
    ])
 }

  return (
    <MessageContext.Provider value={{messages, setMessages, emptyMessages}}>
      {children}
    </MessageContext.Provider>
  )
}

export const useMessages = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessages must be used within a MessageProvider");
  }
  return context;
}