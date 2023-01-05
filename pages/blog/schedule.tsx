import { Container } from "components/container";
import { PostHeader } from "components/postHeader";
import { getPostBySlug } from "lib/api";

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
      </article>
    </Container>
  );
}

/**
 * asyncを付けて関数を宣言すると非同期関数を定義することができる
 * 非同期関数の返り値は、特別な処理をしなくてもPromiseオブジェクトになる
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

  // TODO: ▼ 後から削除する ▼

  // const resPromise = client.get({
  //   endpoint: "blogs",
  // });

  /**
   * awaitはPromiseオブジェクトの状態を評価し、
   * その状態がFulfilledかRejectedに変わるまで待ち、変わってから次の処理へ進む
   * ・Fulfilled : 処理が成功した時
   * ・Rejected : 処理が失敗した時
   * ・Pending : FulfilledでもRejectedでもない状態
   */
  // try {
  //   const res = await resPromise;
  //   console.log(res);
  // } catch (err) {
  //   console.log(err);
  // }

  // return {
  //   props: {},
  // };
}
