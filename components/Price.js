import Image from 'next/image'
import styles from '../styles/components/Price.module.css'

export default function Price() {
  return (
    <section
      className={styles.prices}
      id={'prices'}
    >
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Preise &mdash; 170€ pro 60 Minuten</h2>
        <div>
          <p className={styles.p}>
            Ich bin eine Privat­praxis und habe keinen Vertrag mit einer gesetz­lichen
            Kranken­kas­se. Ich stelle meine Rech­nung direkt an Sie als Patient und Sie reichen
            diese an Ihre private Kran­ken­ver­sich­erung (PKV) zur Er­stat­tung weiter. Ihre
            Ver­sicher­ung er­stat­tet ent­spre­chend die ver­ord­neten Kosten.
          </p>
          <p>Die The­rapie­dauer be­trägt 60 Minuten.</p>
          {/* TODO: text aus dem bild hier rein tun als unterseite */}
        </div>
        <div className={styles.pricing}>
          <p>Es gibt zwei Mög­lich­kei­ten:</p>
          <div>
            <div className={[styles.rect, styles.effect5].join(' ')}>
              <p>
                Im Normal­fall (Be­hand­lung aufgrund einer Krank­heit) legen Sie mir ein Rezept von
                Ihrem Arzt vor. Der Preis pro The­rapie­sit­zung (60 Minuten) be­trägt in diesem
                Fall <b>170€</b>. Mehrwertsteuer fällt nicht an.
              </p>
            </div>
            <div className={[styles.rect, styles.effect5].join(' ')}>
              <p>
                Wenn Sie keine Beschwerden haben, sondern präventiv (ohne ärztliche Verordnung) von
                mir behandelt werden möchten, liegt der Preis bei <b>190€</b> inkl. Mehrwertsteuer.
              </p>
            </div>
          </div>
        </div>

        <Image
          src={'/preisliste.webp'}
          width={640}
          height={685}
          alt={'Preisliste'}
          className={styles.list}
          priority
          sizes='(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 600px'
        />
      </div>
    </section>
  )
}
