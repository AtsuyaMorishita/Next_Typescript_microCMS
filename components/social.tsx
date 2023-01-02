import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import styled, { css } from "styled-components";

type Props = {
  iconSize?: string;
};

export const Social = (props: Props) => {
  //デフォルトは24pxに設定
  const { iconSize = "24px" } = props;

  return (
    //propsで渡された値をulタグのfont-sizeに設定
    <SFaList style={{ fontSize: iconSize }}>
      <li>
        <a href="">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="">
          <FontAwesomeIcon icon={faFacebook} />
          <span className="sr-only">Facebook</span>
        </a>
      </li>
      <li>
        <a href="">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">GitHub</span>
        </a>
      </li>
    </SFaList>
  );
};

const SFaList = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 1.5em;
`;
