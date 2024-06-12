"use client";
import { NameInput } from "./NameInput";
import { useChatName } from "../../Providers/ChatNameProvider";
import { useSocket } from "../../Providers/SocketProvider";

const Navbar = () => {
  const { chatName } = useChatName();
  const { joinRoomHook, createRoomHook } = useSocket();

  const joinRoom = (roomName: string) => {
    if (chatName.toLowerCase() === roomName.toLowerCase()) {
      alert("You are already in this room");
      return;
    }
    joinRoomHook(roomName.toLowerCase());
  };

  const createRoom = (roomName: string) => {
    if (chatName.toLowerCase() === roomName.toLowerCase()) {
      alert("You are already in this room");
      return;
    }
    createRoomHook(roomName.toLowerCase());
  };

  return (
    <>
      <div className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] text-white">
        <ul className="flex flex-wrap justify-center gap-8 items-center p-4">
          <button
            onClick={() => {
              joinRoom("global");
            }}
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
          >
            Global Chat
          </button>
          <button
            onClick={() => {
              let roomName = prompt("Enter room name to join");
              if (roomName) {
                joinRoom(roomName);
              }
            }}
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
          >
            Enter chat room
          </button>
          <button
            onClick={() => {
              let roomName = prompt("Enter room name to create");
              if (roomName) {
                createRoom(roomName);
              }
            }}
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
          >
            Create Chat Room
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
          >
            Donate
          </button>
          <NameInput className="w-full sm:w-auto"></NameInput>
        </ul>
      </div>
    </>
  );
};
export default Navbar;