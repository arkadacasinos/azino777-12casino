import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Oswald, Inter } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://azino777-12casino.vercel.app'),
  title: 'Азино777 официальный сайт казино — Азино Мобайл | Azino777',
  description:
    'Азино777 официальный сайт онлайн казино. Азино мобайл — играйте в слоты, рулетку и карточные игры. Azino777 официальный сайт предлагает бонусы новым игрокам, быстрые выплаты и мобильную версию.',
  keywords: [
    'азино777 официальный',
    'азино мобайл',
    'азино777 официальный сайт',
    'азино777',
    'азино 777',
    'azino777 официальный',
    'azino777',
    'azino 777',
    'азино777 казино',
    'азино казино',
  ],
  authors: [{ name: 'Azino777' }],
  creator: 'Azino777',
  publisher: 'Azino777',
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
  alternates: {
    canonical: 'https://azino777-12casino.vercel.app/',
  },
  openGraph: {
    title: 'Азино777 официальный сайт казино — Азино Мобайл',
    description:
      'Азино777 официальный сайт онлайн казино. Играйте в слоты, рулетку и карточные игры на Азино мобайл. Бонусы, быстрые выплаты и мобильная версия.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Азино777',
    images: [
      {
        url: '/images/az7-hero.png',
        width: 1024,
        height: 1024,
        alt: 'Азино777 официальный сайт казино',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Азино777 официальный сайт казино',
    description:
      'Азино777 официальный сайт онлайн казино. Азино мобайл — слоты, рулетка, бонусы и быстрые выплаты.',
    images: ['/images/az7-hero.png'],
  },
  category: 'Entertainment',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${oswald.variable} ${inter.variable} bg-[#0a0a0a]`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Азино777',
              alternateName: 'Azino777',
              url: 'https://azino777-12casino.vercel.app/',
              description:
                'Азино777 официальный сайт онлайн казино. Азино мобайл — слоты, рулетка, карточные игры, бонусы и мобильная версия.',
              inLanguage: 'ru-RU',
              publisher: {
                '@type': 'Organization',
                name: 'Azino777',
              },
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
      <Analytics />
    </html>
  )
}
