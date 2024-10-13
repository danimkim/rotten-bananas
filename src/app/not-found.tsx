import Image from "next/image";
import BananaImg from "@/app/public/annoying-banana.webp";
import { css } from "../../styled-system/css";
import { center, vstack } from "../../styled-system/patterns";

export default function NotFound() {
  return (
    <div className={`${vstack({ height: "calc(100vh - 240px)" })} ${center()}`}>
      <h3 className={headingStyle}>404: PAGE NOT FOUND</h3>
      <p>{`Hmm.. Can't find that page. Try something else maybe?`}</p>
      <p>{`흠... 그 페이지를 찾을 수가 없네요. 다른 걸 시도해 보시겠어요? 아님 말구요`}</p>
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
