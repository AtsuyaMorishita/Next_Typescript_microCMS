import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

type fadeAnimationType = {
  children: ReactNode;
};

export const FadeAnimation = (props: fadeAnimationType) => {
  const { children } = props;

  //スクロールイベントのオプション
  const { ref, inView } = useInView({
    rootMargin: "-100px",
    triggerOnce: true,
  });

  return (
    //スクロールさせたい要素を囲む
    <SFadeElem inView={inView} ref={ref}>
      {children}
    </SFadeElem>
  );
};

//要素の表示タイミングをtrueかfalseで受け取り、cssを切り替える
const SFadeElem = styled.span<{ inView: boolean }>`
  display: inline-block;
  transition: opacity 0.5s cubic-bezier(0.47, 0, 0.745, 0.715);
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;
