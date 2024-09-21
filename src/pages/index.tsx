import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import MovieCard from "@/components/movie-card";
import styles from "./index.module.css";
import { InferGetStaticPropsType } from "next";
import fetchMovies from "@/lib/fetch-movies";
import fetchRandomMovies from "@/lib/fetch-random-movies";

export const getStaticProps = async () => {
  const [allMovies, recommendMovies] = await Promise.all([
    fetchMovies(),
    fetchRandomMovies(),
  ]);

  return {
    props: {
      allMovies,
      recommendMovies,
    },
    revalidate: 3,
  };
};

export default function Home({
  allMovies,
  recommendMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <section className={styles.section}>
        <h2>지금 가장 추천하는 영화</h2>
        <div className={styles.recommendMovieList}>
          {recommendMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <h2>등록된 모든 영화</h2>
        <div className={styles.allMovieList}>
          {allMovies.map((movie) => (
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
