import { Suspense } from "react";
import Searchbar from "./components/Searchbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense>
        <Searchbar />
      </Suspense>
      {children}
    </>
  );
}
