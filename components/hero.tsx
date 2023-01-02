import Image from "next/image";
import styled from "styled-components";
import cube from "images/cube.jpg";

//型定義
type Props = {
  title: string;
  subTitle: string;
  imageOn?: boolean;
};

export const Hero = (props: Props) => {
  const { title, subTitle, imageOn } = props;

  return (
    <SFlexContainer>
      <SText>
        <STitle>{title}</STitle>
        <SSubTitle>{subTitle}</SSubTitle>
      </SText>
      {imageOn && (
        <SFigure>
          <Image src={cube} alt="" fill priority placeholder="blur" />
        </SFigure>
      )}
    </SFlexContainer>
  );
};

//styled-component
const SFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    justify-content: space-between;
    flex-direction: row;
  }
`;

const SText = styled.div`
  padding-top: calc(var(--display) * 0.5);
  padding-bottom: calc(var(--display) * 0.7);
`;

const STitle = styled.h1`
  font-size: var(--display);
  font-weight: 900;
  letter-spacing: 0.15em;
`;

const SSubTitle = styled.p`
  font-size: var(--small-heading2);
`;

const SFigure = styled.figure`
  img {
    object-fit: contain;
    position: relative !important;
    width: auto !important;
    @media (min-width: 768px) {
      max-width: 576px;
      width: 100% !important;
    }
  }
`;
