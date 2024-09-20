import { MovieData } from "@/types";

export default async function fetchAllMovies(): Promise<MovieData[]> {
  const url = `http://localhost:12345/movie`;

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
