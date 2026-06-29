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

import { clinicConfig } from '@/lib/clinic-config';

export const metadata: Metadata = {
  metadataBase: new URL('https://s1.invictus-ai.in'),
  title: clinicConfig.seo.meta_title,
  description: clinicConfig.seo.meta_description,
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: clinicConfig.seo.meta_title,
    description: clinicConfig.seo.meta_description,
    url: 'https://s1.invictus-ai.in',
    siteName: clinicConfig.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/assets/images/hero-banner.webp',
        width: 1200,
        height: 630,
        alt: `${clinicConfig.name} - Premium Dental Care`,
      },
    ],
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
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Dentist', 'MedicalBusiness'],
  '@id': 'https://s1.invictus-ai.in/#dentist',
  name: clinicConfig.name,
  url: 'https://s1.invictus-ai.in',
  logo: 'https://s1.invictus-ai.in/favicon.svg',
  image: 'https://s1.invictus-ai.in/assets/images/hero-banner.webp',
  description: clinicConfig.seo.meta_description,
  telephone: clinicConfig.contact.phone_primary,
  email: clinicConfig.contact.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      clinicConfig.contact.address_full.split('\\n')[0] ||
      clinicConfig.contact.address_full,
    addressLocality:
      clinicConfig.contact.address_full.split('\\n').length > 1
        ? clinicConfig.contact.address_full.split('\\n')[1]
        : '',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude:
      clinicConfig.contact.google_maps_embed.match(/!2d([0-9.]+)/)?.[1] ||
      '18.5602',
    longitude:
      clinicConfig.contact.google_maps_embed.match(/!3d([0-9.]+)/)?.[1] ||
      '73.8031',
  },
  openingHoursSpecification: clinicConfig.hours.map(h => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.day.split('-').map(d => d.trim()),
    opens: h.time.split('-')[0]?.trim() || '10:00 AM',
    closes: h.time.split('-')[1]?.trim() || '8:00 PM',
  })),
  sameAs: Object.values(clinicConfig.social || {}),
  knowsAbout: clinicConfig.services.map(s => s.title),
};

function hexToRgb(hex: string) {
  const result = /^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '14, 165, 233';
}

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const primaryRgb = hexToRgb(clinicConfig.theme.primary);
  const themeStyles = {
    '--primary-color': clinicConfig.theme.primary,
    '--secondary-color': clinicConfig.theme.secondary,
    '--primary-color-35': `rgba(${primaryRgb}, 0.35)`,
    '--primary-color-15': `rgba(${primaryRgb}, 0.15)`,
    '--primary-color-30': `rgba(${primaryRgb}, 0.3)`,
  } as React.CSSProperties;

  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning style={themeStyles}>
        <div
          style={{
            backgroundColor: '#0f172a',
            width: '100%',
            position: 'sticky',
            top: 0,
            zIndex: 60,
          }}
          className="min-h-[44px] flex flex-col sm:flex-row items-center justify-between px-4 py-2 sm:py-0"
        >
          <div
            style={{ color: 'white', fontSize: '12px' }}
            className="mb-2 sm:mb-0"
          >
            🦷 Demo site by Invictus AI
          </div>
          <a
            href="https://wa.me/919699577641?text=Hi,%20I%20just%20saw%20your%20demo%20site%20and%20I%20want%20this%20for%20my%20dental%20clinic."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#ccff00',
              color: '#0f172a',
              padding: '4px 12px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 'bold',
              textDecoration: 'none',
            }}
          >
            Get This For Your Clinic →
          </a>
        </div>
        <Header />
        {children}
        <Footer />
        <BackToTopButton />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
