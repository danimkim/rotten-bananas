import { MovieData } from "@/app/type";
import Link from "next/link";
import Image from "next/image";
import { card } from "../../styled-system/recipes";

export default function MovieCard({ id, title, posterImgUrl }: MovieData) {
  return (
    <Link href={`/movie/${id}`} className={card()}>
      <Image src={posterImgUrl} alt={title} fill />
    </Link>
  );
}
