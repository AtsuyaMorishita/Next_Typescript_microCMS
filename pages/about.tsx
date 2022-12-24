import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import { Hero } from "components/hero";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <Hero title="CUBE" subTitle="こちらはaboutページです。" imageOn={false} />
  );
}
