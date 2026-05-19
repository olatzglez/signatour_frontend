const API_URL = 'http://localhost:4567/api'

export async function getItinerarios() {
  const response = await fetch(`${API_URL}/itinerarios`)
  const data = await response.json()
  return data
}

export async function getItinerarioById(id) {
  const response = await fetch(`${API_URL}/itinerarios/${id}`)
  const data = await response.json()
  return data
}