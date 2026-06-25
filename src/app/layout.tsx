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
  metadataBase: new URL('https://smiledentalclinic.in'),
  title: 'Smile Dental Clinic - Premium Dentist in Aundh, Pune',
  description:
    'Experience painless root canals, teeth alignment, cosmetic dentistry, and dental implants at Smile Dental Clinic, Aundh, Pune. Schedule your consultation today!',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Smile Dental Clinic - Premium Dentist in Aundh, Pune',
    description:
      'Experience painless root canals, teeth alignment, cosmetic dentistry, and dental implants at Smile Dental Clinic, Aundh, Pune. Schedule your consultation today!',
    url: 'https://smiledentalclinic.in',
    siteName: 'Smile Dental Clinic',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/assets/images/hero-banner.png',
        width: 1200,
        height: 630,
        alt: 'Smile Dental Clinic - Premium Dental Care Pune',
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
  '@type': 'Dentist',
  '@id': 'https://smiledentalclinic.in/#dentist',
  name: 'Smile Dental Clinic',
  url: 'https://smiledentalclinic.in',
  logo: 'https://smiledentalclinic.in/favicon.svg',
  image: 'https://smiledentalclinic.in/assets/images/hero-banner.png',
  description:
    "Premium Dental Care for Your Family's Smile in Aundh, Pune. Painless root canals, teeth alignment, and dental implants by Pune's leading specialists.",
  telephone: '+919699577641',
  email: 'contact@smiledentalclinic.in',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123, ITI Road, Near Bata Showroom, Aundh',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411007',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '18.5602',
    longitude: '73.8031',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '10:00',
      closes: '20:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/yourclinic',
    'https://www.instagram.com/yourclinic',
    'https://twitter.com/yourclinic',
  ],
  knowsAbout: [
    'Root Canal Therapy',
    'Teeth Alignment',
    'Cosmetic Dentistry',
    'Preventive Care',
    'Dental Consultation',
    'Cavity Detection',
    'Dental Implants',
  ],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <div style={{ backgroundColor: '#0f172a', width: '100%', position: 'sticky', top: 0, zIndex: 60 }} className="min-h-[44px] flex flex-col sm:flex-row items-center justify-between px-4 py-2 sm:py-0">
          <div style={{ color: 'white', fontSize: '12px' }} className="mb-2 sm:mb-0">
            🦷 Demo site by Invictus AI
          </div>
          <a 
            href="https://wa.me/919699577641?text=Hi,%20I%20just%20saw%20your%20demo%20site%20and%20I%20want%20this%20for%20my%20dental%20clinic." 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ backgroundColor: '#ccff00', color: '#0f172a', padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: 'bold', textDecoration: 'none' }}
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
