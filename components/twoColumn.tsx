import { ReactNode } from "react";
import styled from "styled-components";

/**
 * 型定義
 */
type Props = {
  children: ReactNode;
};

/**
 * jsx
 */

//2カラム全体
export const TwoColumn = (props: Props) => {
  const { children } = props;
  return <SFlexContainer>{children}</SFlexContainer>;
};

//2カラムメイン
export const TwoColumnMain = (props: Props) => {
  const { children } = props;
  return <SMain>{children}</SMain>;
};

//2カラムサイド
export const TwoColumnSidebar = (props: Props) => {
  const { children } = props;
  return <SSide>{children}</SSide>;
};

/**
 * styled-component
 */

//2カラム全体
const SFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin: var(--space-md) 0 var(--space-lg);

  @media screen and (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

//2カラムメイン
const SMain = styled.div`
  width: 768px;
`;

//2カラムサイド
const SSide = styled.div`
  width: 240px;
  * {
    text-align: right;
  }
  :is(descent-override, ul) {
    width: fit-content;
    margin-left: auto;
    place-items: flex-end;
    place-content: flex-end;
  }

  @media screen and (min-width: 767px) {
    position: sticky;
    top: 40px;
    align-self: flex-start;
  }
`;
