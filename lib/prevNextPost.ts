/**
 * 前後の記事を取得
 */

export const PrevNextPost = (allSlugs: [], currentSlug: string) => {
  //記事の総数
  const numberOfPosts = allSlugs.length;

  //現在のスラッグと取得したスラッグが一致する記事のインデックスを取得
  const index = allSlugs.findIndex(({ slug }: any) => slug === currentSlug);

  //前の記事データ(titleとslugが入ったオブジェクト)を取得
  const prevPost =
    index + 1 === numberOfPosts ? { title: "", slug: "" } : allSlugs[index + 1];

  //次の記事データ(titleとslugが入ったオブジェクト)を取得
  const nextPost = index === 0 ? { title: "", slug: "" } : allSlugs[index - 1];

  return [prevPost, nextPost];
};
