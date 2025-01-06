import { Inter } from "next/font/google";
import "./globals.scss";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MainModal from "./components/MainModal";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aspire Global Education",
  description: "Best Consultancy",
  // icons: {
  //   icon: "/favicon.ico",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <head>
          {/* <link
            rel="icon"
            href="/logo/logo-square.png"
            type="image/png"
            sizes="any"
          /> */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
            integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
        </head>
        <NavBar />
        {children}
        <Footer />

        <MainModal />
      </body>
    </html>
  );
}
