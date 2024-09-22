interface IProps {
  searchParams: {
    q?: string;
  };
}

export default function Page({ searchParams }: IProps) {
  return <div>검색결과: {searchParams.q || ""}</div>;
}
