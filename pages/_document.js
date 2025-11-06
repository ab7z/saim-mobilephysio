import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang='de'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300..800&family=Roboto:wght@400&display=swap" rel="stylesheet" />

        {/* Basic Meta Tags */}
        <meta charSet="utf-8" />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta name='language' content='de' />
        <meta name='robots' content='index, follow' />
        <meta name='author' content='Saim Mobilephysio' />
        <meta name='copyright' content='Saim Mobilephysio' />
        <meta name="theme-color" content="#2cab29" />
        <meta
          name='description'
          content='Saim Mobilephysio Sankt Augustin. Faranak Nokhbehzaeem ist staatlich anerkannte Manualtherapeutin, Physiotherapeutin, Ödemtherapeutin und Personal Trainerin und bietet Hausbesuche in Sankt Augustin und Umgebung.'
        />
        <meta name='keywords' content='Physiotherapie, Mobilephysio, Sankt Augustin, Manualtherapie, Ödemtherapie, Personal Training, Hausbesuch, Physiotherapeutin' />

        {/* Open Graph Meta Tags */}
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Saim Mobilephysio' />
        <meta property='og:locale' content='de_DE' />
        <meta
          property='og:description'
          content='Saim Mobilephysio Sankt Augustin. Faranak Nokhbehzaeem ist staatlich anerkannte Manualtherapeutin, Physiotherapeutin, Ödemtherapeutin und Personal Trainerin und bietet Hausbesuche in Sankt Augustin und Umgebung.'
        />
        <meta property='og:image' content='https://saim-mobilephysio.de/android-chrome-512x512.png' />
        <meta property='og:image:width' content='512' />
        <meta property='og:image:height' content='512' />
        <meta property='og:image:alt' content='Saim Mobilephysio Logo' />

        {/* Twitter Card Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Saim Mobilephysio' />
        <meta name='twitter:description' content='Professionelle mobile Physiotherapie in Sankt Augustin und Umgebung. Manualtherapie, Ödemtherapie und Personal Training.' />
        <meta name='twitter:image' content='https://saim-mobilephysio.de/android-chrome-512x512.png' />

        {/* Favicon and Icons */}
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />

        {/* Canonical URL */}
        <link rel='canonical' href='https://saim-mobilephysio.de/' />

        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://saim-mobilephysio.de",
              "name": "Saim Mobilephysio",
              "description": "Mobile Physiotherapie in Sankt Augustin - Manualtherapie, Ödemtherapie und Personal Training",
              "url": "https://saim-mobilephysio.de",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sankt Augustin",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "addressLocality": "Sankt Augustin"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ]
              },
              "image": "https://saim-mobilephysio.de/android-chrome-512x512.png",
              "priceRange": "€€",
              "provider": {
                "@type": "Person",
                "name": "Faranak Nokhbehzaeem",
                "jobTitle": "Physiotherapeutin, Manualtherapeutin, Ödemtherapeutin, Personal Trainerin",
                "description": "Staatlich anerkannte Manualtherapeutin, Physiotherapeutin, Ödemtherapeutin und Personal Trainerin"
              }
            })
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
