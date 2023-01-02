import styled from "styled-components";
import { Social } from "./social";

export const Contact = () => {
  return (
    <SSstack>
      <SHeading>Contact</SHeading>
      <Social iconSize="30px" />
      <address>cube.web.mail.address</address>
    </SSstack>
  );
};

const SSstack = styled.div`
  > * + * {
    margin-top: var(--stack-space, 1em);
  }
`;

const SHeading = styled.h3`
  font-size: var(--body);
`;
