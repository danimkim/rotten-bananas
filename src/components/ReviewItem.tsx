import { ReviewData } from "@/app/type";
import { css } from "../../styled-system/css";
import { hstack } from "../../styled-system/patterns";

export default function ReviewItem({ data }: { data: ReviewData }) {
  function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
  }

  const rating = getRandomNumber();

  return (
    <div className={hstack({ marginTop: "30px", width: "100%" })}>
      <div className={userInfo}>
        <p>{data.author}</p>
        <p>{rating}</p>
      </div>
      <div className={css({ width: "100%" })}>
        <p>{data.content}</p>
        <div className={css({ marginTop: "10px" })}>
          <span>{`${new Date(data.createdAt).toLocaleString()} | Original Score: ${rating}/5 | `}</span>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

const userInfo = css({
  minWidth: "100px",
  height: "100%",
});
