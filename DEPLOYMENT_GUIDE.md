# 📦 Vercel デプロイガイド

## 準備

### 1. GitHub リポジトリを作成

```bash
# ローカルリポジトリを初期化
git init
git add .
git commit -m "Initial commit: YORIMITI website"

# GitHub にプッシュ
git remote add origin https://github.com/yorimiti/yorimiti-site.git
git branch -M main
git push -u origin main
```

### 2. Vercel アカウント作成

- URL: https://vercel.com
- Sign up with GitHub を選択
- リポジトリの権限を許可

---

## デプロイ手順

### ステップ 1：Vercel ダッシュボード

1. https://vercel.com/dashboard にアクセス
2. 「Add New...」をクリック
3. 「Project」を選択

### ステップ 2：リポジトリ選択

1. GitHub アカウントを接続
2. `yorimiti/yorimiti-site` を選択
3. 「Import」をクリック

### ステップ 3：プロジェクト設定

```
Framework Preset: Next.js
Build Command: next build（デフォルト）
Output Directory: .next（デフォルト）
```

**設定確認後、「Deploy」をクリック**

### ステップ 4：環境変数設定

Vercel ダッシュボード → Settings → Environment Variables

```
FORMSPREE_FORM_ID = maqaoblg
NEXT_PUBLIC_SITE_URL = https://yorimiti.jp
```

---

## ドメイン設定

### yorimiti.jp を設定

#### ステップ 1：Vercel ドメイン追加

1. Vercel ダッシュボード → Settings → Domains
2. 「Add」をクリック
3. `yorimiti.jp` を入力
4. 「Add Domain」をクリック

#### ステップ 2：DNS 設定（Google Domains など）

Google Workspace で `yorimiti.jp` を管理している場合：

1. Google Workspace 管理コンソール
2. ドメイン → DNS 設定
3. Vercel が表示する DNS レコードを追加
   ```
   例：
   Name: www
   Type: CNAME
   Data: cname.vercel-dns.com
   ```

#### ステップ 3：確認

Vercel が DNS を確認するまで待機（最大 48 時間）

---

## SSL 証明書

**Vercel が自動的に Let's Encrypt の SSL 証明書を生成します。**

特別な設定は不要。自動的に HTTPS で公開されます。

---

## 自動デプロイ設定

GitHub に push すると、自動的に Vercel がビルド＆デプロイします。

```bash
# ローカルで編集
# ...編集完了...

git add .
git commit -m "Update services description"
git push origin main

# Vercel が自動デプロイ（1-2分）
```

---

## 本番環境確認

### デプロイ後

1. Vercel ダッシュボード → Deployments
2. 最新デプロイの「Visit」をクリック
3. サイトが正常に表示されるか確認

### チェックリスト

- [ ] ナビゲーションが動作している
- [ ] YouTube 動画が埋め込まれている
- [ ] お問い合わせフォームが表示されている
- [ ] ダークモード×グラデーション が正しく表示されている
- [ ] レスポンシブデザイン（モバイル表示）が正常
- [ ] お問い合わせ送信で Discord に通知が来る

---

## トラブルシューティング

### デプロイが失敗する

**ログを確認**
1. Vercel ダッシュボード → Deployments
2. 失敗したデプロイをクリック
3. Build ログを確認

**よくある原因**
- `package.json` の依存関係エラー
- npm install が失敗
- next.config.js の構文エラー

**解決方法**
```bash
# ローカルで確認
npm install
npm run build
```

### フォーム送信が動作しない

- Formspree フォームID が正しいか確認
- `FORMSPREE_FORM_ID=maqaoblg` が環境変数に設定されているか確認
- Formspree ダッシュボードでフォームが「Published」か確認

### ドメイン接続エラー

- DNS レコードが正しく設定されているか確認
- 反映に時間がかかることがある（24-48時間）
- `nslookup yorimiti.jp` でテスト

---

## パフォーマンス最適化

### Vercel Analytics

1. Vercel ダッシュボール → Settings → Analytics
2. 「Enable Analytics」をクリック
3. デプロイ後、数分でデータが表示されます

### PageSpeed Insights

https://pagespeed.web.dev で確認：
- **目標**: Lighthouse スコア 90以上
- 最適化方法: 画像圧縮、キャッシュ設定など

---

## まとめ

```
ローカル開発
    ↓
GitHub にプッシュ
    ↓
Vercel が自動ビルド＆デプロイ
    ↓
yorimiti.jp でリアルタイム公開 ✅
```

**公開後は、自動デプロイで常に最新版が公開されます。**

---

## 質問・サポート

何か問題が発生した場合は、contact@yorimiti.jp までお問い合わせください。

**デプロイ完了おめでとうございます！** 🎉
