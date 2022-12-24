import Link from "next/link";
import styled from "styled-components";

type Props = {
  boxStyle?: boolean;
};

export const Logo = () => {
  return (
    <SLogoLink href="/" boxStyle>
      CUBE
    </SLogoLink>
  );
};

const SLogoLink = styled(Link)<Props>`
  font-size: var(--heading2);
  font-weight: 700;
  letter-spacing: 0.15em;

  color: ${({ boxStyle }) => boxStyle && "red"};
`;
