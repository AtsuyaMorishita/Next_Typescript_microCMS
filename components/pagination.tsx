import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styled from "styled-components";

type pageNationType = {
  prevText?: string;
  prevUrl?: string;
  nextText?: string;
  nextUrl?: string;
};

export const Pagination = (props: pageNationType) => {
  const { prevText = "", prevUrl = "", nextText = "", nextUrl = "" } = props;

  return (
    <SPaginationWrap>
      {prevText && prevUrl && (
        <li>
          <SIconText href={prevUrl}>
            <FontAwesomeIcon icon={faChevronLeft} color="var(--gray-25)" />
            <span>{prevText}</span>
          </SIconText>
        </li>
      )}
      {nextText && nextUrl && (
        <SPaginationNext>
          <SIconText href={nextUrl}>
            <span>{nextText}</span>
            <FontAwesomeIcon icon={faChevronRight} color="var(--gray-25)" />
          </SIconText>
        </SPaginationNext>
      )}
    </SPaginationWrap>
  );
};

const SPaginationWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: var(--space-lg) 0;
  gap: 1em;
`;

const SPaginationNext = styled.li`
  margin-left: auto;
`;

const SIconText = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;
