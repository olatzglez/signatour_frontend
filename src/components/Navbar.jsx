import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from './Navbar.module.css'

function Navbar() {
  const { user, removeUser } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    removeUser()
    navigate('/login')
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>SignaTour</Link>

        <ul className={styles.nav}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/itinerarios">Itinerarios</Link></li>
        </ul>

        <div className={styles.actions}>
          {user ? (
            <>
              <span className={styles.greeting}>Hola, {user.nombre}</span>
              <button className={styles.btnLogout} onClick={handleLogout}>
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Iniciar sesión</Link>
              <Link to="/register" className={styles.btnRegister}>
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar