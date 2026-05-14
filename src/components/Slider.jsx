import { useRef, useState } from 'react'
import styles from './Slider.module.css'

// Este componente recibe:
// - titulo: el título de la sección
// - enlace: la ruta del "Ver todos" (opcional)
// - items: el array de datos
// - renderItem: función que dice cómo pintar cada item
function Slider({ titulo, enlace, enlaceTexto = 'Ver todos →', items, renderItem }) {
  const sliderRef = useRef(null) // referencia al div del slider para controlarlo
  const [puedeIrAtras, setPuedeIrAtras] = useState(false)
  const [puedeIrAdelante, setPuedeIrAdelante] = useState(true)

  const SCROLL_AMOUNT = 340 // píxeles que avanza cada vez que pulsas la flecha

  // Actualiza si los botones deben estar activos o desactivados
  const actualizarBotones = () => {
    const el = sliderRef.current
    if (!el) return
    setPuedeIrAtras(el.scrollLeft > 0)
    setPuedeIrAdelante(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }

  const irAtras = () => {
    sliderRef.current.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' })
  }

  const irAdelante = () => {
    sliderRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.titulo}>{titulo}</h2>

        <div className={styles.controles}>

          <button
            className={styles.flecha}
            onClick={irAtras}
            disabled={!puedeIrAtras}
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            className={styles.flecha}
            onClick={irAdelante}
            disabled={!puedeIrAdelante}
            aria-label="Siguiente"
          >
            →
          </button>
        </div>
      </div>

      {/* onScroll actualiza los botones mientras el usuario arrastra */}
      <div
        className={styles.slider}
        ref={sliderRef}
        onScroll={actualizarBotones}
        role="region"
        aria-label={titulo}
      >
        {items.map((item, index) => (
          <div className={styles.item} key={index}>
            {renderItem(item)}
          </div>
        ))}
      </div>
        {enlace && (
            <a href={enlace} className={styles.verTodos}>{enlaceTexto}</a>
        )}
    </div>
  )
}

export default Slider