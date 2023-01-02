import Head from "next/head";
import Image from "next/image";
import eyeCatch from "images/about.jpg";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import { Hero } from "components/hero";
import { Container } from "components/container";
import { PostBody } from "components/postBody";
import { Contact } from "components/contact";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/twoColumn";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <Container>
      <Hero title="CUBE" subTitle="こちらはaboutページです。" />
      <SFigure>
        <Image src={eyeCatch} alt="" fill priority placeholder="blur" />
      </SFigure>
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。
              こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。
            </p>
            <h2>こちらはダミーテキストです。こちらはダミーテキストです。</h2>
            <p>
              こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。
              こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。
            </p>
            s
            <p>
              こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。
              こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。
            </p>
            <h3>こちらはダミーテキストです。</h3>
            <p>
              こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。
              こちらはダミーテキストです。こちらはダミーテキストです。こちらはダミーテキストです。
            </p>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}

const SFigure = styled.figure`
  img {
    object-fit: contain;
    position: relative !important;
    max-width: 1152px;
  }
`;
