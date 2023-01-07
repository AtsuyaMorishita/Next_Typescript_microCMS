import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import styled from "styled-components";

type catType = {
  //配列inオブジェクトの型指定
  categories: { name: string; slug: string }[];
};

/**
 * categoriesは1つの配列なので、{categories}という記述で中のオブジェクトを1つずつ取り出している
 * propsで受け取った配列の中のオブジェクトをmap関数でループさせている
 */
export const CategoryList = ({ categories }: catType) => {
  return (
    <SFlexContainer>
      <SHeading>
        <FontAwesomeIcon icon={faFolderOpen} />
        <span className="sr-only">Categories</span>
      </SHeading>
      <SList>
        {/* {categoriesの中のkeyを取り出しやすく{}でしている} */}
        {categories.map(({ slug, name }) => (
          <SItem key={slug}>
            <SLink href={`/blog/category/${slug}`}>{name}</SLink>
          </SItem>
        ))}
      </SList>
    </SFlexContainer>
  );
};

const SFlexContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1.25rem;
  color: var(--gray-50);
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const SHeading = styled.h3`
  font-size: var(--small-heading2);
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const SList = styled.ul`
  display: block;
  width: 100%;
  display: flex;
  align-items: baseline;
  gap: 1.25rem;
  color: var(--gray-50);
  font-size: var(--small-heading3);
  gap: 0.75rem;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const SItem = styled.li`
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const SLink = styled(Link)`
  @media (min-width: 768px) {
    display: block;
  }
`;
