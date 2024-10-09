import MoviePage, { IMoviePageProps } from "@/app/movie/[id]/page";
import Modal from "@/components/Modal";

export default function Page(props: IMoviePageProps) {
  return (
    <Modal>
      <MoviePage {...props} />
    </Modal>
  );
}
