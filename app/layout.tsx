import type { Metadata } from 'next';
import Script from 'next/script';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingCTA } from '@/components/layout/FloatingCTA';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Fajrsoft - VIP-Level Technology Solutions',
    template: '%s | Fajrsoft',
  },
  description:
    'Transform your business with premium web development, mobile apps, and automation solutions. Professional service you can trust with 7+ years of excellence.',
  keywords: [
    'web development',
    'mobile apps',
    'business automation',
    'software development',
    'UAE',
    'Dubai',
    'technology solutions',
  ],
  authors: [{ name: 'Fajrsoft' }],
  creator: 'Fajrsoft',
  publisher: 'Fajrsoft',
  metadataBase: new URL('https://fajrsoft.ae'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fajrsoft.ae',
    title: 'Fajrsoft - VIP-Level Technology Solutions',
    description:
      'Transform your business with premium web development, mobile apps, and automation solutions.',
    siteName: 'Fajrsoft',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fajrsoft - VIP-Level Technology Solutions',
    description:
      'Transform your business with premium web development, mobile apps, and automation solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <div className="min-h-screen bg-white">
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingCTA />
        </div>

        {/* Calendly widget scripts */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <Script id="calendly-init" strategy="afterInteractive">
          {`
            if (typeof window !== 'undefined') {
              window.addEventListener('load', function() {
                if (window.Calendly) {
                  window.Calendly.initBadgeWidget({
                    url: 'https://calendly.com/fajrsoft-info',
                    text: 'Schedule time with me',
                    color: '#0069ff',
                    textColor: '#ffffff',
                    branding: true
                  });
                }
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
