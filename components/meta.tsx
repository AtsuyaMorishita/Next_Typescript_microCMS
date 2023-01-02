import Head from "next/head";
//サイトに関する情報
import { siteMeta } from "lib/constants";
import { useRouter } from "next/router";
const { siteTitle, siteDesc, siteUrl, siteLocate, siteType, siteIcon } =
  siteMeta;

type Props = {
  pageTitle?: string;
  pageDesc?: string;
};

export const Meta = (props: Props) => {
  const { pageTitle, pageDesc } = props;

  //ページタイトル
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;

  //ページ説明
  const desc = pageDesc ? pageDesc : siteDesc;

  //ページのURL
  const router = useRouter();
  const url = `${siteUrl}${router.asPath}`;

  console.log(router);

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />

      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />

      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:locate" content={siteLocate} />

      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />
    </Head>
  );
};
