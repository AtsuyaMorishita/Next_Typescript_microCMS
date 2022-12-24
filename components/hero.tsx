import styled from "styled-components";

//型定義
type Props = {
  title: string;
  subTitle: string;
  imageOn: boolean;
};

export const Hero = (props: Props) => {
  const { title, subTitle, imageOn } = props;

  return (
    <SText>
      <STitle>{title}</STitle>
      <SSubTitle>{subTitle}</SSubTitle>
      {imageOn && <figure>[画像]</figure>}
    </SText>
  );
};

//styled-component
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
