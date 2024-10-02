import { css } from "../../../../styled-system/css";

export default function Loading() {
  return (
    <div className={css({ textAlign: "center" })}>
      <div className={spinner}></div>
    </div>
  );
}

const spinner = css({
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  background: "conic-gradient(#000 10%, var(--yellow-primary))",
  WebkitMask: "radial-gradient(farthest-side, #0000 calc(100% - 5px), #000 0)",
  animation: `spinner 1s infinite linear`,
});
