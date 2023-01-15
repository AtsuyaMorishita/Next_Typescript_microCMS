import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { FadeAnimation } from "./fadeAnimation";

type postsType = {
  title: string;
  slug: string;
  eyecatch: any;
};

export const Posts = ({ posts }: any) => {
  console.log(posts);
  return (
    <SGridContainer>
      {posts.map(({ title, slug, eyecatch }: postsType) => {
        return (
          <FadeAnimation>
            <article key={slug}>
              <Link href={`/blog/${slug}`}>
                <SThumb>
                  <SImage
                    src={eyecatch.url}
                    alt=""
                    fill
                    sizes="(min-width: 1152px) 576px, 50vw"
                  />
                </SThumb>
                <STitle>{title}</STitle>
              </Link>
            </article>
          </FadeAnimation>
        );
      })}
    </SGridContainer>
  );
};

const SGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-jump);
  margin-top: var(--space-xs);
  margin-bottom: var(--space-lg);
`;

const STitle = styled.h2`
  margin-top: 0.5em;
  font-size: var(--small-heading3);
  font-weight: 400;
`;

const SThumb = styled.figure`
  display: block;
  object-fit: contain;
  position: relative;
  aspect-ratio: 16/9;
`;

const SImage = styled(Image)`
  object-fit: cover;
`;
