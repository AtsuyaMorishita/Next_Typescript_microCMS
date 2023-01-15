# Next.js TypeScript microCMS ブログサイト作成

## 要件

- Next.js(React)環境
- TypeScript を使用
- css は styled-component
- microCMS をヘッドレス導入

## CSS の構成

- グローバルスタイル サイト全体に適用
- styled-component(CSS in JS)でコンポーネントごとに適用

## TODO メモ

- Prettier 導入  
  https://zenn.dev/k_kazukiiiiii/articles/670ebae0005872
- style-components や各種 jsx にスニペット登録をしておく

## 不明点

- footer に social コンポーネントを呼び出すとエラーが起きる
- 記事アイキャッチ画像にブラー画像を設定しようとするとエラーが起きる
- 記事一覧でブラー画像の設定ができない

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# next-react-typescript-microcms
