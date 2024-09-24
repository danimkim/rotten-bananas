import { MovieData } from "@/app/type";
import Link from "next/link";
import Image from "next/image";
import { css } from "../../../../styled-system/css";

export default function MovieCard({ id, title, posterImgUrl }: MovieData) {
  return (
    <Link
      href={`/movie/${id}`}
      className={css({ position: "relative", aspectRatio: "1/1.5" })}
    >
      <Image src={posterImgUrl} alt={title} fill />
    </Link>
  );
}
