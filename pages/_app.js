import { Dancing_Script, Roboto } from "next/font/google"
import Footer from "../components/Footer"
import "../styles/globals.css"

const roboto = Roboto({
  display: "swap",
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

const dancingScript = Dancing_Script({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-dancing-script",
})

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={[roboto.className, dancingScript.variable].join(" ")}>
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  )
}
