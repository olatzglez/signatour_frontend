import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { itinerarios } from '../mocks/itinerarios'
import styles from './ItinerarioDetail.module.css'

function ItinerarioDetail() {
  const { id } = useParams()
  const [itinerario, setItinerario] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const encontrado = itinerarios.find(i => i.id === Number(id))

    if (encontrado) {
      setItinerario(encontrado)
    } else {
      setError('Itinerario no encontrado.')
    }

    setLoading(false)
  }, [id])

  if (loading) return <p className={styles.error}>Cargando...</p>

  if (error) return (
    <div className={styles.error}>
      <p>{error}</p>
      <Link to="/itinerarios" className={styles.volver}>
        Volver a la lista
      </Link>
    </div>
  )

  return (
    <article className={styles.article}>
      <Link to="/itinerarios" className={styles.volver}>
        Volver a la lista
      </Link>

      <h1 className={styles.titulo}>{itinerario.titulo}</h1>

      <p className={styles.ubicacion}>
        {itinerario.ciudad}, {itinerario.provincia}
      </p>

      <p className={styles.descripcion}>{itinerario.descripcion}</p>

      {/* Metadatos del itinerario en píldoras */}
      <div className={styles.meta}>
        {itinerario.duracionMinutos && (
          <span className={styles.metaItem}>
            ⏱ {itinerario.duracionMinutos} minutos
          </span>
        )}
        {itinerario.publico && (
          <span className={styles.metaItem}>
            👥 {itinerario.publico}
          </span>
        )}
      </div>
    </article>
  )
}

export default ItinerarioDetail