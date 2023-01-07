import parse from "html-react-parser";
import Image from "next/image";

/**
 * htmlの変換処理をする
 */

type convertBodyType = {
  contentHTML?: any;
};

export const ConvertBody = (props: convertBodyType) => {
  const { contentHTML } = props;

  const contentReact = parse(contentHTML, {
    replace: (domNode: any) => {
      if (domNode.name === "img") {
        const { src, alt, width, height } = domNode.attribs;
        return <Image layout="responsive" src={src} alt={alt} width={width} height={height} />;
      }
    },
  });

  return <>{contentReact}</>;
};
