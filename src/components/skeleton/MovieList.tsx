import MovieCardSkeleton from "./MovieCard";

export default function MovieListSkeleton({ count }: { count: number }) {
  return new Array(count)
    .fill(0)
    .map((_, idx) => <MovieCardSkeleton key={`movie-card-skeleton-${idx}`} />);
}
