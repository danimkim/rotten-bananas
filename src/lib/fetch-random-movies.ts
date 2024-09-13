import { MovieData } from "@/types";

export default async function fetchRandomMovies(): Promise<MovieData[]> {
  const url = `http://localhost:12345/movie/random`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to fetch random movies");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
