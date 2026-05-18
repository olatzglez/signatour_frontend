import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import useDarkMode from '../hooks/useDarkMode'
import styles from './Navbar.module.css'

function Navbar() {
  const { user, removeUser } = useAuth()
  const navigate = useNavigate()
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [darkMode, setDarkMode] = useDarkMode()

  const handleLogout = () => {
    removeUser()
    navigate('/login')
    setMenuAbierto(false)
  }

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            <img src="../logo_ST.svg" alt="SignaTour" height="40" />
            <span>SignaTour</span>
          </Link>

          <ul className={styles.nav}>
            <li><Link to="/itinerarios">Itinerarios</Link></li>
            <li><Link to="#">Ciudades</Link></li>
          </ul>

          <div className={styles.actions}>
            {/* Botón modo oscuro */}
            <button
              className={styles.btnDarkMode}
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
              title={darkMode ? 'Modo claro' : 'Modo oscuro'}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

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

      <div
        id="nav-menu"
        className={`${styles.menuOverlay} ${menuAbierto ? styles.menuOverlayOpen : ''}`}
        role="dialog"
        aria-label="Menú de navegación"
      >
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

        <ul className={styles.menuOverlayNav}>
          <li><Link to="/" onClick={cerrarMenu}>Inicio</Link></li>
          <li><Link to="/itinerarios" onClick={cerrarMenu}>Itinerarios</Link></li>
        </ul>

        <div className={styles.menuOverlayActions}>
          {/* Botón modo oscuro también en el menú móvil */}
          <button
            className={styles.btnDarkMode}
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
          >
            {darkMode ? '☀️ Modo claro' : '🌙 Modo oscuro'}
          </button>

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