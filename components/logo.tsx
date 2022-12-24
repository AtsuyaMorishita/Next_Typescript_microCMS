import Link from "next/link";
import styled from "styled-components";

type Props = {
  /**
   * 呼び出し元でlogoBoxがあればtrue、なければfalse
   * logoBoxが未記載の時にエラーが出ないようにハテナをつける
   */
  logoBox?: boolean;
};

export const Logo = (props: Props) => {
  const { logoBox } = props;

  //型定義されている場合、returnの中は定義されたオブジェクトしか使えない
  return (
    <>
      {/* {propsで受け取ったlogoBoxの値をlogoBoxへ再代入している？} */}
      <SLogoLink href="/" logoBox={logoBox}>
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
  //logoBoxのtrueかfalseかで条件分岐
  display: ${({ logoBox }) => logoBox && "inline-block"};
  padding: ${({ logoBox }) => logoBox && "1em 2em"};
  background-color: ${({ logoBox }) => logoBox && "var(--gray-75)"};
  color: ${({ logoBox }) => logoBox && "var(--white)"};
  font-size: ${({ logoBox }) => logoBox && "var(--small-heading2)"};
`;
