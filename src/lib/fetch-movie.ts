import { MovieData } from "@/types";

export default async function fetchMovie(
  id: number
): Promise<MovieData | null> {
  const url = `https://${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/movie/${id}`;

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
