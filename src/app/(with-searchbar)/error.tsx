"use client";

import Image from "next/image";
import BananaImg from "@/app/public/annoying-banana.webp";
import { center, vstack } from "../../../styled-system/patterns";
import { css } from "../../../styled-system/css";

export default function ErrorPage() {
  return (
    <div className={`${vstack({ height: "calc(100vh - 240px)" })} ${center()}`}>
      <h3 className={headingStyle}>Hmm.. Something went wrong.</h3>
      <p>{`Wow, an error. How exciting. I'm literally bursting with joy. Not.`}</p>
      <p>{`와.. 에러라니 너무 신난다.. 진심 기뻐서 팔짝 뛰겠어요(아님)`}</p>
      <Image
        src={BananaImg}
        width={250}
        alt="A banana with an unimpressed face"
        className={css({ marginTop: "5" })}
      />
    </div>
  );
}

const headingStyle = css({
  fontWeight: 700,
  fontSize: "40",
});
