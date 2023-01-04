import { client } from "lib/api";

export default function Schedule() {
  return <h1>記事タイトル</h1>;
}

/**
 * asyncを付けて関数を宣言すると非同期関数を定義することができる
 * 非同期関数の返り値は、特別な処理をしなくてもPromiseオブジェクトになる
 */
export async function getStaticProps() {
  const resPromise = client.get({
    endpoint: "blogs",
  });

  /**
   * awaitはPromiseオブジェクトの状態を評価し、
   * その状態がFulfilledかRejectedに変わるまで待ち、変わってから次の処理へ進む
   * ・Fulfilled : 処理が成功した時
   * ・Rejected : 処理が失敗した時
   * ・Pending : FulfilledでもRejectedでもない状態
   */
  try {
    const res = await resPromise;
    console.log(res);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {},
  };
}
