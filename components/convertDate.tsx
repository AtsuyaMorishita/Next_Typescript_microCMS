import { format, parseISO } from "date-fns";
import ja from "date-fns/locale/ja";

type ConvertDateType = {
  dateISO?: any;
};

export const ConvertDate = (props: ConvertDateType) => {
  const { dateISO } = props;

  /**
   * 受け取った日付フォーマットを変換する
   */
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), "yyy年MM月dd日", {
        locale: ja,
      })}
    </time>
  );
};
