import Image from "next/image";
import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Swat",
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
          {children}
        </div>
      </body>
    </html>
  );
}
