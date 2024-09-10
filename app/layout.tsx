import "./globals.css";
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
            <h1>전국벌레공략도감</h1>
            <nav>
              <a href="/about">사업소개</a>
              <a href="/apply">참가신청</a>
              <a href="/">벌레도감</a>
              <a href="/">언어&#40;Eng&#41;</a>
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
