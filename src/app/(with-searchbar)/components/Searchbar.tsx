"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Searchbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${searchInput}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInput(e.target.value);

  useEffect(() => {
    const searchParam = searchParams.get("q");

    if (searchParam) {
      setSearchInput(searchParam.toString());
    }
  }, [searchParams]);

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
