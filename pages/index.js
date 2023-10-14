import Head from "next/head"
import Header from "../components/Header"

export default function Home() {
  return (
    <>
      <Head>
        <title>Saim Mobilephysio</title>
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1'
        />
        <html lang={"de-DE"} />
        <meta
          name='language'
          content='de'
        />
        <meta
          name='theme-color'
          content='#000000'
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
          property='og:title'
          content='Saim Mobilephysio'
        />
        <meta
          property='og:description'
          content='Saim Mobilephysio Sankt Augustin. Faranak Nokhbehzaeem ist staatlich
                anerkannte Manualtherapeutin, Physiotherapeutin, Ödemtherapeutin und Personal Trainerin und bietet
                Hausbesuche in Sankt Augustin und Umgebung.'
        />
        <meta
          property='og:url'
          content='https://saim-mobilephysio.de'
        />
        <meta
          property='og:type'
          content='website'
        />
      </Head>

      <Header />

      {/* <Intro />

      <Services />

      <Price />

      <Form />

      <Contact /> */}
    </>
  )
}
