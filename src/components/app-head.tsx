import Head from "next/head";

interface IProps {
  pageTitle: string;
  title: string;
  imageUrl?: string;
  desc: string;
}

export default function AppHead({ pageTitle, title, imageUrl, desc }: IProps) {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta property="og:image" content={imageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
    </Head>
  );
}
