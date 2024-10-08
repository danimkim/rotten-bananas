"use server";

import { revalidateTag } from "next/cache";

export default async function deleteReviewAction(_: any, formData: FormData) {
  const reviewId = formData.get("reviewId")?.toString();
  const movieId = formData.get("movieId")?.toString();

  if (!reviewId) {
    return {
      status: false,
      error: `Delete failed: Review not existed`,
    };
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/${reviewId}`,
      {
        method: "DELETE",
      }
    );

    if (!res.ok) {
      throw new Error(`DELETE request failed: ${res.statusText}`);
    }

    revalidateTag(`review-${movieId}`);
    return {
      status: true,
      error: "",
    };
  } catch (error) {
    return {
      status: false,
      error: `Delete failed: ${error}`,
    };
  }
}
