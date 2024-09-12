import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./searchable-layout.module.css";
interface IProps {
  children: React.ReactNode;
}

export default function SearchableLayout({ children }: IProps) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const q = router.query.q as string;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    if (q === search) return;

    router.push(`/search?q=${search}`);
  };

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          placeholder="검색어를 입력해주세요..."
          onChange={handleChange}
          value={search}
          className={styles.searchBar}
        />
        <button type="submit" aria-label="Search" className={styles.searchBtn}>
          검색
        </button>
      </form>
      {children}
    </>
  );
}
