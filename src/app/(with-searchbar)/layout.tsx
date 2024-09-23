import Searchbar from "./components/Searchbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Searchbar />
      {children}
    </>
  );
}
