import { css } from "../../../../styled-system/css";

export default function Loading() {
  return <div className={spinner}></div>;
}

const spinner = css({
  marginTop: "20px",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  background: "conic-gradient(#000 10%, var(--yellow-primary))",
  WebkitMask: "radial-gradient(farthest-side, #0000 calc(100% - 5px), #000 0)",
  animation: `spinner 1s infinite linear`,
});
