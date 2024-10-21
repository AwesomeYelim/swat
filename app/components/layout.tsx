"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function DictLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  
  // `/dict/숫자` 형태의 경로만 흰 배경 적용
  const isWhiteBackground = /^\/dict\/\d+$/.test(pathname);

  return (
    <div className={`container ${isWhiteBackground ? "white" : ""}`}>
      <header>
        <a href="/">
          {isWhiteBackground ? (
            <Image
              className="logo_img"
              src="/images/b_logo.svg"
              alt="b_logo"
              loading="eager"
              priority
              width={70}
              height={84}
            />
          ) : (
            <Image
              className="logo_img"
              src="/images/logo.svg"
              alt="logo"
              loading="eager"
              priority
              width={70}
              height={84}
            />
          )}
        </a>
      </header>
      {children}
    </div>
  );
}
