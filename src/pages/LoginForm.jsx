import { useState } from 'react'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validación básica
    if (!email || !password) {
      setError('Por favor, rellena todos los campos.')
      return
    }

    // De momento solo mostramos los datos en consola
    // El miércoles conectaremos esto con la API real
    console.log('Login con:', email, password)
    setError(null)
  }

  return (
    <section>
      <h1>Iniciar sesión</h1>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Entrar</button>
      </form>
    </section>
  )
}

export default LoginForm