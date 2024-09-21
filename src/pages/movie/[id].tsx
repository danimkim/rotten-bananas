import Image from "next/image";
import styles from "./[id].module.css";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import fetchMovie from "@/lib/fetch-movie";
import { useRouter } from "next/router";
import fetchMovies from "@/lib/fetch-movies";
import AppHead from "@/components/app-head";
import { meta } from "@/constants";

export const getStaticPaths = async () => {
  const res = await fetchMovies();

  const movieIds = res.map((movie) => ({
    params: { id: movie.id.toString() },
  }));

  return {
    paths: movieIds,
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;

  const movie = await fetchMovie(Number(id));

  if (!movie) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movie,
    },
  };
};

export default function MovieDetail({
  movie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <AppHead
          pageTitle={meta.default.pageTitle}
          title={meta.default.title}
          imageUrl={meta.default.imageUrl}
          desc={meta.default.desc}
        />
        <div>로딩중입니다...</div>
      </>
    );
  }

  if (!movie) return "문제가 발생했습니다. 다시 시도해주세요.";

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
      <AppHead
        pageTitle={`${title} | ${meta.default.pageTitle}`}
        title={`${title} | ${meta.default.pageTitle}`}
        imageUrl={posterImgUrl}
        desc={description}
      />
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
