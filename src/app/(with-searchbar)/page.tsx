import MovieCard from "@/components/MovieCard";
import { css } from "../../../styled-system/css";
import { MovieData } from "../type";
import { Suspense } from "react";
import MovieListSkeleton from "@/components/skeleton/MovieList";
import { cardContainer } from "../../../styled-system/recipes";
import { Metadata } from "next";
import { meta } from "@/constant";

export const dynamic = "force-dynamic";

async function AllMovies() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`, {
    cache: "force-cache",
  });

  const movieData = await res.json();

  if (!res.ok) return "데이터를 불러오는 중 오류가 발생했습니다...";

  return movieData.map((data: MovieData) => (
    <MovieCard key={data.id} {...data} />
  ));
}

async function RecommendedMovies() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
    { next: { revalidate: 3 } }
  );

  const movieData = await res.json();

  if (!res.ok) return "데이터를 불러오는 중 오류가 발생했습니다...";

  return movieData.map((data: MovieData) => (
    <MovieCard key={data.id} {...data} />
  ));
}

export const metadata: Metadata = {
  title: meta.default.title,
  description: meta.default.desc,
  openGraph: {
    title: meta.default.title,
    description: meta.default.desc,
    images: [meta.default.imageUrl],
  },
};

export default function Home() {
  return (
    <>
      <section>
        <h2 className={headingStyle}>지금 가장 추천하는 영화</h2>
        <div className={cardContainer({ column: "3" })}>
          <Suspense fallback={<MovieListSkeleton count={3} />}>
            <RecommendedMovies />
          </Suspense>
        </div>
      </section>
      <section>
        <h2 className={headingStyle}>등록된 모든 영화</h2>
        <div className={cardContainer({ column: "5" })}>
          <Suspense fallback={<MovieListSkeleton count={15} />}>
            <AllMovies />
          </Suspense>
        </div>
      </section>
    </>
  );
}

const headingStyle = css({
  marginTop: "10",
  fontSize: "25px",
  fontWeight: 800,
});
