import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import { ConvertDate } from "./convertDate";

type Props = {
  title: string;
  subTitle: string;
  publish?: string;
};

export const PostHeader = (props: Props) => {
  const { title, subTitle, publish } = props;

  return (
    <SStack>
      <SSubTitle>{subTitle}</SSubTitle>
      <STitle>{title}</STitle>
      {publish && (
        <SPublish>
          <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
          <ConvertDate dateISO={publish} />
        </SPublish>
      )}
    </SStack>
  );
};

const SStack = styled.div`
  padding: var(--space-sm) 0;

  > * + * {
    margin-top: var(--stack-space, 1em);
  }
`;

const SSubTitle = styled.p`
  font-size: var(--small-heading2);
  font-weight: 700;
`;

const STitle = styled.h1`
  --stack-space: 0.2em;
`;

const SPublish = styled.div`
  display: flex;
  gap: 0.5em;
  color: var(--gray-50);
  font-size: var(--small-heading3);
`;
