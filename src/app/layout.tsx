import "./globals.css";
import { css } from "../../styled-system/css";
import Logo from "./../../public/logo.webp";
import Link from "next/link";
import Image from "next/image";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className={style}>
          <h1 className={css({ display: "inline-block" })}>
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="Rotten Bananas"
                width={161}
                height={71}
                priority
              />
            </Link>
          </h1>
        </header>
        <main className={style}>{children}</main>
        <footer></footer>
        {modal}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}

const style = css({
  maxWidth: "1100px",
  margin: "20px auto 0",
  paddingX: "5",
});
