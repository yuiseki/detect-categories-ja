# detect-categories-ja

`npm i detect-categories-ja`

```
import { detectCategories } from "detect-categories-ja";
const categories = await detectCategories(text);
```

## 対応カテゴリ

以下のカテゴリに対応しています

- 災害
  - `src/categories/crisis.json`
- 感染症
  - `src/categories/virus.json`
- 事故
  - `src/categories/accident.json`
- 事件
  - `src/categories/incident.json`
- 児童虐待
  - `src/categories/child_abuse.json`
- 薬物乱用
  - `src/categories/drug_abuse.json`
- 貧困
  - `src/categories/poverty.json`
- 政治
  - `src/categories/politics.json`
- 日経平均
  - `src/categories/nikkei.json`
- スポーツ
  - `src/categories/sports.json`
- 精神障害
  - `src/categories/mental_disorder.json`
- 身体障害
  - `src/categories/physical_disorder.json`

## `categories` のデータ形式

```
[
  {
    id: 'hoge',
    name: 'ほげ',
    count: 1
  },
  {
    id: 'fuga',
    name: 'ふが',
    count: 4
  }
]
```

## 開発方法

- `npm ci`
- `npm test`
