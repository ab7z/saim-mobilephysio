import type { Context } from "@netlify/functions";
import { renderToString } from 'react-dom/server';
import App from '../../src/App';
import { readFileSync } from 'fs';
import { join } from 'path';

const getHtmlTemplate = (content: string, route: string) => {
  // Read the static HTML template parts
  const stylesLinks = `
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
  `;

  let title = 'Saim Mobilephysio';
  let description = 'Saim Mobilephysio Sankt Augustin';
  let ogTitle = title;
  let ogUrl = 'https://saim-mobilephysio.de';
  let robots = 'index, follow';

  if (route === '/') {
    title = 'Saim Mobilephysio - Mobile Physiotherapie in Sankt Augustin';
    description = 'Mobile Physiotherapie in Sankt Augustin. Professionelle Manualtherapie, Ödemtherapie und Personal Training. Hausbesuche in Sankt Augustin und Umgebung.';
    ogTitle = 'Saim Mobilephysio - Mobile Physiotherapie in Sankt Augustin';
    ogUrl = 'https://saim-mobilephysio.de';
  } else if (route === '/privacy') {
    title = 'Datenschutzerklärung - Saim Mobilephysio';
    description = 'Datenschutzerklärung von Saim Mobilephysio Sankt Augustin. Informationen zum Umgang mit personenbezogenen Daten.';
    ogTitle = 'Datenschutzerklärung - Saim Mobilephysio';
    ogUrl = 'https://saim-mobilephysio.de/privacy';
    robots = 'noindex, follow';
  } else if (route === '/terms') {
    title = 'Impressum - Saim Mobilephysio';
    description = 'Impressum und rechtliche Informationen von Saim Mobilephysio Sankt Augustin, Faranak Nokhbehzaeem.';
    ogTitle = 'Impressum - Saim Mobilephysio';
    ogUrl = 'https://saim-mobilephysio.de/terms';
    robots = 'noindex, follow';
  }

  return `
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="language" content="de" />
    <meta name="robots" content="${robots}" />
    <meta name="author" content="Saim Mobilephysio" />
    <meta name="copyright" content="Saim Mobilephysio" />
    <meta name="theme-color" content="#2cab29" />

    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:title" content="${ogTitle}" />
    <meta property="og:url" content="${ogUrl}" />
    <meta name="twitter:title" content="${ogTitle}" />

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
    <link rel="canonical" href="${ogUrl}" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Roboto:wght@400&display=swap" rel="stylesheet" />

    ${stylesLinks}
  </head>
  <body>
    <div id="root">${content}</div>
    <script type="module" src="/dist/client.js"></script>
  </body>
</html>
  `;
};

export default async (req: Request, context: Context) => {
  const url = new URL(req.url);
  const pathname = url.pathname;

  let route = pathname;
  if (pathname !== '/' && pathname !== '/privacy' && pathname !== '/terms') {
    route = '/';
  }

  try {
    const html = renderToString(<App route={route} />);
    return new Response(getHtmlTemplate(html, route), {
      headers: { 'Content-Type': 'text/html' },
    });
  } catch (error) {
    console.error('SSR Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
