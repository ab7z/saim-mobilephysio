import Head from "next/head"
import Contact from "../components/Contact"
import Form from "../components/Form"
import Header from "../components/Header"
import Intro from "../components/Intro"
import Price from "../components/Price"
import Services from "../components/Services"

export default function Home() {
  return (
    <>
      <Head>
        <title>Saim Mobilephysio - Mobile Physiotherapie in Sankt Augustin</title>
        <meta
          name='description'
          content='Mobile Physiotherapie in Sankt Augustin. Professionelle Manualtherapie, Ödemtherapie und Personal Training. Hausbesuche in Sankt Augustin und Umgebung.'
        />
        <meta
          property='og:title'
          content='Saim Mobilephysio - Mobile Physiotherapie in Sankt Augustin'
        />
        <meta
          property='og:url'
          content='https://saim-mobilephysio.de'
        />
        <meta
          name='twitter:title'
          content='Saim Mobilephysio - Mobile Physiotherapie'
        />
      </Head>

      <Header />
      <Intro />
      <Services />
      <Price />
      <Form />
      <Contact />
    </>
  )
}
