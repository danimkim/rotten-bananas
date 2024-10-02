import { card } from "../../../styled-system/recipes";

export default function MovieCardSkeleton() {
  return <article className={card({ type: "skeleton" })}></article>;
}
