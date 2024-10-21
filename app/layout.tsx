import { ReactNode } from "react";
import DictLayout from "./components/layout";
import "./globals.css";

export const metadata = {
  title: "Swat",
  description: "A simple blog built with Next.js and TypeScript",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DictLayout>{children}</DictLayout>
      </body>
    </html>
  );
}
