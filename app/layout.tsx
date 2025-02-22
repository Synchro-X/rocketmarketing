import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Nav } from "./components/views/nav";
import { SmoothScrollbar } from "./components/views/smoothscroll";
import { GlobalContextProvider } from "./context/globalcontext";
import { Loader } from "./components/views/loader";


const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "700"],
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "700"],
});

const lufga = localFont({
  src: "../public/fonts/LufgaBold.ttf",
  variable: "--font-lufga",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${outfit.variable} ${lufga.variable}`}
      >
        <GlobalContextProvider>
          <Loader />
          <SmoothScrollbar>
            <Nav />
            {children}
          </SmoothScrollbar>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
