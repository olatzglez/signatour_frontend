import { Link } from 'react-router-dom'
import { itinerarios } from '../mocks/itinerarios'
import { ciudades } from '../mocks/ciudades'
import ItinerarioCard from '../components/ItinerarioCard'
import Slider from '../components/Slider'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitulo}>
          Cultura accesible para <span>todos</span>
        </h1>
        <p className={styles.heroSubtitulo}>
          Descubre itinerarios culturales adaptados para personas sordas
          o con discapacidad auditiva. LSE, subtítulos, signoguías y mucho más.
        </p>
        <div className={styles.heroBtns}>
          <Link to="/itinerarios" className={styles.btnPrimario}>
            Ver itinerarios
          </Link>
          <Link to="/register" className={styles.btnSecundario}>
            Crear cuenta
          </Link>
        </div>
      </section>

      {/* Slider de itinerarios */}
      <Slider
        titulo="Itinerarios destacados"
        enlace="/itinerarios"
        items={itinerarios}
        renderItem={(itinerario) => (
          <ItinerarioCard itinerario={itinerario} />
        )}
      />

      {/* Slider de ciudades */}
      <Slider
        titulo="Explora por ciudades"
        items={ciudades}
        renderItem={(ciudad) => (
          <article className={styles.ciudadCard}>
            <span className={styles.ciudadEmoji} aria-hidden="true">
              {ciudad.emoji}
            </span>
            <h3 className={styles.ciudadNombre}>{ciudad.nombre}</h3>
            <p className={styles.ciudadProvincia}>{ciudad.provincia}</p>
            <p className={styles.ciudadDescripcion}>{ciudad.descripcion}</p>
          </article>
        )}
      />

    </div>
  )
}

export default Home