import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

export const PostBody = (props: Props) => {
  const { children } = props;
  return <SStack>{children}</SStack>;
};

const SStack = styled.div`
  > * + * {
    margin-top: var(--stack-space, 1.5em);
  }

  h2,
  h3 {
    --stack-space: 2em;

    + * {
      --stack-space: 0.8em;
    }
  }

  p {
    line-height: 1.8;
  }

  ul {
    padding: revert;
    list-style: revert;
  }
`;
