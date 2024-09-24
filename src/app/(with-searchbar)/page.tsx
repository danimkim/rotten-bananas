import { css, cva } from "../../../styled-system/css";
import mockData from "./../mock/dummy.json";
import MovieCard from "./components/MovieCard";

export default function Home() {
  return (
    <>
      <section>
        <h2 className={headingStyle}>지금 가장 추천하는 영화</h2>
        <div className={containerRecipe({ column: "3" })}>
          {mockData.slice(0, 3).map((data) => (
            <MovieCard key={data.id} {...data} />
          ))}
        </div>
      </section>
      <section>
        <h2 className={headingStyle}>등록된 모든 영화</h2>
        <div className={containerRecipe({ column: "5" })}>
          {mockData.map((data) => (
            <MovieCard key={data.id} {...data} />
          ))}
        </div>
      </section>
    </>
  );
}

const headingStyle = css({
  marginTop: "10",
  fontSize: "20px",
  fontWeight: 600,
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
