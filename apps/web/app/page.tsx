"use client"
import ChatArea from "./components/ChatArea";
import MessageTextbox from "./components/MessageTextbox";
import { useOnlineUsers } from "../Providers/OnlineUsersProvider";
import { useChatName } from "../Providers/ChatNameProvider";

export default function Home() {
  const {onlineUsers } = useOnlineUsers();
  const {chatName} = useChatName();

  return (
    <>
    <div className="min-h-screen">
      <div className="text-white mt-10 flex items-end justify-center">
        <h2 className="text-3xl w-fit textce">{chatName}</h2>
        <span className="text-green-200 ml-10">{onlineUsers} online</span>
      </div>
      <ChatArea>
      </ChatArea>
      <MessageTextbox></MessageTextbox>
    </div>
    </>
  );
}