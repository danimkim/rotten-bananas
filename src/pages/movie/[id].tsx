import Image from "next/image";
import styles from "./[id].module.css";
import { GetServerSidePropsContext } from "next";
import fetchMovie from "@/lib/fetch-movie";
import { MovieData } from "@/types";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params?.id;

  const movie = await fetchMovie(Number(id));

  return {
    props: {
      movie,
    },
  };
};
export default function MovieDetail({ movie }: { movie: MovieData }) {
  const {
    title,
    releaseDate,
    company,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
  } = movie;

  return (
    <>
      <div
        style={{ backgroundImage: `url(${posterImgUrl})` }}
        className={styles.posterBackground}
      >
        <div className={styles.poster}>
          <Image src={posterImgUrl} alt={title} fill />
        </div>
      </div>
      <div>
        <ul className={styles.info}>
          <li>
            <h2>{title}</h2>
          </li>
          <li>
            <p>{`${releaseDate} / ${genres.join(", ")} / ${runtime}분`}</p>
          </li>
          <li>{company}</li>
          <li className={styles.subTitle}>{subTitle}</li>
          <li className={styles.description}>{description}</li>
        </ul>
      </div>
    </>
  );
}
