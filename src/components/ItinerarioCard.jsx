import { Link } from 'react-router-dom'
import styles from './ItinerarioCard.module.css'

function ItinerarioCard({ itinerario }) {
  return (
    <article className={styles.card}>

      {/* Imagen de fondo */}
      <img
        src={itinerario.imagen}
        alt={`Imagen de ${itinerario.ciudad}`}
        className={styles.imagen}
      />

      {/* Degradado verde oscuro sobre la imagen */}
      <div className={styles.degradado} aria-hidden="true" />

      {/* Texto pegado al fondo */}
      <div className={styles.contenido}>
        <h2 className={styles.titulo}>{itinerario.titulo}</h2>
        <p className={styles.descripcion}>{itinerario.descripcion}</p>
      </div>

      {/* Flecha naranja arriba a la derecha */}
      <Link
        to={`/itinerarios/${itinerario.id}`}
        className={styles.enlace}
        aria-label={`Ver itinerario ${itinerario.titulo}`}
      >
        ↗
      </Link>

    </article>
  )
}

export default ItinerarioCard