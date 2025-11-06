import styles from '../styles/components/Form.module.css'

export default function Form() {
  const handleFormSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
  }

  return (
    <>
      <div style={{ padding: '0 4rem', marginBottom: '3rem' }}>
        <p style={{ color: 'black' }}>
          <b>Sie können gerne das Kontakformular unten ausfüllen:</b>
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.login_box}>
          <h2>Anmeldeformular</h2>
          <form
            name='contact'
            onSubmit={handleFormSubmit}
          >
            <input
              type='hidden'
              name='form-name'
              value='contact'
            />
            <div
              style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '1.5rem' }}
            >
              <div style={{ display: 'flex' }}>
                <input
                  type='radio'
                  name='rezept'
                  id='mit'
                  required={true}
                />
                <label htmlFor='mit' style={{ color: 'white' }}>mit Rezept</label>
              </div>
              <div style={{ display: 'flex' }}>
                <input
                  type='radio'
                  name='rezept'
                  id='ohne'
                  required={true}
                />
                <label htmlFor='ohne' style={{ color: 'white' }}>ohne Rezept</label>
              </div>
            </div>
            <div className={styles.user_box}>
              <input
                type='text'
                name='name'
                id='name'
                required={true}
              />
              <label htmlFor='name'>Vorname/Name</label>
            </div>
            <div className={styles.user_box}>
              <input
                type='text'
                name='birthday'
                id='birthday'
                required={true}
              />
              <label htmlFor='birthday'>Geb. Datum</label>
            </div>
            <div className={styles.user_box}>
              <input
                type='tel'
                name='phone'
                id='phone'
                required={true}
              />
              <label htmlFor='phone'>Telefon</label>
            </div>
            <div className={styles.user_box}>
              <input
                type='email'
                name='email'
                id='email'
                required={true}
              />
              <label htmlFor='email'>email</label>
            </div>
            <div className={styles.user_box}>
              <input
                type='text'
                name='zip'
                id='zip'
                required={true}
              />
              <label htmlFor='zip'>PLZ/Ort</label>
            </div>
            <div className={styles.user_box}>
              <input
                type='text'
                name='address'
                id='address'
                required={true}
              />
              <label htmlFor='address'>Straße/Hausnummer</label>
            </div>
            <div>
              <label htmlFor='message' style={{ color: 'white' }}>Ihre Nachricht</label>
              <textarea
                name='message'
                id='message'
                required={false}
                rows={10}
                style={{ width: '100%', marginTop: '1rem' }}
              />
            </div>
            <button type='submit'>Senden</button>
          </form>
        </div>
      </div>
    </>
  )
}
