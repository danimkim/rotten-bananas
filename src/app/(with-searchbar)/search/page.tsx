import { delay } from "@/app/utils/delay";
import { css } from "../../../../styled-system/css";
import MovieCard from "@/components/MovieCard";
import { MovieData } from "@/app/type";
import { cardContainer } from "../../../../styled-system/recipes";
import { Suspense } from "react";
import MovieListSkeleton from "@/components/skeleton/MovieList";

interface IProps {
  searchParams: {
    q: string;
  };
}

async function SearchResults({ q }: { q: string }) {
  // TODO: Temporary delay. Remove later
  await delay(1500);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${q}`,
    { cache: "force-cache" }
  );

  const searchResults = await res.json();

  return searchResults.map((data: MovieData) => (
    <MovieCard key={data.id} {...data} />
  ));
}

export default function Page({ searchParams: { q } }: IProps) {
  return (
    <section className={css({ marginTop: "5" })}>
      <h2 className={css({ fontSize: "24px", fontWeight: 800 })}>
        검색결과: {q || ""}
      </h2>
      <div className={cardContainer({ column: "3" })}>
        <Suspense key={q || ""} fallback={<MovieListSkeleton count={3} />}>
          <SearchResults q={q} />
        </Suspense>
      </div>
    </section>
  );
}
