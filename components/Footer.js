import { Roboto } from "next/font/google"
import Link from "next/link"
import styles from "../styles/components/Footer.module.css"

const roboto = Roboto({
  display: "swap",
  weight: ["300"],
  style: ["normal"],
  subsets: ["latin"],
})

const Footer = () => {
  return (
    <footer className={[styles.footer, roboto.className].join(" ")}>
      <div className={styles.copyRight}>
        <p>&copy; {new Date().getFullYear()} Saim Mobilephysio</p>
      </div>
      <div className={styles.links}>
        <Link href={"/"}>Home</Link>
        <Link href={"/terms"}>Impressum</Link>
        <Link href={"/privacy"}>Datenschutz</Link>
      </div>
    </footer>
  )
}

export default Footer
