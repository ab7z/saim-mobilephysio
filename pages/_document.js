import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta
          property='og:type'
          content='website'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Open+Sans|Roboto&amp;display=swap'
          rel='stylesheet'
        />
        <meta
          property='og:description'
          content='Saim Mobilephysio Sankt Augustin. Faranak Nokhbehzaeem ist staatlich
                anerkannte Manualtherapeutin, Physiotherapeutin, Ödemtherapeutin und Personal Trainerin und bietet
                Hausbesuche in Sankt Augustin und Umgebung.'
        />
        <meta
          name='description'
          content='Saim Mobilephysio Sankt Augustin. Faranak Nokhbehzaeem ist staatlich
                anerkannte Manualtherapeutin, Physiotherapeutin, Ödemtherapeutin und Personal Trainerin und bietet
                Hausbesuche in Sankt Augustin und Umgebung.'
        />
        <link
          rel='canonical'
          href='https://saim-mobilephysio.de/'
        />
        <meta
          name='language'
          content='de'
        />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1'
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
