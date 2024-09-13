import { MovieData } from "@/types";

export default async function fetchMovie(
  id: number
): Promise<MovieData | null> {
  const url = `http://localhost:12345/movie/${id}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch movie");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
