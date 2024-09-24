import { css } from "../../../../styled-system/css";
import MovieCard from "../components/MovieCard";
import mockData from "./../../mock/dummy.json";

interface IProps {
  searchParams: {
    q?: string;
  };
}

export default function Page({ searchParams }: IProps) {
  return (
    <section className={css({ marginTop: "5" })}>
      <h2 className={css({ fontSize: "24px", fontWeight: 800 })}>
        검색결과: {searchParams.q || ""}
      </h2>
      <div className={containerStyle}>
        {mockData.slice(0, 1).map((data) => (
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
