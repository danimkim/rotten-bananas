import Image from "next/image";
import { css } from "../../../../styled-system/css";

interface IProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: IProps) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${params.id}`,
    { cache: "force-cache" }
  );
  const movieData = await res.json();

  const {
    title,
    releaseDate,
    company,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
  } = movieData;

  return (
    <>
      <div
        style={{ backgroundImage: `url(${posterImgUrl})` }}
        className={posterBackgroundStyle}
      >
        <div className={posterStyle}>
          <Image src={posterImgUrl} alt={title} fill />
        </div>
      </div>
      <div>
        <ul
          className={css({ marginTop: "5", "& li + li": { marginTop: "5" } })}
        >
          <li>
            <h2 className={css({ fontSize: "25px", fontWeight: 800 })}>
              {title}
            </h2>
          </li>
          <li>
            <p>{`${releaseDate} / ${genres.join(", ")} / ${runtime}분`}</p>
          </li>
          <li>{company}</li>
          <li className={css({ fontWeight: 500 })}>{subTitle}</li>
          <li className={css({ lineHeight: 1.8 })}>{description}</li>
        </ul>
      </div>
    </>
  );
}

const posterBackgroundStyle = css({
  height: "500px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  _before: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "full",
    height: "full",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    content: '""',
    boxShadow: "inset -10px 0px 20px 25px var(--black-primary)",
  },
});

const posterStyle = css({
  position: "relative",
  width: "300px",
  aspectRatio: "1/1.5",
});
