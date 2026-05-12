import { useState, useEffect } from 'react'
import ItinerarioCard from '../components/ItinerarioCard'
import { itinerarios as mockData } from '../mocks/itinerarios'

function ItinerarioList() {
  const [lista, setLista] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulamos una llamada a la API con los mocks
    setLista(mockData)
    setLoading(false)
  }, [])

  if (loading) return <p>Cargando itinerarios...</p>

  return (
    <section>
      <h1>Itinerarios accesibles</h1>
      {lista.map(itinerario => (
        <ItinerarioCard key={itinerario.id} itinerario={itinerario} />
      ))}
    </section>
  )
}

export default ItinerarioList