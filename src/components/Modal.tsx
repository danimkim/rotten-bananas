"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { css } from "../../styled-system/css";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({ top: 0 });
    }
  }, []);

  return createPortal(
    <dialog
      ref={dialogRef}
      onClick={(e) => {
        if ((e.target as any).nodeName === "DIALOG") {
          router.back();
        }
      }}
      onClose={() => router.back()}
      className={dialogStyle}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
}

const dialogStyle = css({
  minWidth: "580px",
  maxWidth: "70%",
  aspectRatio: `1.5/1`,
  margin: "auto",
  backgroundColor: `var(--black-primary)`,
  color: `var(--white-primary)`,
  padding: "50px",
  "&::backdrop": {
    background: `rgba(0,0,0,0.6)`,
  },
});
