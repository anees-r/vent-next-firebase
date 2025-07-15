import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MyNav from "./components/common/MyNav";
import MyFooter from "./components/common/MyFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vent",
  description: "vent is secure and private platform where you can unwind and pen down your thoughts to clear your mind clutter. The thoughts written by users are private to their account and can not be seen by others. So write you messes, voices and tensions away. Unravel and say hello to a more clearer state of mind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MyNav/>
        {children}
        <MyFooter/>
      </body>
    </html>
  );
}
