import Head from "next/head";
//サイトに関する情報
import { siteMeta } from "lib/constants";
import { useRouter } from "next/router";
const { siteTitle, siteDesc, siteUrl, siteLocate, siteType, siteIcon } =
  siteMeta;

//汎用のOGP画像
import siteImg from "images/ogp.jpg";

//型定義
type Props = {
  pageTitle?: string;
  pageDesc?: string;
  pageImg?: any;
  pageImgW?: any;
  pageImgH?: any;
};

export const Meta = (props: Props) => {
  const { pageTitle, pageDesc, pageImg, pageImgW, pageImgH } = props;

  //ページタイトル
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;

  //ページ説明
  const desc = pageDesc ? pageDesc : siteDesc;

  //ページのURL
  const router = useRouter();
  const url = `${siteUrl}${router.asPath}`;

  //OGP画像
  const img = pageImg || siteImg.src;
  const imgW = pageImgW || siteImg.width;
  const imgH = pageImgH || siteImg.height;
  const imgUrl = img.startsWith("https") ? img : `${siteUrl}${img}`;

  return (
    <Head>
      {/* {title} */}
      <title>{title}</title>
      <meta property="og:title" content={title} />
      {/* {description} */}
      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />
      {/* {url} */}
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      {/* {type...etc} */}
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:locate" content={siteLocate} />
      {/* {icon} */}
      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />
      {/* {OGP画像} */}
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={imgW} />
      <meta property="og:image:height" content={imgH} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
