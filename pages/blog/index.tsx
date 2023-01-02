import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import { Hero } from "components/hero";
import { Container } from "components/container";

const inter = Inter({ subsets: ["latin"] });

export default function Blog() {
  return (
    <Container>
      <Hero title="CUBE" subTitle="こちらはブログページです。" />
    </Container>
  );
}
