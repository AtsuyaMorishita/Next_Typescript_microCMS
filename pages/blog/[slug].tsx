import { Container } from "components/container";
import { PostHeader } from "components/postHeader";
import { PostBody } from "components/postBody";
import { getAllSlugs, getPostBySlug } from "lib/api";
import Image from "next/image";
import styled from "styled-components";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/twoColumn";
import parse from "html-react-parser";
import { ConvertBody } from "components/convertBody";
import { CategoryList } from "components/postCategories";
import { Meta } from "components/meta";
import { extractText } from "lib/extractText";
import { eyecatchLocal } from "lib/constants";
import { GetStaticPaths, GetStaticProps } from "next";
import { PrevNextPost } from "lib/prevNextPost";
import { Pagination } from "components/pagination";

//記事データの型指定
type blogType = {
  title: string;
  publish: any;
  content: any;
  eyecatch: any;
  categories: any;
  description: string;
  prevPost: any;
  nextPost: any;
};

export default function Post(props: blogType) {
  /**
   * 下記getStaticProps関数で指定した各propsを使用する
   */
  const {
    title,
    publish,
    content,
    eyecatch,
    categories,
    description,
    prevPost,
    nextPost,
  } = props;

  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />

      <article>
        <PostHeader title={title} subTitle="Blog Article" publish={publish} />

        <SFigure>
          <Image
            src={eyecatch.url}
            alt=""
            width={eyecatch.width}
            height={eyecatch.height}
            priority
          />
        </SFigure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <CategoryList categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>

        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  );
}

/**
 * SGの場合はgetStaticPathsでパスを指定する必要がある
 * 今回の場合:GetStaticPathsはなくてもエラーは起きない 理由は調査中
 */
export const getStaticPaths: GetStaticPaths = async () => {
  //全ての記事のタイトルとスラッグを取得 slugとtitleのオブジェクトが格納されている
  const allSlugs = await getAllSlugs(5);

  return {
    /**
     * 受け取ったスラッグの数だけmap関数で配列を再生成している
     * fallbackはpathsにないURLに対する処理している
     */
    paths: allSlugs.map(({ slug }: any) => `/blog/${slug}`),
    fallback: "blocking",
  };
};

/**
 * asyncを付けて関数を宣言すると非同期関数を定義することができる
 * 非同期関数の返り値は、特別な処理をしなくてもPromiseオブジェクトになる
 *
 * getStaticPropsでreturnしたpropsは、_app.tsxのpagePropsとなり、
 * それがページコンポーネント(今回の場合はschedule.tsx)に渡される
 */
export const getStaticProps: GetStaticProps = async (context) => {
  //undefinedの可能性があるプロパティにはてなをつけるとエラーが消える？
  const slug = context.params?.slug;

  //slugがstring以外は除外
  if (typeof slug !== "string") {
    return { notFound: true };
  }

  //getStaticPathで指定したパスのスラッグが関数の引数に入る
  const post = await getPostBySlug(slug);

  //存在しないslugの場合は404エラーを表示する
  if (!post) {
    return { notFound: true };
  } else {
    //投稿本文をextractText関数で切り取る
    const description = extractText(post.content);

    //アイキャッチを設定されてなければデフォルトを使用
    const eyecatch = post.eyecatch ?? eyecatchLocal;

    //前後の記事データを設定
    const allSlugs = await getAllSlugs();
    const [prevPost, nextPost] = PrevNextPost(allSlugs, slug);

    return {
      props: {
        //記事データを使いやすい形にして、propsとして渡す
        //propsはAppコンポーネントへ渡される
        title: post.title,
        publish: post.publishDate,
        content: post.content,
        eyecatch: eyecatch,
        categories: post.categories,
        description: description,
        prevPost: prevPost,
        nextPost: nextPost,
      },
    };
  }
};

const SFigure = styled.figure`
  img {
    object-fit: contain;
    position: relative !important;
    max-width: 1152px;
    width: 100%;
    height: auto;
  }
`;
