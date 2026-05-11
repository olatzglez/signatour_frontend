import { useParams } from 'react-router-dom'
import { itinerarios } from '../mocks/itinerarios'

function ItinerarioDetail() {
  const { id } = useParams()

  const itinerario = itinerarios.find(i => i.id === Number(id))

  if (!itinerario) {
    return <p>
        Itinerario no encontrado.
        Intenta buscar otro <a href="/itinerarios">itinerario</a> o vuelve a la página de <a href="/">inicio</a>.
        </p>
  }

  return (
    <article>
      <h1>{itinerario.titulo}</h1>
      <p>{itinerario.ciudad}, {itinerario.provincia}</p>
      <p>{itinerario.descripcion}</p>
      <p>Duración: {itinerario.duracionMinutos} minutos</p>
      <p>Público: {itinerario.publico}</p>
    </article>
  )
}

export default ItinerarioDetail