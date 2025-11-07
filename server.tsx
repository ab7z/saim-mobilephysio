import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './src/App'

const htmlTemplate = (content: string, route: string) => `
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="language" content="de" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Saim Mobilephysio" />
    <meta name="copyright" content="Saim Mobilephysio" />
    <meta name="theme-color" content="#2cab29" />

    ${
      route === '/'
        ? `
    <title>Saim Mobilephysio - Mobile Physiotherapie in Sankt Augustin</title>
    <meta name="description" content="Mobile Physiotherapie in Sankt Augustin. Professionelle Manualtherapie, Ödemtherapie und Personal Training. Hausbesuche in Sankt Augustin und Umgebung." />
    <meta property="og:title" content="Saim Mobilephysio - Mobile Physiotherapie in Sankt Augustin" />
    <meta property="og:url" content="https://saim-mobilephysio.de" />
    <meta name="twitter:title" content="Saim Mobilephysio - Mobile Physiotherapie" />
    `
        : ''
    }

    ${
      route === '/privacy'
        ? `
    <title>Datenschutzerklärung - Saim Mobilephysio</title>
    <meta name="description" content="Datenschutzerklärung von Saim Mobilephysio Sankt Augustin. Informationen zum Umgang mit personenbezogenen Daten." />
    <meta property="og:title" content="Datenschutzerklärung - Saim Mobilephysio" />
    <meta property="og:url" content="https://saim-mobilephysio.de/privacy" />
    <meta name="robots" content="noindex, follow" />
    `
        : ''
    }

    ${
      route === '/terms'
        ? `
    <title>Impressum - Saim Mobilephysio</title>
    <meta name="description" content="Impressum und rechtliche Informationen von Saim Mobilephysio Sankt Augustin, Faranak Nokhbehzaeem." />
    <meta property="og:title" content="Impressum - Saim Mobilephysio" />
    <meta property="og:url" content="https://saim-mobilephysio.de/terms" />
    <meta name="robots" content="noindex, follow" />
    `
        : ''
    }

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Saim Mobilephysio" />
    <meta property="og:locale" content="de_DE" />
    <meta property="og:description" content="Saim Mobilephysio Sankt Augustin. Faranak Nokhbehzaeem ist staatlich anerkannte Manualtherapeutin, Physiotherapeutin, Ödemtherapeutin und Personal Trainerin und bietet Hausbesuche in Sankt Augustin und Umgebung." />
    <meta property="og:image" content="https://saim-mobilephysio.de/android-chrome-512x512.png" />
    <meta property="og:image:width" content="512" />
    <meta property="og:image:height" content="512" />
    <meta property="og:image:alt" content="Saim Mobilephysio Logo" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:description" content="Professionelle mobile Physiotherapie in Sankt Augustin und Umgebung. Manualtherapie, Ödemtherapie und Personal Training." />
    <meta name="twitter:image" content="https://saim-mobilephysio.de/android-chrome-512x512.png" />

    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="canonical" href="https://saim-mobilephysio.de${route}" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Roboto:wght@400&display=swap" rel="stylesheet" />

    <link rel="stylesheet" href="/styles/globals.css" />
    <link rel="stylesheet" href="/styles/Home.module.css" />
    <link rel="stylesheet" href="/styles/Privacy.module.css" />
    <link rel="stylesheet" href="/styles/Terms.module.css" />
    <link rel="stylesheet" href="/styles/components/Navbar.module.css" />
    <link rel="stylesheet" href="/styles/components/SimpleNavbar.module.css" />
    <link rel="stylesheet" href="/styles/components/Header.module.css" />
    <link rel="stylesheet" href="/styles/components/Footer.module.css" />
    <link rel="stylesheet" href="/styles/components/Contact.module.css" />
    <link rel="stylesheet" href="/styles/components/Form.module.css" />
    <link rel="stylesheet" href="/styles/components/Intro.module.css" />
    <link rel="stylesheet" href="/styles/components/Layout.module.css" />
    <link rel="stylesheet" href="/styles/components/Price.module.css" />
    <link rel="stylesheet" href="/styles/components/Services.module.css" />
  </head>
  <body>
    <div id="root">${content}</div>
    <script type="module" src="/dist/client.js"></script>
  </body>
</html>
`

const server = Bun.serve({
  port: process.env.PORT || 3000,
  async fetch(req) {
    const url = new URL(req.url)
    const pathname = url.pathname

    // Serve static files from dist/
    if (pathname.startsWith('/dist/')) {
      const file = Bun.file(`.${pathname}`);
      if (await file.exists()) {
        return new Response(file);
      }
    }

    // Serve static files from styles/
    if (pathname.startsWith('/styles/')) {
      const file = Bun.file(`.${pathname}`);
      if (await file.exists()) {
        return new Response(file);
      }
    }

    // Serve static files from public/ (without /public/ prefix in URL)
    // e.g., /logo.svg -> ./public/logo.svg
    if (pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|avif|js|json|webmanifest|txt|xml|html)$/)) {
      const file = Bun.file(`./public${pathname}`);
      if (await file.exists()) {
        return new Response(file)
      }
    }

    // Handle routes
    let route = pathname
    if (pathname !== '/' && pathname !== '/privacy' && pathname !== '/terms') {
      route = '/' // Default to home for unknown routes
    }

    try {
      const html = renderToString(<App route={route} />)
      return new Response(htmlTemplate(html, route), {
        headers: { 'Content-Type': 'text/html' },
      })
    } catch (error) {
      console.error('SSR Error:', error)
      return new Response('Internal Server Error', { status: 500 })
    }
  },
})

console.log(`🚀 Server running at http://localhost:${server.port}`)
