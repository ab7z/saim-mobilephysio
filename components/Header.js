import Image from "next/image"
import styles from "../styles/components/Header.module.css"

export default function Header() {
  return (
    <header
      id={"home"}
      className={styles.header}
    >
      <div className={styles.hero}>
        <Image
          src='/header.webp'
          alt='Dekoratives Bild mit heilenden Händen'
          aria-label='Dekoratives Bild mit heilenden Händen'
          priority
          fill
        />
      </div>

      <h1 className={styles.title}>
        <span>Saim Mobile Physiotherapie</span>
        <span>privat &mdash; {new Date().getFullYear() - 1999} Jahre Berufserfahrung</span>
      </h1>

      <div className={styles.img_wrapper}>
        <Image
          src='/f.webp'
          alt='Staatlich anerkannte Physiotherapeutin Saim'
          aria-label='Staatlich anerkannte Physiotherapeutin Saim'
          priority
          quality={100}
          fill
          className={styles.img}
        />
      </div>

      <p className={styles.expertise}>
        Staatlich anerkannte Manualtherapeutin, Physiotherapeutin, Ödemtherapeutin und Personal Trainerin
      </p>
    </header>
  )
}
