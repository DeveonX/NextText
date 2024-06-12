"use client"
import { useState } from "react"
import { useName } from "../../Providers/NameProvider"
import { useSocket } from "../../Providers/SocketProvider"
import { useMessages } from "../../Providers/MessageProvider"

const MessageTextbox = () => {
  const { name  } = useName()
  const [message, setMessage] = useState("")
  const {sendMessage} = useSocket()
  const {messages, setMessages} = useMessages()
  const handleSend = () => {
    sendMessage({
      name,
      message,
      time: new Date().toLocaleTimeString()
    })
    setMessages([...messages, {name, message, time: new Date().toLocaleTimeString(), mine: true}])
  }

  return (
    <div className="flex w-full justify-center gap-10 items-center mt-auto text-black">
      <input
        type="text"
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="text-base w-[80%] p-2 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 dark:focus:ring-green-800"
      />
      <button onClick={handleSend} className="text-white hover:cursor-pointer bg-gray-950 hover:bg-gray-800 px-7 rounded-md py-2">Send</button>
    </div>
  )
}
export default MessageTextbox