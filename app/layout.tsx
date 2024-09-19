import "./globals.css";
import Image from "next/image";
import { ReactNode } from "react";

export const metadata = {
  title: "My Blog",
  description: "A simple blog built with Next.js and TypeScript",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header>
            <Image
              // className={extention ? name.split(".")[0] : name}
              src="/images/logo.svg"
              alt="logo"
              loading="eager"
              priority
              width={70}
              height={84}
            />
            {/* <h1>전국벌레공략도감</h1> */}
            <Image
              // className={extention ? name.split(".")[0] : name}
              src="/images/main.svg"
              alt="logo"
              loading="eager"
              priority
              width={348}
              height={382}
            />
            <nav>
              <a href="/">벌레도감</a>
              <a href="/">도시기생충이란</a>
              <a href="/about">사업소개</a>
              {/* <a href="/apply">참가신청</a> */}
            </nav>
          </header>
          <main>{children}</main>
          <footer>
            <p>&copy; 2024 My Blog. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
