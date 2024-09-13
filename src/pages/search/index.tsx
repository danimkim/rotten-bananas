import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import movies from "@/mock/movies.json";
import MovieCard from "@/components/movie-card";
import styles from "./index.module.css";
export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <section className={styles.section}>
      <h2>검색 결과: {`"${q}"`}</h2>
      <div className={styles.searchResultList}>
        {/* temp data */}
        {movies.slice(0, 3).map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
}

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
