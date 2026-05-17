import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { usuarios } from '../mocks/usuarios'
import styles from './LoginForm.module.css'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { setUser } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Por favor, rellena todos los campos.')
      return
    }

    // Validación de formato de email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setError('Por favor, introduce un email válido.')
      return
    }

    const usuario = usuarios.find(
      u => u.email === email && u.password === password
    )

    if (!usuario) {
      setError('Email o contraseña incorrectos.')
      return
    }

    setUser(usuario)
    navigate('/')
  }

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h1 className={styles.titulo}>Iniciar sesión</h1>

        {error && (
          <p className={styles.error} role="alert">{error}</p>
        )}

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
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
              autoComplete="current-password"
              aria-required="true"
            />
          </div>

          <button type="submit" className={styles.boton}>
            Entrar
          </button>
        </form>

        <p className={styles.enlace}>
          ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </div>
    </section>
  )
}

export default LoginForm