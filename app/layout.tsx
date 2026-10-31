import type {Metadata} from 'next';
import './globals.css'; // Global styles

const baseUrl = process.env.APP_URL || 'https://qc-marketing.agency';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'QC Marketing Agency | Meta Ads & Website Development Kenya',
    template: '%s | QC Marketing Agency',
  },
  description: 'High-performance Meta Ads Management and professional website development for businesses in Kenya. We help Kenyan businesses build a stronger digital presence.',
  keywords: ['Digital Marketing Kenya', 'Meta Ads Nairobi', 'Website Development Kenya', 'Social Media Marketing Kenya', 'Business Website Nairobi', 'QC Marketing Agency'],
  authors: [{ name: 'QC Marketing Agency' }],
  creator: 'QC Marketing Agency',
  publisher: 'QC Marketing Agency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/qc_favicon_1793121053925.jpg',
    apple: '/images/qc_favicon_1793121053925.jpg',
  },
  openGraph: {
    title: 'QC Marketing Agency | Meta Ads & Website Development Kenya',
    description: 'High-performance Meta Ads Management and professional website development for businesses in Kenya. Elevate your brand with data-driven growth.',
    url: baseUrl,
    siteName: 'QC Marketing Agency',
    images: [
      {
        url: '/images/qc_og_image_1793121054015.jpg',
        width: 1200,
        height: 630,
        alt: 'QC Marketing Agency - Digital Growth Studio Kenya',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QC Marketing Agency | Meta Ads & Website Development Kenya',
    description: 'High-performance Meta Ads Management and professional website development for businesses in Kenya.',
    images: ['/images/qc_og_image_1793121054015.jpg'],
  },
  alternates: {
    canonical: baseUrl,
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
  '@type': 'LocalBusiness',
  'name': 'QC Marketing Agency',
  'image': `${baseUrl}/images/qc_og_image_1793121054015.jpg`,
  'description': 'High-performance digital growth studio specializing in Meta Ads Management and professional website development for businesses in Kenya.',
  'url': baseUrl,
  'telephone': '+254746386377',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Nairobi',
    'addressLocality': 'Nairobi',
    'addressRegion': 'Nairobi',
    'postalCode': '00100',
    'addressCountry': 'KE'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': -1.2921,
    'longitude': 36.8219
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday'
    ],
    'opens': '09:00',
    'closes': '18:00'
  },
  'sameAs': [
    'https://wa.me/254746386377',
    'https://qc-marketing.agency'
  ]
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-midnight text-white selection:bg-emerald-accent/30">
        {children}
      </body>
    </html>
  );
}
