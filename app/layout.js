import { Outfit, Ovo } from "next/font/google";
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Portfolio - Het Chawda",
  description: "Full-Stack Developer with React, Next.js, Typescript, Nodejs, Express.js, MongoDB, Tailwind CSS, Socket.io, Motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/profilephoto.png" type="image/png" />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
