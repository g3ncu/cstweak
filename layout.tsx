import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { QuickTip } from '@/components/quick-tip'
import { ScrollProgress } from '@/components/scroll-progress'
import { ScrollToTop } from '@/components/scroll-to-top'
import { CopyNotificationProvider } from '@/components/copy-notification'
import Script from 'next/script' 

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap', // Windows 7 ve yavaş bağlantılar için font hızı optimizasyonu
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains',
  display: 'swap', // Yazıların anında görünmesini sağlar
})

export const metadata: Metadata = {
  title: 'CStweak.com.tr - CS2 Performans Optimizasyonu',
  description: 'CS2\'de yüksek FPS ve düşük gecikme için optimize ayarlar, rehberler ve scriptler. Milisaniyelerle avantajı sen yakala!',
  keywords: ['CS2', 'Counter-Strike 2', 'FPS', 'optimizasyon', 'performans', 'ayarlar', 'config'],
  authors: [{ name: 'gencuez' }],
  creator: 'gencuez',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        {/* AdSense Kodu: afterInteractive stratejisi ile sayfa hızı korunur */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2243647659004636"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        <CopyNotificationProvider>
          <Navbar />
          <QuickTip />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <ScrollProgress />
          <ScrollToTop />
        </CopyNotificationProvider>
        <Analytics />
      </body>
    </html>
  )
}