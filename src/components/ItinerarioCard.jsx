import { Link } from 'react-router-dom'
import styles from './ItinerarioCard.module.css'

function ItinerarioCard({ itinerario }) {
  return (
    <article className={styles.card}>
      <h2 className={styles.titulo}>{itinerario.titulo}</h2>

      <p className={styles.ubicacion}>
        {itinerario.ciudad}, {itinerario.provincia}
      </p>

      <p className={styles.descripcion}>{itinerario.descripcion}</p>

      <div className={styles.footer}>
        {itinerario.duracionMinutos && (
          <span className={styles.duracion}>
            {itinerario.duracionMinutos} min
          </span>
        )}
        <Link
          to={`/itinerarios/${itinerario.id}`}
          className={styles.enlace}
          aria-label={`Ver itinerario ${itinerario.titulo}`}
        >
          Ver itinerario
        </Link>
      </div>
    </article>
  )
}

export default ItinerarioCard