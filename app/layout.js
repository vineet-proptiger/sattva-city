import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Open_Sans, Montserrat, Cormorant_Garamond, Poppins } from 'next/font/google'
import { CITY_DISPLAY } from '../lib/config'
import { faviconImage } from '../lib/images'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://sattvacitybangalore.com'),
  title: 'Sattva City Bangalore | 2, 3 & 4 BHK Luxury Homes on Airport Road',
  description: 'Discover Sattva City on Bengaluru Airport Road, near the toll gate. A 50-acre luxury township offering 2, 3 & 4 BHK residences starting at ₹1.75 Cr* with 4 grand clubhouses & 250+ amenities.',
  icons: {
    icon: faviconImage,
    shortcut: faviconImage,
    apple: faviconImage,
  },
  alternates: {
    canonical: 'https://sattvacitybangalore.com',
  },
  openGraph: {
    title: 'Sattva City Bangalore | 2, 3 & 4 BHK Luxury Homes on Airport Road',
    description: 'Discover Sattva City on Bengaluru Airport Road, near the toll gate. A 50-acre luxury township offering 2, 3 & 4 BHK residences starting at ₹1.75 Cr* with 4 grand clubhouses & 250+ amenities.',
    url: 'https://sattvacitybangalore.com',
    siteName: 'Sattva City Bangalore',
    images: [
      {
        url: '/projects/iris-tower.jpg',
        width: 1200,
        height: 630,
        alt: 'Sattva City Bangalore Airport Road',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sattva City Bangalore | 2, 3 & 4 BHK Luxury Homes on Airport Road',
    description: 'Discover Sattva City on Bengaluru Airport Road, near the toll gate. A 50-acre luxury township offering 2, 3 & 4 BHK residences starting at ₹1.75 Cr* with 4 grand clubhouses & 250+ amenities.',
    images: ['/projects/iris-tower.jpg'],
  },
}

import SmoothScroll from '../components/SmoothScroll'

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <link rel="icon" href={faviconImage} type="image/webp" />
        <link rel="shortcut icon" href={faviconImage} type="image/webp" />
        <link rel="apple-touch-icon" href={faviconImage} type="image/webp" />
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Sattva City Bangalore",
              "url": "https://sattvacitybangalore.com",
              "logo": "https://sattvacitybangalore.com/projects/iris-tower.jpg",
              "image": "https://sattvacitybangalore.com/projects/iris-tower.jpg",
              "description": "Sattva City, Bangalore's premier 50-acre luxury township on Bengaluru Airport Road, near the toll gate, offering luxurious 3.5 BHK residences.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bengaluru Airport Road, near Toll Gate",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "postalCode": "562157",
                "addressCountry": "IN"
              },
              "telephone": "+919718344024",
              "priceRange": "₹ 1.75 Cr Onwards",
              "sameAs": [
                "https://sattvacitybangalore.com"
              ]
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} ${poppins.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`} 
        </Script>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
