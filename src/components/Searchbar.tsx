"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { css } from "../../styled-system/css";
import { hstack } from "../../styled-system/patterns";

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
    <form
      onSubmit={handleSubmit}
      className={hstack({ gap: "4", height: "50", justify: "space-between" })}
    >
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchInput}
        onChange={handleChange}
        className={inputStyle}
      />
      <button type="submit" className={buttonStyle}>
        검색
      </button>
    </form>
  );
}

const inputStyle = css({
  width: "100%",
  height: "50",
  border: "solid 1px var(--gray-secondary)",
  color: "var(--gray-secondary)",
  borderRadius: "5",
  paddingX: "5",
});

const buttonStyle = css({
  width: "100",
  height: "full",
  bgColor: "var(--gray-primary)",
  color: "var(--white-primary)",
  borderRadius: "5",
  _hover: {
    transition: "all ease-in-out 0.2s",
    bgColor: "var(--gray-secondary)",
  },
});
