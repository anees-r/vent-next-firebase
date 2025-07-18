import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/common/MyFooter";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  description:
    "vent is secure and private platform where you can unwind and pen down your thoughts to clear your mind clutter. The thoughts written by users are private to their account and can not be seen by others. So write you messes, voices and tensions away. Unravel and say hello to a more clearer state of mind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ThemeProvider attribute="class" defaultTheme="light"> */}
        <AuthProvider>
          <MyNav />
          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Flip}
          />
          {children}
          <MyFooter />
        </AuthProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
