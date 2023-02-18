import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import { Hero } from "components/hero";
import { Container } from "components/container";
import { Meta } from "components/meta";
import { GetStaticProps } from "next";
import { getAllPosts } from "lib/api";
import { Posts } from "components/posts";
import { eyecatchLocal } from "lib/constants";

const inter = Inter({ subsets: ["latin"] });

export default function Blog({ posts }: any) {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />

      <Hero title="CUBE" subTitle="こちらはブログページです。" />

      <Posts posts={posts} />
    </Container>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();

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
