// Un componente de presentación puro: no tiene estado ni efectos,
// solo muestra información estática. Es el tipo más sencillo de componente.
function Footer() {
  // new Date().getFullYear() devuelve el año actual automáticamente
  // así no tienes que actualizarlo cada año a mano
  const año = new Date().getFullYear()

  return (
    <footer>
      <p>© {año} SignaTour — Itinerarios culturales accesibles</p>
      <p>Proyecto desarrollado para The Bridge</p>
    </footer>
  )
}

export default Footer