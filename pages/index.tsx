import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import { Hero } from "components/hero";
import { Container } from "components/container";
import { Meta } from "components/meta";
import { Posts } from "components/posts";
import { getAllPosts } from "lib/api";
import { eyecatchLocal } from "lib/constants";
import { Pagination } from "components/pagination";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }: any) {
  return (
    <Container>
      {/* [pageTitleとPageDescがないため、デフォルトに設定される] */}
      <Meta />

      <Hero title="CUBE" subTitle="こちらはトップページです。" imageOn />

      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More Posts" />
    </Container>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts(4);

  //アイキャッチが未設定の場合はデフォルトのものを使用
  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
  }

  return {
    props: {
      posts: posts,
    },
  };
};
