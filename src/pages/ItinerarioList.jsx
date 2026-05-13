import { useState, useEffect } from 'react'
import ItinerarioCard from '../components/ItinerarioCard'
import { itinerarios as mockData } from '../mocks/itinerarios'
import styles from './ItinerarioList.module.css'

function ItinerarioList() {
  const [lista, setLista] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLista(mockData)
    setLoading(false)
  }, [])

  if (loading) return <p className={styles.mensaje}>Cargando itinerarios...</p>

  if (lista.length === 0) return (
    <p className={styles.mensaje}>No hay itinerarios disponibles.</p>
  )

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.titulo}>Itinerarios accesibles</h1>
        <p className={styles.subtitulo}>
          Descubre rutas culturales adaptadas para personas sordas o con discapacidad auditiva
        </p>
      </div>

      {/* role="list" mejora la accesibilidad en lectores de pantalla */}
      <div className={styles.grid} role="list">
        {lista.map(itinerario => (
          <div role="listitem" key={itinerario.id}>
            <ItinerarioCard itinerario={itinerario} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ItinerarioList