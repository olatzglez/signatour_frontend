import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from './LoginForm.module.css'

function RegisterForm() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(null)
  const { setUser } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!nombre || !email || !password || !confirmPassword) {
      setError('Por favor, rellena todos los campos.')
      return
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.')
      return
    }

    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.')
      return
    }

    const nuevoUsuario = {
      id: Date.now(),
      nombre,
      email,
      rol: 'user'
    }

    setUser(nuevoUsuario)
    navigate('/')
  }

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h1 className={styles.titulo}>Crear cuenta</h1>

        {error && (
          <p className={styles.error} role="alert">{error}</p>
        )}

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.campo}>
            <label htmlFor="nombre" className={styles.label}>Nombre</label>
            <input
              id="nombre"
              type="text"
              className={styles.input}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              autoComplete="name"
              aria-required="true"
            />
          </div>

          <div className={styles.campo}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              id="email"
              type="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              aria-required="true"
            />
          </div>

          <div className={styles.campo}>
            <label htmlFor="password" className={styles.label}>Contraseña</label>
            <input
              id="password"
              type="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              aria-required="true"
            />
          </div>

          <div className={styles.campo}>
            <label htmlFor="confirmPassword" className={styles.label}>
              Confirmar contraseña
            </label>
            <input
              id="confirmPassword"
              type="password"
              className={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              aria-required="true"
            />
          </div>

          <button type="submit" className={styles.boton}>
            Registrarse
          </button>
        </form>

        <p className={styles.enlace}>
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </section>
  )
}

export default RegisterForm