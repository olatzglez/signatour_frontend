import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function RegisterForm() {
  // Un estado por cada campo del formulario
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(null)

  const { setUser } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    // preventDefault evita que el formulario recargue la página
    e.preventDefault()

    // Validaciones — comprobamos cada campo antes de continuar
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

    // Creamos el nuevo usuario con rol 'user' por defecto
    // En un proyecto real aquí haríamos un POST a la API
    const nuevoUsuario = {
      id: Date.now(), // generamos un id único con la fecha actual
      nombre,
      email,
      rol: 'user'
    }

    // Lo guardamos en el contexto y en localStorage
    setUser(nuevoUsuario)

    // Redirigimos a la home
    navigate('/')
  }

  return (
    <section>
      <h1>Crear cuenta</h1>

      {/* Solo mostramos el error si existe */}
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit">Registrarse</button>
      </form>

      <p>
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </section>
  )
}

export default RegisterForm