"use client"

import { ReactNode } from "react";
import { useMessages } from "../../Providers/MessageProvider";


interface ChatAreaProps {
   children?: ReactNode;
}
const ChatArea = ({ children }: ChatAreaProps) => {
   const { messages } = useMessages();
   return (
      <>
         <div className="mt-4 min-h-[80vh] max-h-[80vh] overflow-auto no-scrollbar flex flex-col between">

         {messages.map(({ name, time, message, mine }, index) =>
(
   !mine ? (
   <div className="flex items-start gap-2.5 px-4 my-3" key={index}>
      <div className="flex flex-col w-[400px] max-w-[70vw] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
         <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{name}</span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{time}</span>
         </div>
         <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{message}</p>
      </div>
   </div>
   ) :
   (
      <div className="flex items-start gap-2.5 px-4 my-3 justify-end" key={index}>
      <div className="flex flex-col w-[400px] max-w-[70vw] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-blue-500">
         <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{name}</span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{time}</span>
         </div>
         <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{message}</p>
      </div>
   </div>
   )
   
))}

            {children}
         </div>
      </>
   )
}
export default ChatArea