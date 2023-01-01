import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  large?: boolean;
};

export const Container = (props: Props) => {
  const { children, large } = props;

  return <SContainer large={large}>{children}</SContainer>;
};

const SContainer = styled.div<Props>`
  width: 92%;
  max-width: 1152px;
  margin: 0 auto;
  //large属性がある場合のcss
  max-width: ${({ large }) => large && "1280px"};
`;
