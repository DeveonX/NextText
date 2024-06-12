import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";

import { SocketProvider } from "../Providers/SocketProvider";
import { NameProvider } from "../Providers/NameProvider";
import { OnlineUsersProvider } from "../Providers/OnlineUsersProvider";
import { MessageProvider } from "../Providers/MessageProvider";
import { ChatNameProvider } from "../Providers/ChatNameProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextText",
  description: "Realtime chat application created using Next.js and Socket.io",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChatNameProvider>
        <OnlineUsersProvider>
          <MessageProvider>
            <SocketProvider>
              <NameProvider>
                <div className=" top-0 z-[-2] min-h-screen w-fit lg:w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)]">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </NameProvider>
            </SocketProvider>
          </MessageProvider>
        </OnlineUsersProvider>
        </ChatNameProvider>
      </body>
    </html>
  );
}