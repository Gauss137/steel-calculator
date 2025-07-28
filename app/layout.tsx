import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Calculadora de Acero - CSW Ingeniería Civil',
    template: '%s | CSW Ingeniería Civil'
  },
  description: 'Calculadora profesional para diseño de acero estructural. Herramienta especializada para ingenieros civiles y estructurales.',
  keywords: ['calculadora acero', 'diseño estructural', 'ingeniería civil', 'acero construcción', 'vigas acero'],
  authors: [{ name: 'CSW Ingeniería Civil' }],
  creator: 'CSW Ingeniería Civil',
  publisher: 'CSW Ingeniería Civil',
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
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://steelcalculator.cswingenieriacivil.com',
    siteName: 'CSW Ingeniería Civil',
    title: 'Calculadora de Acero - CSW Ingeniería Civil',
    description: 'Calculadora profesional para diseño de acero estructural',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Calculadora de Acero',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Acero - CSW Ingeniería Civil',
    description: 'Calculadora profesional para diseño de acero estructural',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://steelcalculator.cswingenieriacivil.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Google AdSense Meta Tag */}
        <meta name="google-adsense-account" content="ca-pub-8687657389733151" />
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        
        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8687657389733151"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 