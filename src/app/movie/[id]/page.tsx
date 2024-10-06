import Image from "next/image";
import { css, cva } from "../../../../styled-system/css";
import { MovieData, ReviewData } from "@/app/type";
import { notFound } from "next/navigation";
import { createReviewAction } from "@/actions/create-review.action";
import ReviewItem from "@/components/ReviewItem";
import ArrowIcon from "@/app/public/ArrowIcon.svg";

interface IProps {
  params: {
    id: string;
  };
}

// export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`);
  const movieData = await res.json();

  return movieData.map((data: MovieData) => ({ id: data.id.toString() }));
}

async function MovieDetail({ movieId }: { movieId: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${movieId}`
  );

  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다..</div>;
  }

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

function ReviewEditor({ movieId }: { movieId: string }) {
  return (
    <form action={createReviewAction} className={formStyle}>
      <input type="text" defaultValue={movieId} name="movieId" hidden />
      <input
        required
        type="text"
        placeholder="Username"
        name="author"
        className={inputStyle({ type: "name" })}
      />
      <textarea
        required
        placeholder="Add a review"
        name="content"
        className={inputStyle({ type: "review" })}
      />
      <button type="submit" className={buttonStyle}>
        <Image src={ArrowIcon} alt="Submit" className={iconStyle} />
      </button>
    </form>
  );
}

async function ReviewList({ movieId }: { movieId: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/movie/${movieId}`
  );

  if (!res.ok) {
    throw new Error(`Review fetch failed: ${res.statusText}`);
  }

  const reviewData: ReviewData[] = await res.json();

  return (
    <ul>
      {reviewData.map((data) => (
        <li key={data.id}>
          <ReviewItem data={data} />
        </li>
      ))}
    </ul>
  );
}

export default function Page({ params }: IProps) {
  return (
    <section>
      <MovieDetail movieId={params.id} />
      <ReviewEditor movieId={params.id} />
      <ReviewList movieId={params.id} />
    </section>
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

const formStyle = css({
  width: "100%",
  height: "40px",
  display: "flex",
  alignItems: "center",
  gap: "4",
});

const inputStyle = cva({
  base: {
    borderBottom: `solid 1px var(--gray-primary)`,
    width: "100%",
    height: "100%",
    padding: "5px",
  },
  variants: {
    type: {
      name: {
        maxWidth: "200px",
      },
      review: {
        resize: "none",
      },
    },
  },
});

const buttonStyle = css({
  borderRadius: "50%",
  padding: "10px",
  width: "40px",
  height: "40px",
  "&:hover": {
    transition: "all ease-in-out 0.2s",
    backgroundColor: "var(--gray-primary)",
  },
});

const iconStyle = css({
  width: "100%",
  transform: "rotate(180deg)",
});
