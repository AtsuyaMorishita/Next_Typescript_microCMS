import { Container } from "components/container";
import { PostHeader } from "components/postHeader";
import { PostBody } from "components/postBody";
import { getPostBySlug } from "lib/api";
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

//記事データの型指定
type blogType = {
  title: any;
  publish: any;
  content: any;
  eyecatch: any;
  categories: any;
};

export default function Schedule(props: blogType) {
  /**
   * 下記getStaticProps関数で指定した各propsを使用する
   */
  const { title, publish, content, eyecatch, categories } = props;

  return (
    <Container>
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
      </article>
    </Container>
  );
}

/**
 * asyncを付けて関数を宣言すると非同期関数を定義することができる
 * 非同期関数の返り値は、特別な処理をしなくてもPromiseオブジェクトになる
 *
 * getStaticPropsでreturnしたpropsは、_app.tsxのpagePropsとなり、
 * それがページコンポーネント(今回の場合はschedule.tsx)に渡される
 */
export async function getStaticProps() {
  //指定するスラッグ名
  const slug = "schedule";
  //指定したスラッグと同じ記事データ api.tsの関数を実行
  const post = await getPostBySlug(slug);

  return {
    props: {
      //記事データを使いやすい形にして、propsとして渡す
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  };
}

const SFigure = styled.figure`
  img {
    object-fit: contain;
    position: relative !important;
    max-width: 1152px;
    width: 100%;
    height: auto;
  }
`;
