import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <nav>
      <Link to="/">SignaTour</Link>

      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/itinerarios">Itinerarios</Link></li>
      </ul>

      <div>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Cerrar sesión</button>
        ) : (
          <Link to="/login">Iniciar sesión</Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar