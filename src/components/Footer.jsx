import styles from '../pages/Footer.module.css'

function Footer() {
  const año = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.texto}>
          © {año} <span className={styles.marca}>SignaTour</span> — Itinerarios culturales accesibles
        </p>
        <p className={styles.texto}>
          Proyecto desarrollado por 
          <a href="https://github.com/olatzglez" className={styles.enlace}>Olatz González</a>.
        </p>
      </div>
    </footer>
  )
}

export default Footer