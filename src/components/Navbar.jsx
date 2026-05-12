import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, removeUser } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    removeUser()
    navigate('/login')
  }

  return (
    <nav>
      <Link to="/">SignaTour</Link>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/itinerarios">Itinerarios</Link></li>
      </ul>
      <div>
        {user ? (
          <>
            <span>Hola, {user.nombre}</span>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </>
        ) : (
          <>
          <Link to="/login">Iniciar sesión</Link>
          <Link to="/register">Registrarse</Link> 
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar