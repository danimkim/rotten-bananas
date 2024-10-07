"use server";

export async function createReviewAction(formData: FormData) {
  const movieId = formData.get("movieId")?.toString();
  const author = formData.get("author")?.toString();
  const content = formData.get("content")?.toString();
  const rating = formData.get("rating")?.toString();

  console.log(movieId, author, content);

  if (!movieId || !author || !content) return;

  try {
    await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`, {
      method: "POST",
      body: JSON.stringify({ movieId, author, content, rating }),
    });
  } catch (error) {
    console.error(error);
    return;
  }
}
