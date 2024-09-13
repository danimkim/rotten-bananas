import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import MovieCard from "@/components/movie-card";
import movies from "@/mock/movies.json";
import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.section}>
        <h2>지금 가장 추천하는 영화</h2>
        <div className={styles.recommendMovieList}>
          {movies.slice(0, 3).map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <h2>등록된 모든 영화</h2>
        <div className={styles.allMovieList}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
