import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from './Navbar.module.css'

function Navbar() {
  const { user, removeUser } = useAuth()
  const navigate = useNavigate()
  const [menuAbierto, setMenuAbierto] = useState(false)

  const handleLogout = () => {
    removeUser()
    navigate('/login')
    setMenuAbierto(false)
  }

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <>
      {/* Navbar normal — visible en escritorio */}
      <nav className={styles.navbar}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo} onClick={cerrarMenu}>
            SignaTour
          </Link>

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

          {/* Botón hamburguesa — solo visible en móvil y tablet */}
          <button
            className={styles.menuBtn}
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuAbierto}
            aria-controls="nav-menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Menú overlay — ocupa el 100% de la pantalla en móvil y tablet */}
      <div
        id="nav-menu"
        className={`${styles.menuOverlay} ${menuAbierto ? styles.menuOverlayOpen : ''}`}
        role="dialog"
        aria-label="Menú de navegación"
      >
        {/* Cabecera del overlay con logo y botón de cerrar */}
        <div className={styles.menuOverlayHeader}>
          <Link to="/" className={styles.logo} onClick={cerrarMenu}>
            SignaTour
          </Link>
          <button
            onClick={cerrarMenu}
            aria-label="Cerrar menú"
            className={styles.menuBtn}
          >
            ✕
          </button>
        </div>

        {/* Enlaces de navegación grandes */}
        <ul className={styles.menuOverlayNav}>
          <li><Link to="/" onClick={cerrarMenu}>Inicio</Link></li>
          <li><Link to="/itinerarios" onClick={cerrarMenu}>Itinerarios</Link></li>
        </ul>

        {/* Acciones de sesión al fondo */}
        <div className={styles.menuOverlayActions}>
          {user ? (
            <>
              <span className={styles.greeting}>Hola, {user.nombre}</span>
              <button className={styles.btnLogout} onClick={handleLogout}>
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={cerrarMenu}>Iniciar sesión</Link>
              <Link to="/register" className={styles.btnRegister} onClick={cerrarMenu}>
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar