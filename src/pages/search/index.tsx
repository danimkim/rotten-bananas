import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import MovieCard from "@/components/movie-card";
import styles from "./index.module.css";
import fetchMovies from "@/lib/fetch-movies";
import { MovieData } from "@/types";
import AppHead from "@/components/app-head";
import { meta } from "@/constants";

export default function Search() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResult = async () => {
    const res = await fetchMovies(q as string);
    setMovies(res);
  };

  useEffect(() => {
    if (!q) return;

    fetchSearchResult();
  }, [q]);

  return (
    <>
      <AppHead
        pageTitle={`Search Results | ${meta.default.pageTitle}`}
        title={`Search Results | ${meta.default.pageTitle}`}
        imageUrl={meta.default.imageUrl}
        desc={meta.default.desc}
      />
      <section className={styles.section}>
        <h2>검색 결과: {`"${q || ""}"`}</h2>
        <div className={styles.searchResultList}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </>
  );
}

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
