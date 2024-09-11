import { useRouter } from "next/router";

export default function Movie() {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id} 영화 상세 페이지</div>;
}
