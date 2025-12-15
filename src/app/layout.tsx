import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Software Solutions | Maßgeschneiderte Softwareentwicklung',
    template: '%s | Software Solutions'
  },
  description: 'Entdecken Sie unsere innovativen Software-Lösungen für Industrie, E-Commerce und mehr. Maßgeschneiderte Entwicklung mit modernsten Technologien.',
  keywords: ['Software Entwicklung', 'Custom Software', 'SaaS', 'Enterprise Software', 'Digitale Transformation'],
  authors: [{ name: 'Software Solutions Team' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Software Solutions',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" data-theme="softwaresolutions">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
