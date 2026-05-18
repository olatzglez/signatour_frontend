import { Link } from 'react-router-dom'
import styles from './ItinerarioCard.module.css'

function ItinerarioCard({ itinerario }) {
  return (
    <article className={styles.card}>

      {/* El Link envuelve todo el contenido de la card */}
      {/* target="_blank" abre en pestaña nueva */}
      {/* rel="noopener noreferrer" es obligatorio por seguridad cuando usas target="_blank" */}
      {/* title avisa al usuario de que se abrirá en pestaña nueva */}
      <Link
        to={`/itinerarios/${itinerario.id}`}
        className={styles.enlace}
        target="_blank"
        rel="noopener noreferrer"
        title={`Ver itinerario ${itinerario.titulo} (se abre en pestaña nueva)`}
        aria-label={`Ver itinerario ${itinerario.titulo}, se abre en pestaña nueva`}
      >
        {/* Imagen de fondo */}
        <img
          src={itinerario.imagen}
          alt={`Vista de ${itinerario.ciudad}`}
          className={styles.imagen}
        />

        {/* Degradado verde oscuro sobre la imagen */}
        <div className={styles.degradado} aria-hidden="true" />

        {/* Icono de flecha arriba a la derecha */}
        <span className={styles.icono} aria-hidden="true">↗</span>

        {/* Texto pegado al fondo */}
        <div className={styles.contenido}>
          <h2 className={styles.titulo}>{itinerario.titulo}</h2>
          <p className={styles.descripcion}>{itinerario.descripcion}</p>
        </div>

      </Link>
    </article>
  )
}

export default ItinerarioCard