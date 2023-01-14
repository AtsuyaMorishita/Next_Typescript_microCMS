import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "components/layout";

//Font Awesomeの設定
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

//プログレスバー(https://blog.parity-box.com/posts/diary/2021/08/25)
import NextNprogress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextNprogress
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        startPosition={0.3}
        color="#29D"
      />
      <Component {...pageProps} />
    </Layout>
  );
}
