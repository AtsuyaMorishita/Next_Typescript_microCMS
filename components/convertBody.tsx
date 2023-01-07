import parse, { DOMNode, HTMLReactParserOptions } from "html-react-parser";

type convertBodyType = {
  contentHTML?: any;
};

export const ConvertBody = (props: convertBodyType) => {
  const { contentHTML } = props;

  const html = contentHTML;

  const options: HTMLReactParserOptions = {
    replace: (domNode: DOMNode) => {
      
    },
  };

  parse(html, options);

  options;
};
