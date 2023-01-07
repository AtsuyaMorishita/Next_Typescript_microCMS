import Link from "next/link";

// interface postCategoryType {
//   category: any;
// }

// export const PostCategories = (props: postCategoryType) => {
//   const { category } = props;

//   return (
//     <ul>
//       {categoryes.map(({ name, slug }) => (
//         <li key={slug}>
//           <Link href={`/blog/category/${slug}`}>{name}</Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

interface Category {
  name: string;
  slug: string;
}

interface Props {
  categories: Category[];
}

const categoryes: Category[] = [];

const CategoryList: React.FC<Props> = ({ categories }) => {
  return (
    <ul>
      {categories.map(({ name, slug }) => (
        <li key={slug}>
          <Link href={`/blog/category/${slug}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
