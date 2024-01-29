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
        <title>Saim Mobilephysio</title>
        <meta
          property='og:title'
          content='Saim Mobilephysio'
        />
        <meta
          property='og:url'
          content='https://saim-mobilephysio.de'
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
