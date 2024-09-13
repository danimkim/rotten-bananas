import { MovieData } from "@/types";
import Link from "next/link";
import Image from "next/image";
import styles from "./movie-card.module.css";
export default function MovieCard({ id, title, posterImgUrl }: MovieData) {
  return (
    <Link href={`/movie/${id}`} className={styles.card}>
      <Image src={posterImgUrl} alt={title} fill />
    </Link>
  );
}
