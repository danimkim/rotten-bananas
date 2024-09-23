"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Searchbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";

  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchInput || searchInput === q) return;

    router.push(`/search?q=${searchInput}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInput(e.target.value);

  useEffect(() => {
    setSearchInput(q);
  }, [q]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchInput}
        onChange={handleChange}
      />
      <button type="submit">검색</button>
    </form>
  );
}
