import Link from "next/link";
import styled from "styled-components";

type Props = {
  /**
   * 呼び出し元でlogoboxがあればtrue、なければfalse
   * logoBoxが未記載の時にエラーが出ないようにハテナをつける
   */
  logobox?: boolean;
};

export const Logo = (props: Props) => {
  const { logobox } = props;

  //型定義されている場合、returnの中は定義されたオブジェクトしか使えない
  return (
    <>
      {/* {propsで受け取ったlogoBoxの値をlogoBoxへ再代入している？} */}
      <SLogoLink href="/" logobox={logobox}>
        CUBE
      </SLogoLink>
    </>
  );
};

const SLogoLink = styled(Link)<Props>`
  //ロゴ共通
  font-size: var(--heading2);
  font-weight: 700;
  letter-spacing: 0.15em;

  //ロゴ ボックススタイルのみ
  //logoboxのtrueかfalseかで条件分岐
  display: ${({ logobox }) => logobox && "inline-block"};
  padding: ${({ logobox }) => logobox && "1em 2em"};
  background-color: ${({ logobox }) => logobox && "var(--gray-75)"};
  color: ${({ logobox }) => logobox && "var(--white)"};
  font-size: ${({ logobox }) => logobox && "var(--small-heading2)"};
`;
