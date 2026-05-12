import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { itinerarios } from '../mocks/itinerarios'

function ItinerarioDetail() {
  // useParams lee el :id de la URL, por ejemplo /itinerarios/2 → id = "2"
  const { id } = useParams()

  // Tres estados: el itinerario encontrado, si está cargando, y si hay error
  const [itinerario, setItinerario] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // useEffect se ejecuta cada vez que cambia el id de la URL
  // Si navegas de /itinerarios/1 a /itinerarios/2, vuelve a buscar
  useEffect(() => {
    const encontrado = itinerarios.find(i => i.id === Number(id))

    if (encontrado) {
      setItinerario(encontrado)
    } else {
      setError('Itinerario no encontrado.')
    }

    setLoading(false)
  }, [id]) // ← [id] significa "ejecuta esto cada vez que cambie el id"

  if (loading) return <p>Cargando...</p>

  if (error) return (
    <p>
      {error} Intenta buscar otro <Link to="/itinerarios">itinerario</Link> o
      vuelve a la página de <Link to="/">inicio</Link>.
    </p>
  )

  return (
    <article>
      <h1>{itinerario.titulo}</h1>
      <p>{itinerario.ciudad}, {itinerario.provincia}</p>
      <p>{itinerario.descripcion}</p>
      <p>Duración: {itinerario.duracionMinutos} minutos</p>
      <p>Público: {itinerario.publico}</p>
      <Link to="/itinerarios">← Volver a la lista</Link>
    </article>
  )
}

export default ItinerarioDetail