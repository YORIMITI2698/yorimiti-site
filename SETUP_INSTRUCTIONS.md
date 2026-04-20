# 🚀 YORIMITI サイト セットアップ＆デプロイ手順

**公開予定日：2026年5月後半**

---

## ⚡ クイックガイド（5分で公開可能）

### ステップ 1：ローカルセットアップ

```bash
# プロジェクトフォルダに移動
cd yorimiti-site

# 依存関係をインストール
npm install

# 開発サーバーで確認
npm run dev

# http://localhost:3000 でサイト確認 ✅
```

### ステップ 2：GitHub にプッシュ

```bash
# Git リポジトリ初期化
git init
git add .
git commit -m "Initial commit: YORIMITI website"

# GitHub リモートを追加
git remote add origin https://github.com/yorimiti/yorimiti-site.git
git branch -M main
git push -u origin main
```

### ステップ 3：Vercel にデプロイ

1. https://vercel.com にアクセス
2. GitHub でサインアップ
3. 「Import Project」をクリック
4. `yorimiti-site` リポジトリを選択
5. 「Deploy」をクリック

**→ 自動デプロイ開始！** 🎉

### ステップ 4：ドメイン接続

```
Vercel ダッシュボール → Settings → Domains
yorimiti.jp を追加
DNS レコード設定（Google Workspace 管理画面）
```

**完了！** 5月後半に自動公開 ✅

---

## 📋 プロジェクト構成

```
yorimiti-site/                # メインプロジェクト
├── app/
│   ├── layout.js             # レイアウト
│   ├── page.js               # メインページ
│   └── globals.css           # グローバルスタイル
├── components/               # React コンポーネント
│   ├── Navbar.js
│   ├── Hero.js
│   ├── Services.js
│   ├── Pricing.js
│   ├── Portfolio.js（YouTube 12本埋め込み）
│   ├── Contact.js（Formspree フォーム）
│   └── Footer.js
├── public/                   # 静的ファイル
├── package.json              # 依存関係
├── next.config.js            # Next.js 設定
├── tailwind.config.js        # Tailwind 設定
├── postcss.config.js
├── vercel.json               # Vercel 設定
├── .env.example              # 環境変数例
├── .gitignore
├── README.md                 # プロジェクト説明
├── DEPLOYMENT_GUIDE.md       # デプロイ詳細ガイド
└── SETUP_INSTRUCTIONS.md     # このファイル
```

---

## ✨ 実装済み機能

### デザイン
- ✅ ダークモード基調（#0a0e27）
- ✅ グラデーション活用（紫→青、ピンク→紫、青→緑）
- ✅ スムーズなアニメーション（Framer Motion）
- ✅ パーティクル背景エフェクト
- ✅ ホバーエフェクト完全対応

### コンテンツ
- ✅ Shooting（撮影）セクション
- ✅ Editing（編集）セクション
- ✅ Animation MV セクション
- ✅ 料金表（3カテゴリ分け）
- ✅ ポートフォリオギャラリー（YouTube 12本）
- ✅ お問い合わせフォーム（Formspree 統合）

### 統合システム
- ✅ Formspree フォーム（フォームID: maqaoblg）
- ✅ Discord 自動通知（Google Apps Script）
- ✅ Gmail 自動受信（graphics@yorumiti.jp）
- ✅ レスポンシブデザイン完全対応

### パフォーマンス
- ✅ Next.js SSG/SSR 最適化
- ✅ Tailwind CSS ツリーシェイキング
- ✅ 動的インポート対応
- ✅ 画像最適化（Vercel 自動）

---

## 🔐 セキュリティ＆SEO

- ✅ HTTPS 自動対応（Vercel）
- ✅ SSL 証明書自動生成
- ✅ セキュリティヘッダー設定済み
- ✅ Meta タグ設定済み
- ✅ Open Graph 対応
- ✅ Sitemap 自動生成対応

---

## 📱 テストチェックリスト

デプロイ前に以下を確認：

### ローカル環境

- [ ] `npm install` 成功
- [ ] `npm run dev` で http://localhost:3000 起動
- [ ] ナビゲーション全て動作
- [ ] YouTube 動画 12本 正常表示
- [ ] お問い合わせフォーム 表示確認
- [ ] ダークモード×グラデーション 正常表示
- [ ] モバイル表示（iPhone, Android）確認
- [ ] `npm run build` 成功

### Vercel デプロイ後

- [ ] サイト表示確認
- [ ] PageSpeed Insights スコア 90以上
- [ ] ドメイン yorimiti.jp 接続確認
- [ ] お問い合わせフォーム送信テスト
- [ ] Discord 通知 確認
- [ ] すべてのリンク動作確認

---

## 🆘 トラブルシューティング

### npm install でエラー

```bash
# Node.js バージョン確認（推奨: 18以上）
node --version

# npm キャッシュクリア
npm cache clean --force

# 再度インストール
npm install
```

### localhost で表示されない

```bash
# ポート 3000 が使用中かもしれません
# 別ポートで起動
npm run dev -- -p 3001
```

### GitHub プッシュ エラー

```bash
# Git 設定確認
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# 再度プッシュ
git push -u origin main
```

### Vercel デプロイ失敗

1. Vercel ダッシュボール → Deployments
2. 失敗したデプロイをクリック
3. Build ログで詳細確認
4. GitHub で修正 → 自動再デプロイ

---

## 📞 サポート

問題が発生した場合：
- contact@yorumiti.jp に連絡
- GitHub Issues で報告

---

## 🎉 公開後の保守

### 定期更新

```bash
# ローカルで編集
# ...編集完了...

# GitHub にプッシュ
git add .
git commit -m "Update [何を更新したか]"
git push origin main

# Vercel が自動デプロイ（1-2分）
```

### よくある更新

- **料金変更**: `components/Pricing.js` を編集
- **ポートフォリオ追加**: `components/Portfolio.js` の `portfolioItems` に YouTube ID 追加
- **サービス説明**: `components/Services.js` を編集

---

## ✅ 完了チェックリスト

- [ ] ローカルセットアップ完了
- [ ] `npm run dev` で動作確認
- [ ] GitHub リポジトリ作成＆プッシュ
- [ ] Vercel アカウント作成
- [ ] Vercel にデプロイ
- [ ] ドメイン yorumiti.jp を接続
- [ ] SSL 証明書確認
- [ ] お問い合わせテスト実行
- [ ] Discord 通知確認
- [ ] PageSpeed Insights 確認

**すべて完了したら、5月後半の公開！** 🎉

---

**プロジェクト完成日：2026年4月**
**公開予定日：2026年5月後半**

Good luck! 🚀
