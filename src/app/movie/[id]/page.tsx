interface IProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: IProps) {
  return <div>영화 상세 페이지: {params.id}</div>;
}
