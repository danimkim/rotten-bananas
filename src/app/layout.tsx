import type { Metadata } from "next";
import "./globals.css";
import { css } from "../../styled-system/css";
import Logo from "./public/logo.png";
import Link from "next/link";
import Image from "next/image";

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
      <body>
        <header className={style}>
          <h1 className={css({ display: "inline-block" })}>
            <Link href={"/"}>
              <Image src={Logo} alt="Rotten Bananas" width={161} />
            </Link>
          </h1>
        </header>
        <main className={style}>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}

const style = css({
  maxWidth: "1100px",
  margin: "20px auto 0",
  paddingX: "5",
});
