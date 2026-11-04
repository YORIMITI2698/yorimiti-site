# サイトのメタ情報・alt 監査結果

## 監査範囲・方法

- 実施日: 2026-11-04。対象: `codex/issue-1-audit`、監査元コミット `b7c4b5c93a667283d0aebe43d33084f46ca522ad`。
- `AGENTS.md` と `tasks/20261102-site-meta-audit.md` を確認し、`app/`、`pages/`、共通コンポーネント、画像参照元データを静的に点検した。
- 本人の今回の指定を優先し、main の最新化・切替・push は行わず、現在のチェックアウトを監査した。コード・設定の変更、依存関係のインストール、ビルド、外部アクセス・送信・削除は行っていない。
- 以下はソース定義に基づく判定。実際に生成・配信された HTML の確認結果ではない。

## 1. ルートごとの一覧表

title はルートの定義と親の `%s｜YORIMITI` テンプレートから得られる想定値。OGP は `og:title / og:description / og:image` の順に示す。

| ルート | title | description | OGP（title / description / image） | 根拠 |
|---|---|---|---|---|
| `/` | YORIMITI｜ドローン空撮・ボカロMV編集 | YORIMITI（よりみち）は、ドローン空撮（FPV/安定型）・ボカロMV編集・動画制作・アニメーション・楽曲MIX/マスタリングまで手がける映像制作チーム。「カタチも、視点も、もっと自由に。」 | あり / あり / あり（`/og.png`） | `app/layout.js` |
| `/about` | プロフィール｜YORIMITI | 代表・上原幸大とYORIMITIのメンバー紹介。ドローン空撮とアニメーション制作を中心に、独自の視点で各プロジェクトの世界観を構築します。 | あり / あり / なし（下層で openGraph を再定義、images 未指定） | `app/about/layout.js` |
| `/ayumi` | あゆみ｜YORIMITI | 映像制作・ボカロMV編集の開始から空撮業務、VOIDLABとの提携・RE::Locus立ち上げまで。YORIMITIのこれまでの歩み。 | あり / あり / なし（下層で openGraph を再定義、images 未指定） | `app/ayumi/layout.js` |
| `/contact` | お問い合わせ｜YORIMITI | 映像制作・MV・ドローン空撮・グラフィックのご相談やお見積りはこちら。お気軽にお問い合わせください。 | あり / あり / なし（下層で openGraph を再定義、images 未指定） | `app/contact/layout.js` |
| `/graphic` | グラフィックデザイン｜YORIMITI | ロゴデザイン、YouTube/SNSサムネイル、UI/UX、バナーまで。ブランドの世界観を表現するグラフィック制作。 | あり / あり / なし（下層で openGraph を再定義、images 未指定） | `app/graphic/layout.js` |
| `/graphic-service` | グラフィックサービス｜YORIMITI | ロゴ・サムネイル・UI/UXデザイン。プロセスとアイデアから形にしたグラフィックデザインをまとめています。 | あり / あり / なし（下層で openGraph を再定義、images 未指定） | `app/graphic-service/layout.js` |
| `/moon` | YORIMITIについて｜YORIMITI | 「カタチも、視点も、もっと自由に。」YORIMITIが大切にしている想いとコンセプトをご紹介します。 | あり / あり / なし（下層で openGraph を再定義、images 未指定） | `app/moon/layout.js` |
| `/news` | ニュース｜YORIMITI | YORIMITIからの最新のお知らせ・活動情報をお届けします。 | あり / あり / なし（下層で openGraph を再定義、images 未指定） | `app/news/layout.js` |
| `/pricing` | 料金プラン｜YORIMITI | 撮影・編集・フルMV制作の料金プラン。ドローン空撮から企画・アニメーション・マスタリングまで、目的に合わせて選べます。 | あり / あり / なし（下層で openGraph を再定義、images 未指定） | `app/pricing/layout.js` |
| `/services` | サービス｜YORIMITI | ドローン空撮（FPV・安定型）、アニメーションMV制作、楽曲MIX・マスタリング（VOiD-LAB.提携）まで。YORIMITIの映像制作サービス一覧です。 | あり / あり / なし（下層で openGraph を再定義、images 未指定） | `app/services/layout.js` |
| `/works` | 制作実績｜YORIMITI | YORIMITIが手がけたボカロMV・ドローン空撮・アニメーション作品をご紹介します。 | あり / あり / なし（下層で openGraph を再定義、images 未指定） | `app/works/layout.js` |

### 明らかな不整合

- 11ページとも title と description の定義があり、タイトルの完全重複・description の欠落は見つからない。各下層の OGP title / description も定義されている。
- **下層10ページの OGP 画像指定が欠落**。`app/layout.js:20` の `openGraph.images` は `/og.png` を指定するが、各下層 `layout.js:5` は別の `openGraph` オブジェクトを定義し、`images` を指定していない。Next.js の metadata の浅いマージでは親の openGraph 全体が置き換わるため、親画像の継承を前提にできない。`public/og.png` 自体は存在する。生成 HTML は未確認（要確認参照）。
- `/graphic-service` の本文は「Graphic & Mix」「グラフィックデザインとMIXサービス」（`app/graphic-service/page.js`）だが、title・description・OGP はグラフィックだけを説明する（`app/graphic-service/layout.js:2-7`）。MIX の掲載内容がメタ情報に反映されていない。

### ページ以外のルート

| ルート | 種別 | title / description / OGP | 根拠 |
|---|---|---|---|
| `/api/news` | JSON API | 対象外（HTMLページではない） | `pages/api/news.js` |
| `/api/youtube` | JSON API | 対象外（HTMLページではない） | `pages/api/youtube.js` |
| `/sitemap.xml` | サイトマップ | 対象外 | `app/sitemap.js` |
| `/robots.txt` | robots | 対象外 | `app/robots.js` |

`pages/` に通常のページはなく、API 2件のみ。`app/works/page.js.backup` はルートとして扱わない。画像メタデータ用の `app/icon.png`、`app/apple-icon.png` は HTML ページでも img 要素でもない。

## 2. alt の問題一覧（ファイルパス付き）

現行の `.js` 内の img / next/image は計32記述箇所。全箇所に alt 属性があり、属性の欠落・リテラルの空 alt は見つからない。次の項目はデータ次第で空になる可能性として区別する。

| ファイル・行 | 該当記述 | 判定・影響 |
|---|---|---|
| `app/news/page.js:60` | `alt={n.title \|\| ''}` | タイトルが空なら空 alt。画像表示条件は `n.image` のみ。現データでの発生なし。 |
| `components/HomeNews.js:43` | `alt={n.title \|\| ''}` | 同条件。`app/page.js` → `HomeContactLink` → `HomeNews` を経由して `/` に表示される。現データでの発生なし。 |

- `pages/api/news.js` は本文だけの項目も返すため、タイトルなし・本文あり・画像ありの行を追加すると上記の空 alt が発生し得る。`public/news/data.csv` の15行はすべて画像・タイトルがあり、現時点の空 alt 発生は確認されない。空 alt が適切な装飾画像かどうかは要確認。
- `app/services/page.js:225` の `alt={section.title}` は条件付き描画。title が空の RE::Locus 紹介セクションに `section.image` はなく、現在のデータで空 alt の画像が表示されるとは判定しない。複数画像側（同:235）の title はすべて非空。
- メンバー画像（`app/about/page.js:164`、`app/moon/page.js:215`）とサービスのロゴ（`app/services/page.js:172`）は、現在の固定データでは非空の名前を参照する。

## 3. 優先度つき推奨修正トップ3

1. **高: 下層10ページの OGP 画像指定を補う。** 各 `app/*/layout.js` の `openGraph` に共通画像を明示するか、共通定義を再利用する。修正後は全11ページの生成 HTML で `og:title`、`og:description`、`og:image` を確認する。
2. **中: ニュース画像の代替テキスト方針を決め、空タイトル入力時も意図した alt にする。** 対象は `app/news/page.js:60`、`components/HomeNews.js:43` と `pages/api/news.js` の入力処理。内容を伝える画像は画像の説明を用意し、装飾画像なら意図的な空 alt とする。現データの不具合ではなく、入力変更で起きる問題への予防。
3. **中: `/graphic-service` のメタ情報を本文の Graphic & Mix に合わせる。** `app/graphic-service/layout.js` の title・description・OGP 文言に MIX を反映する案を検討する。正式なサービス名・提供範囲を確認してから修正する。

## 要確認

- 本番の生成 HTML と SNS 共有プレビューは未検証。特に下層の `og:image` の出力・画像取得可否は、Muse 側の検収時に確認する。Twitter メタデータの images は親に定義されているが、OGP 画像指定とは別扱い。
- YouTube 由来の `video.title` は外部データのため、空・未定義の実データが存在するか未確認。`pages/api/youtube.js:56-61` は動画IDを検査してタイトルをそのまま返す。利用箇所は `app/works/page.js:129`、`components/HomeWorks.js:99`。`components/WorksSection.js:121`、`components/WorksPageSection.js:127` にも同形の記述があるが、現行ページからの参照は見つからない。空 alt の発生件数は断定しない。
- ニュース画像が装飾目的か、本文以外の情報を伝える画像かは未判定。空 alt 自体を一律に不具合とは扱わない。
- メタ情報の正式なサービス名・対象事業の表現は本人確認が必要。`/moon` と `/about` はプロフィール情報を一部共有しているが、今回の監査で title の完全重複はない。
- `design-v0.1.md` はローカルに見つからず、Drive 正本も未参照。今回の指定ブリーフを基準に監査した。main・リモートとの差分や最新性も未確認。
