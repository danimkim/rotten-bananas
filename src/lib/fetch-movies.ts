import { MovieData } from "@/types";

export default async function fetchMovies(q?: string): Promise<MovieData[]> {
  let url = `https://${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/movie`;

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
