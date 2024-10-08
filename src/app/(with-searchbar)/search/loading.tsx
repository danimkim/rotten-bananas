import { css } from "../../../../styled-system/css";
import { loadingSpinner } from "../../../../styled-system/recipes";

export default function Loading() {
  return (
    <div
      className={`${loadingSpinner({ type: "component" })} ${css({
        marginTop: "20px",
        width: "40px",
        height: "40px",
      })}`}
    ></div>
  );
}
