import styled from "styled-components";
import { Container } from "./container";
import { Logo } from "./logo";
import { Nav } from "./nav";

export const Header = () => {
  return (
    <header>
      <Container large>
        <SFlexContainer>
          <Logo logobox="true" />
          <Nav />
        </SFlexContainer>
      </Container>
    </header>
  );
};

const SFlexContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
