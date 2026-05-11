import { useState } from 'react'
import ItinerarioCard from '../components/ItinerarioCard'
import { itinerarios } from '../mocks/itinerarios'

function ItinerarioList() {
  const [lista, setLista] = useState(itinerarios)

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