import { css } from "../../../../styled-system/css";
import MovieCard from "../components/MovieCard";
import { MovieData } from "@/app/type";

interface IProps {
  searchParams: {
    q: string;
  };
}

export default async function Page({ searchParams: { q } }: IProps) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${q}`
  );
  const searchResults = await res.json();

  return (
    <section className={css({ marginTop: "5" })}>
      <h2 className={css({ fontSize: "24px", fontWeight: 800 })}>
        검색결과: {q || ""}
      </h2>
      <div className={containerStyle}>
        {searchResults.map((data: MovieData) => (
          <MovieCard key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
}

const containerStyle = css({
  marginTop: "5",
  display: "grid",
  gap: "2",
  gridTemplateColumns: "3",
});
