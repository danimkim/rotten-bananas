import Image from "next/image";
import Logo from "@/assets/logo.png";
import styles from "./global-layout.module.css";
import Link from "next/link";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <>
      <header className={`${styles.header} ${styles.container}`}>
        <h1>
          <Link href={"/"}>
            <Image src={Logo} alt="Rotten Bananas" width={161} />
          </Link>
        </h1>
      </header>
      <main className={`${styles.main} ${styles.container}`}>{children}</main>
      <footer className={`${styles.footer} ${styles.container}`}></footer>
    </>
  );
}
