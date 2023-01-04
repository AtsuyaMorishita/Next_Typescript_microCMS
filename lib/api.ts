import { createClient } from "microcms-js-sdk";

/**
 * .envファイルに記載したキーやドメインを呼び出して使える状態にする
 *
 * .envファイルから参照する環境変数は string | undefined型
 * そのため || "" の部分を書かないとエラーが出ます。
 */
export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || "",
  apiKey: process.env.API_KEY || "",
});

/**
 * 指定したスラッグ(slug)の記事データを取得する
 */
export async function getPostBySlug(slug: string) {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` }, //slugが一致する記事データを取得
    });
    return post.contents[0];
  } catch (err) {
    console.log("~~ getPostBySlug ~~");
    console.log(err);
  }
}
