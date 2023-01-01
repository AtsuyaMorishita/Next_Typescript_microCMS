import styled from "styled-components";

export const Contact = () => {
  return (
    <SSstack>
      <SHeading>Contact</SHeading>
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
