"use client";

import deleteReviewAction from "@/actions/delete-review.action";
import { useActionState, useEffect } from "react";
import { loadingSpinner } from "../../styled-system/recipes";
import { css } from "../../styled-system/css";

export default function ReviewDeleteButton({
  movieId,
  reviewId,
}: {
  movieId: number;
  reviewId: number;
}) {
  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null
  );

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <form action={formAction} className={css({ display: "inline-block" })}>
      <input type="text" name="reviewId" defaultValue={reviewId} hidden />
      <input type="text" name="movieId" defaultValue={movieId} hidden />
      <button type="submit">
        {isPending ? (
          <div
            className={`${loadingSpinner()} ${css({ marginLeft: "10px" })}`}
          ></div>
        ) : (
          `Delete`
        )}
      </button>
    </form>
  );
}
