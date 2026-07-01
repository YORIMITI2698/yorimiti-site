import './globals.css'
import SiteTracker from './SiteTracker'

const SITE_URL = 'https://yorimiti.jp'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'YORIMITI｜ドローン空撮・ボカロMV編集',
    template: '%s｜YORIMITI',
  },
  description:
    'YORIMITI（よりみち）は、ドローン空撮（FPV/安定型）・ボカロMV編集・動画制作・アニメーション・楽曲MIX/マスタリングまで手がける映像制作チーム。「カタチも、視点も、もっと自由に。」',
  keywords: ['ボカロMV','MV編集','動画制作','アニメーション制作','ドローン空撮','FPVドローン','楽曲MIX','マスタリング','映像制作','グラフィックデザイン','YORIMITI','よりみち'],
  authors: [{ name: 'YORIMITI' }],
  creator: 'YORIMITI',
  publisher: 'YORIMITI',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: SITE_URL,
    siteName: 'YORIMITI',
    title: 'YORIMITI｜ドローン空撮・ボカロMV編集',
    description: 'ドローン空撮 × ボカロMV編集 × 動画制作 × アニメーション × 楽曲MIX/マスタリング。カタチも、視点も、もっと自由に。',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'YORIMITI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YORIMITI｜ドローン空撮・ボカロMV編集',
    description: 'ドローン空撮 × ボカロMV編集 × 動画制作 × アニメーション × 楽曲MIX/マスタリング。',
    images: ['/og.png'],
    site: '@xisz_',
    creator: '@xisz_',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': SITE_URL + '/#organization',
      name: 'YORIMITI',
      alternateName: 'よりみち',
      url: SITE_URL,
      logo: SITE_URL + '/yorimiti-logo.png',
      image: SITE_URL + '/og.png',
      email: 'contact@yorimiti.jp',
      description:
        'ドローン空撮・ボカロMV編集・動画制作・アニメーション・楽曲MIX/マスタリングを手がける映像制作チーム。',
      sameAs: [
        'https://twitter.com/xisz_',
        'https://www.instagram.com/kota12698/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': SITE_URL + '/#website',
      url: SITE_URL,
      name: 'YORIMITI',
      inLanguage: 'ja',
      publisher: { '@id': SITE_URL + '/#organization' },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-dark-bg text-text-primary antialiased">
        <SiteTracker />
        {children}
      </body>
    </html>
  )
}
