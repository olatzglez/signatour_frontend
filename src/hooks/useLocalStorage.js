import { useState, useEffect } from 'react'

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  useEffect(() => {
    const handleStorage = () => {
      const item = localStorage.getItem(key)
      setStoredValue(item ? JSON.parse(item) : initialValue)
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [key])

  const setValue = (value) => {
    setStoredValue(value)
    localStorage.setItem(key, JSON.stringify(value))
  }

  const removeValue = () => {
    setStoredValue(null)
    localStorage.removeItem(key)
  }

  return [storedValue, setValue, removeValue]
}

export default useLocalStorage