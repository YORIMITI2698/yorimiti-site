# YORIMITI - Vocaloid MV Editing & Music Production

## 🎨 プロジェクト概要

ボカロMV編集、動画制作、アニメーション制作を提供する YORIMITI のアーティスティックウェブサイト。

- **デザイン**: ダークモード × グラデーション（アーティスティック）
- **フレームワーク**: Next.js 14 + React 18
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **ホスティング**: Vercel

## 🚀 クイックスタート

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/yorimiti/yorimiti-site.git
cd yorimiti-site

# 依存関係をインストール
npm install
```

### ローカル開発

```bash
# 開発サーバーを起動
npm run dev

# http://localhost:3000 でアクセス
```

### 本番ビルド

```bash
# ビルド
npm run build

# 本番サーバーを起動
npm start
```

## 📁 ディレクトリ構成

```
yorimiti-site/
├── app/
│   ├── layout.js          # ルートレイアウト
│   ├── page.js            # メインページ
│   └── globals.css        # グローバルスタイル
├── components/
│   ├── Navbar.js          # ナビゲーション
│   ├── Hero.js            # ヒーローセクション
│   ├── Services.js        # サービス紹介
│   ├── Pricing.js         # 料金表
│   ├── Portfolio.js       # ポートフォリオギャラリー
│   ├── Contact.js         # お問い合わせフォーム
│   └── Footer.js          # フッター
├── public/                # 静的ファイル
├── package.json           # 依存関係
├── next.config.js         # Next.js 設定
├── tailwind.config.js     # Tailwind 設定
└── postcss.config.js      # PostCSS 設定
```

## 🎯 主な機能

### ダークモード × グラデーション

- **背景色**: 深い紺（#0a0e27）
- **グラデーション**: 紫→青、ピンク→紫、青→緑
- **アニメーション**: スムーズなホバー効果、パーティクル背景

### レスポンシブデザイン

- デスクトップ対応（1200px+）
- タブレット対応（768px-1199px）
- モバイル対応（-768px）

### お問い合わせフォーム

- **Formspree 統合**: フォーム送信を自動処理
- **フォームID**: maqaoblg
- **送信先**: graphics@yorimiti.jp
- **Discord 通知**: Google Apps Script で自動通知

### ポートフォリオギャラリー

- YouTube 動画埋め込み（12本）
- レスポンシブグリッド
- ホバーエフェクト

## 🔧 環境変数

`.env.local` ファイルを作成（オプション）:

```
FORMSPREE_FORM_ID=maqaoblg
NEXT_PUBLIC_SITE_URL=https://yorimiti.jp
```

## 📦 デプロイ（Vercel）

### 自動デプロイ

```bash
# GitHub にプッシュ
git push origin main

# Vercel が自動的にビルド＆デプロイ
```

### 手動デプロイ

```bash
# Vercel CLI をインストール
npm i -g vercel

# デプロイ
vercel

# 本番環境にデプロイ
vercel --prod
```

## 🎨 カラーパレット

```
ベースカラー:
- 背景（メイン）：#0a0e27
- 背景（サブ）：#1a1f3a
- テキスト（メイン）：#f0f4ff
- テキスト（サブ）：#a8b2d1
- アクセント：#06b6d4（シアン）

グラデーション:
- 紫→青：#7c3aed → #3b82f6
- ピンク→紫：#ec4899 → #a855f7
- 青→緑：#0ea5e9 → #10b981
```

## 📊 パフォーマンス最適化

- Next.js SSG/SSR 最適化
- Tailwind CSS ツリーシェイキング
- 画像最適化（Vercel 自動対応）
- 動的インポート対応

## 🔒 セキュリティ

- HTTPS 対応（Vercel 自動）
- SSL 証明書（Vercel 自動）
- CORS 設定済み
- フォーム送信は Formspree で保護

## 📞 サポート

問題が発生した場合:
- contact@yorimiti.jp にお問い合わせください
- GitHub Issues に報告してください

## 📄 ライセンス

© 2026 YORIMITI. All rights reserved.

---

**作成日**: 2026年4月
**更新日**: 2026年4月
