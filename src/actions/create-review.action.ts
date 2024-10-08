"use server";

import { revalidateTag } from "next/cache";

export async function createReviewAction(_: any, formData: FormData) {
  const movieId = formData.get("movieId")?.toString();
  const author = formData.get("author")?.toString();
  const content = formData.get("content")?.toString();
  const rating = formData.get("rating")?.toString();

  if (!movieId || !author || !content) {
    return {
      status: false,
      error: `Username and Review content cannot be empty.`,
    };
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ movieId, author, content, rating }),
      }
    );

    if (!res.ok) {
      throw new Error(`POST request failed: ${res.statusText}`);
    }

    revalidateTag(`review-${movieId}`);
    return {
      status: true,
      error: "'",
    };
  } catch (error) {
    return {
      status: false,
      error: `Submission failed : ${error}`,
    };
  }
}
