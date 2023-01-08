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
export const getPostBySlug = async (slug: string) => {
  try {
    //slugが一致する記事データを取得
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (err) {
    console.log("~~ getPostBySlug ~~");
    console.log(err);
  }
};

/**
 * 全ての記事データを取得する
 */
export const getAllSlugs = async (limit = 100) => {
  try {
    const slugs = await client.get({
      //上限100件で全てのタイトルとスラッグを取得する
      endpoint: "blogs",
      queries: { fields: "title,slug", orders: "-publishDate", limit: limit },
    });
    return slugs.contents;
  } catch (err) {
    console.log("~~getAllSlugs~~");
    console.log(err);
  }
};
