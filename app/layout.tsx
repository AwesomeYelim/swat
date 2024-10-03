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
            <a href="/">
              <Image
                className="logo_img"
                src="/images/logo.svg"
                alt="logo"
                loading="eager"
                priority
                width={70}
                height={84}
              />
            </a>
          </header>
          <main>{children}</main>
          {/* <footer>
            <p>&copy; 2024 My Blog. All rights reserved.</p>
          </footer> */}
        </div>
      </body>
    </html>
  );
}
