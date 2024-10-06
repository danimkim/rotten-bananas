import { ReviewData } from "@/app/type";

export default function ReviewItem({ data }: { data: ReviewData }) {
  return (
    <>
      <div>
        <p>{data.author}</p>
      </div>
      <p>{data.content}</p>
      <div>
        <span>{data.createdAt}</span>
        <button>삭제하기</button>
      </div>
    </>
  );
}
