import Link from "next/link";
import styled from "styled-components";

export const Nav = () => {
  return (
    <nav>
      <SList>
        <li>
          <SLink href="/">HOME</SLink>
        </li>
        <li>
          <SLink href="/about">ABOUT</SLink>
        </li>
        <li>
          <SLink href="/blog">BLOG</SLink>
        </li>
      </SList>
    </nav>
  );
};

const SList = styled.ul`
  display: flex;
  gap: 2em;
`;

const SLink = styled(Link)`
  @media screen and (max-width: 767px) {
    //遷移後にボタンの色を元に戻す
    -webkit-tap-highlight-color: transparent;
    //クリック時にボタンの色を変える
    &:active {
      color: var(--accent);
    }
  }

  @media screen and (min-width: 767px) {
    &:hover {
      color: var(--accent);
    }
  }
`;
