import './globals.css'

export const metadata = {
  title: 'YORIMITI - Vocaloid MV Editing & Music Production',
  description: 'ボカロMV編集 × 動画制作 × アニメーション。あなたの音楽を映像で表現します。',
  keywords: ['ボカロ', 'MV編集', '動画制作', 'アニメーション'],
  openGraph: {
    title: 'YORIMITI',
    description: 'ボカロMV編集 × 動画制作 × アニメーション',
    url: 'https://yorimiti.jp',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-dark-bg text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
