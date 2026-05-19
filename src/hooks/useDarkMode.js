import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

function useDarkMode() {
  // Guardamos la preferencia en localStorage
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false)

  useEffect(() => {
    // Añadimos o quitamos el atributo data-theme en el <html>
    // Esto activa o desactiva las variables CSS del modo oscuro
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [darkMode]) // se ejecuta cada vez que cambia darkMode

  return [darkMode, setDarkMode]
}

export default useDarkMode