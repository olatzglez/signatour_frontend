import { Link } from 'react-router-dom'

function ItinerarioCard({ itinerario }) {
  return (
    <article>
      <h2>{itinerario.titulo}</h2>
      <p>{itinerario.ciudad}, {itinerario.provincia}</p>
      <p>{itinerario.descripcion}</p>
      <Link to={`/itinerarios/${itinerario.id}`}>Ver itinerario</Link>
    </article>
  )
}

export default ItinerarioCard