import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';
import type { ReactElement, ReactNode } from 'react';

import { FloatingWhatsAppButton } from '@/components/common/WhatsAppButton';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { BackToTopButton } from '@/components/ui/BackToTopButton';
import '@/styles/globals.scss';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Premium Dental Care | Modern Dental Clinic',
  description:
    'Advanced, patient-first dental care with a focus on comfort, technology, and lasting smiles. Book your appointment today.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <BackToTopButton />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
