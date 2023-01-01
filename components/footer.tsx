import styled from "styled-components";
import { Container } from "./container";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <SFooter>
      <Container>
        <SFlexContainer>
          <Logo />
          [ソーシャル]
        </SFlexContainer>
      </Container>
    </SFooter>
  );
};

const SFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const SFooter = styled.footer`
  padding: var(--space-xl) 0;
  background-color: var(--gray-10);
`;
