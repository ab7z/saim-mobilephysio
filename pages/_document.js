import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang='de'>
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="utf-8" />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta name='language' content='de' />
        <meta name='robots' content='index, follow' />
        <meta name='author' content='Saim Mobilephysio' />
        <meta name='copyright' content='Saim Mobilephysio' />
        <meta name="theme-color" content="#38a815" />
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

        {/* Structured Data - MedicalBusiness with Pricing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "@id": "https://saim-mobilephysio.de",
              "name": "Saim Mobilephysio",
              "description": "Mobile Physiotherapie in Sankt Augustin - Manualtherapie, Ödemtherapie und Personal Training",
              "url": "https://saim-mobilephysio.de",
              "telephone": "+4915785908915",
              "email": "info@saim-mobilephysio.de",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sankt Augustin",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "50.7753",
                "longitude": "7.1889"
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
              "priceRange": "15 € – 150 €",
              "employee": {
                "@type": "Person",
                "name": "Faranak Nokhbehzaeem",
                "jobTitle": "Physiotherapeutin, Manualtherapeutin, Ödemtherapeutin, Personal Trainerin",
                "description": "Staatlich anerkannte Manualtherapeutin, Physiotherapeutin, Ödemtherapeutin und Personal Trainerin"
              },
              "makesOffer": [
                {
                  "@type": "Offer",
                  "name": "Krankengymnastik",
                  "price": "39.80",
                  "priceCurrency": "EUR",
                  "itemOffered": { "@type": "Service", "name": "Krankengymnastik" }
                },
                {
                  "@type": "Offer",
                  "name": "Manuelle Therapie",
                  "description": "15 Minuten Behandlungszeit",
                  "price": "43.00",
                  "priceCurrency": "EUR",
                  "itemOffered": { "@type": "Service", "name": "Manuelle Therapie" }
                },
                {
                  "@type": "Offer",
                  "name": "Manuelle Lymphdrainage (eine Region)",
                  "description": "30 Minuten Behandlungszeit",
                  "price": "81.91",
                  "priceCurrency": "EUR",
                  "itemOffered": { "@type": "Service", "name": "Manuelle Lymphdrainage" }
                },
                {
                  "@type": "Offer",
                  "name": "Klassische Massage",
                  "description": "30 Minuten Behandlungszeit",
                  "price": "86.00",
                  "priceCurrency": "EUR",
                  "itemOffered": { "@type": "Service", "name": "Klassische Massage" }
                },
                {
                  "@type": "Offer",
                  "name": "Hausbesuch",
                  "description": "Anfahrtspauschale zzgl. 0,50 € pro km",
                  "price": "28.00",
                  "priceCurrency": "EUR",
                  "itemOffered": { "@type": "Service", "name": "Hausbesuch" }
                }
              ]
            })
          }}
        />

        {/* Structured Data - Medical Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Service",
                  "name": "Manuelle Therapie (MT)",
                  "provider": {
                    "@type": "MedicalBusiness",
                    "name": "Saim Mobilephysio"
                  },
                  "serviceType": "Physiotherapie"
                },
                {
                  "@type": "Service",
                  "name": "Physiotherapie",
                  "provider": {
                    "@type": "MedicalBusiness",
                    "name": "Saim Mobilephysio"
                  },
                  "serviceType": "Physiotherapie"
                },
                {
                  "@type": "Service",
                  "name": "Manuelle Lymphdrainage (MLD)",
                  "provider": {
                    "@type": "MedicalBusiness",
                    "name": "Saim Mobilephysio"
                  },
                  "serviceType": "Physiotherapie"
                },
                {
                  "@type": "Service",
                  "name": "Atemtherapie",
                  "provider": {
                    "@type": "MedicalBusiness",
                    "name": "Saim Mobilephysio"
                  },
                  "serviceType": "Physiotherapie"
                },
                {
                  "@type": "Service",
                  "name": "Migränetherapie",
                  "provider": {
                    "@type": "MedicalBusiness",
                    "name": "Saim Mobilephysio"
                  },
                  "serviceType": "Physiotherapie"
                },
                {
                  "@type": "Service",
                  "name": "Akupressur",
                  "provider": {
                    "@type": "MedicalBusiness",
                    "name": "Saim Mobilephysio"
                  },
                  "serviceType": "Physiotherapie"
                },
                {
                  "@type": "Service",
                  "name": "Beckenboden- & Rückentraining",
                  "provider": {
                    "@type": "MedicalBusiness",
                    "name": "Saim Mobilephysio"
                  },
                  "serviceType": "Physiotherapie"
                },
                {
                  "@type": "Service",
                  "name": "Koordination-, Ausdauer- & Krafttraining",
                  "provider": {
                    "@type": "MedicalBusiness",
                    "name": "Saim Mobilephysio"
                  },
                  "serviceType": "Personal Training"
                },
                {
                  "@type": "Service",
                  "name": "Wellnessbehandlungen (Gesicht & Dekolleté)",
                  "provider": {
                    "@type": "MedicalBusiness",
                    "name": "Saim Mobilephysio"
                  },
                  "serviceType": "Wellness"
                },
                {
                  "@type": "Service",
                  "name": "Kinesiologische Tapetechniken",
                  "provider": {
                    "@type": "MedicalBusiness",
                    "name": "Saim Mobilephysio"
                  },
                  "serviceType": "Physiotherapie"
                },
                {
                  "@type": "Service",
                  "name": "Massage",
                  "provider": {
                    "@type": "MedicalBusiness",
                    "name": "Saim Mobilephysio"
                  },
                  "serviceType": "Physiotherapie"
                },
                {
                  "@type": "Service",
                  "name": "Ozon- / Plasma-Therapie (Hochfrequenz- & Plasma-Anwendung)",
                  "provider": {
                    "@type": "MedicalBusiness",
                    "name": "Saim Mobilephysio"
                  },
                  "serviceType": "Physiotherapie"
                }
              ]
            })
          }}
        />

        {/* Structured Data - FAQ for Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Erstattet meine private Krankenversicherung die Behandlung?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In der Regel ja. Bei einer Behandlung mit ärztlichem Rezept reichen Sie die Rechnung bei Ihrer PKV ein und erhalten die verordneten Kosten erstattet. Den genauen Erstattungsrahmen klärt Ihr Versicherer."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Was bringe ich zum ersten Termin mit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ihr ärztliches Rezept (sofern vorhanden), bequeme Kleidung und gegebenenfalls Vorbefunde. Ich bringe alles Übrige mit – Liege, Materialien, Tapes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Wie lange dauert eine Sitzung?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Verlässlich 60 Minuten. Ich nehme mir die Zeit, die nötig ist – ohne Wechsel zwischen Patienten und ohne den typischen Praxisrhythmus."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Kann ich auch ohne ärztliche Verordnung behandelt werden?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja. Wenn Sie präventiv arbeiten möchten – Personal Training, Wellness oder vorbeugende Manualtherapie – ist das jederzeit möglich. Es gelten die Sätze des Honorarkatalogs; bitte sprechen Sie mich für ein individuelles Angebot an."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Behandeln Sie auch außerhalb von Sankt Augustin?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ich fahre regelmäßig in einem Radius von 30 km. Falls Ihr Wohnort weiter entfernt liegt, sprechen Sie mich gern an – vieles lässt sich individuell einrichten."
                  }
                }
              ]
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
