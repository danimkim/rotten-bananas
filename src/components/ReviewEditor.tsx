"use client";

import { createReviewAction } from "@/actions/create-review.action";
import { css, cva } from "../../styled-system/css";
import { useActionState, useEffect } from "react";
import { loadingSpinner } from "../../styled-system/recipes";

export default function ReviewEditor({ movieId }: { movieId: string }) {
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null
  );

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <div>
      <h3
        className={css({
          fontSize: "18px",
          fontWeight: 600,
          marginTop: "40px",
        })}
      >
        Audience Reviews
      </h3>
      <form action={formAction} className={formStyle}>
        <input type="text" defaultValue={movieId} name="movieId" hidden />
        <input
          required
          disabled={isPending}
          type="text"
          placeholder="Username"
          name="author"
          className={inputStyle({ type: "name" })}
        />
        {/* <input
          required
          type="number"
          placeholder="Rate the movie (1~5)"
          min={1}
          max={5}
          name="rating"
          className={inputStyle({ type: "name" })}
        /> */}
        <textarea
          required
          disabled={isPending}
          placeholder="Add a review"
          name="content"
          rows={3}
          className={inputStyle({ type: "review" })}
          maxLength={200}
        />
        <button
          type="submit"
          disabled={isPending}
          className={buttonStyle}
          data-loaing
        >
          {isPending ? <div className={loadingSpinner()}></div> : `Submit`}
        </button>
      </form>
    </div>
  );
}

const formStyle = css({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "4",
  marginTop: "10px",
});

const inputStyle = cva({
  base: {
    border: `solid 1px var(--gray-primary)`,
    borderRadius: "3px",
    width: "100%",
    padding: "5px",
  },
  variants: {
    type: {
      name: {
        maxWidth: "200px",
        height: "35px",
      },
      review: {
        resize: "none",
      },
    },
  },
});

const buttonStyle = css({
  display: "inline-block",
  width: "95px",
  height: "41px",
  alignSelf: "flex-end",
  fontSize: "14px",
  padding: "10px 25px",
  backgroundColor: "var(--gray-primary)",
  borderRadius: "20px",
  "&:hover": {
    transition: "all ease-in-out 0.2s",
    backgroundColor: "var(--gray-secondary)",
  },
});
