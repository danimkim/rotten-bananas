import { css, cva } from "../../../styled-system/css";
import { MovieData } from "../type";
import MovieCard from "./components/MovieCard";

async function AllMovies() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`, {
    cache: "force-cache",
  });
  const movieData = await res.json();

  if (!res.ok) return "데이터를 불러오는 중 오류가 발생했습니다...";

  return (
    <div className={containerRecipe({ column: "5" })}>
      {movieData.map((data: MovieData) => (
        <MovieCard key={data.id} {...data} />
      ))}
    </div>
  );
}

async function RecommendedMovies() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
    { next: { revalidate: 3 } }
  );
  const movieData = await res.json();

  if (!res.ok) return "데이터를 불러오는 중 오류가 발생했습니다...";

  return (
    <div className={containerRecipe({ column: "3" })}>
      {movieData.map((data: MovieData) => (
        <MovieCard key={data.id} {...data} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section>
        <h2 className={headingStyle}>지금 가장 추천하는 영화</h2>
        <RecommendedMovies />
      </section>
      <section>
        <h2 className={headingStyle}>등록된 모든 영화</h2>
        <AllMovies />
      </section>
    </>
  );
}

const headingStyle = css({
  marginTop: "10",
  fontSize: "25px",
  fontWeight: 800,
});

const containerRecipe = cva({
  base: {
    marginTop: "5",
    display: "grid",
    gap: "2",
  },
  variants: {
    column: {
      "3": {
        "grid-template-columns": "repeat(3, 1fr)",
      },
      "5": {
        "grid-template-columns": "repeat(5, 1fr)",
      },
    },
  },
});
