# detect-categories-ja

`npm i detect-categories-ja`

## 概要

```
import { detectCategories } from "detect-categories-ja";
const categories = await detectCategories(text);
```

以下のカテゴリに対応しています

- 災害
- 感染症
- 事故
- 事件
- 児童虐待
- 薬物乱用
- 貧困
- 政治
- 日経平均
- スポーツ
- 精神障害
- 身体障害

## データ形式

```
[
  {
    id: 'hoge',
    name: 'ほげ',
    count: 4
  }
]
```
