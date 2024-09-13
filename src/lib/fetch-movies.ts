import { MovieData } from "@/types";

export default async function fetchMovies(q?: string): Promise<MovieData[]> {
  let url = `http://localhost:12345/movie`;

  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
