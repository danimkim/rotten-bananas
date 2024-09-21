import AppHead from "@/components/app-head";
import { meta } from "@/constants";

export default function NotFound() {
  return (
    <>
      <AppHead
        pageTitle={meta.default.pageTitle}
        title={meta.default.title}
        desc={meta.default.desc}
      />
      <div>Not Found 404 존재하지 않는 페이지입니다.</div>
    </>
  );
}
