import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import MovieCard from "@/components/movie-card";
import styles from "./index.module.css";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchMovies from "@/lib/fetch-movies";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const q = context.query.q;

  const movies = await fetchMovies(q as string);

  return {
    props: {
      movies,
    },
  };
};

export default function Search({
  movies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { q } = router.query;

  return (
    <section className={styles.section}>
      <h2>검색 결과: {`"${q}"`}</h2>
      <div className={styles.searchResultList}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
}

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
