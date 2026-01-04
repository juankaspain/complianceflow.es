import { useState, useEffect, useCallback } from 'react'

// ============================================================================
// TYPES
// ============================================================================

type SetValue<T> = T | ((prev: T) => T)

interface UseLocalStorageOptions<T> {
  serializer?: (value: T) => string
  deserializer?: (value: string) => T
  initializeWithValue?: boolean
}

// ============================================================================
// USELOCALSTORAGE HOOK
// ============================================================================

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  options: UseLocalStorageOptions<T> = {}
): [T, (value: SetValue<T>) => void, () => void] {
  const {
    serializer = JSON.stringify,
    deserializer = JSON.parse,
    initializeWithValue = true,
  } = options

  // Get initial value from localStorage or use provided initial value
  const readValue = useCallback((): T => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? deserializer(item) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  }, [key, initialValue, deserializer])

  const [storedValue, setStoredValue] = useState<T>(() => {
    if (initializeWithValue) {
      return readValue()
    }
    return initialValue
  })

  // Return a wrapped version of useState's setter function that persists to localStorage
  const setValue = useCallback(
    (value: SetValue<T>) => {
      if (typeof window === 'undefined') {
        console.warn(`Tried setting localStorage key "${key}" even though environment is not a client`)
      }

      try {
        const newValue = value instanceof Function ? value(storedValue) : value

        window.localStorage.setItem(key, serializer(newValue))

        setStoredValue(newValue)

        // Dispatch custom event for other hooks/components
        window.dispatchEvent(new StorageEvent('local-storage', { key }))
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error)
      }
    },
    [key, storedValue, serializer]
  )

  // Remove value from localStorage
  const removeValue = useCallback(() => {
    if (typeof window === 'undefined') {
      console.warn(`Tried removing localStorage key "${key}" even though environment is not a client`)
      return
    }

    try {
      window.localStorage.removeItem(key)
      setStoredValue(initialValue)
      window.dispatchEvent(new StorageEvent('local-storage', { key }))
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error)
    }
  }, [key, initialValue])

  // Listen for changes from other tabs/windows
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        setStoredValue(deserializer(e.newValue))
      }
    }

    const handleCustomStorageChange = (e: Event) => {
      if ((e as CustomEvent).detail?.key === key) {
        setStoredValue(readValue())
      }
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('local-storage', handleCustomStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('local-storage', handleCustomStorageChange)
    }
  }, [key, deserializer, readValue])

  return [storedValue, setValue, removeValue]
}

// ============================================================================
// USESESSIONSTORAGE HOOK
// ============================================================================

export function useSessionStorage<T>(
  key: string,
  initialValue: T
): [T, (value: SetValue<T>) => void, () => void] {
  const readValue = useCallback((): T => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.sessionStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Error reading sessionStorage key "${key}":`, error)
      return initialValue
    }
  }, [key, initialValue])

  const [storedValue, setStoredValue] = useState<T>(readValue)

  const setValue = useCallback(
    (value: SetValue<T>) => {
      if (typeof window === 'undefined') {
        console.warn(`Tried setting sessionStorage key "${key}" even though environment is not a client`)
        return
      }

      try {
        const newValue = value instanceof Function ? value(storedValue) : value
        window.sessionStorage.setItem(key, JSON.stringify(newValue))
        setStoredValue(newValue)
      } catch (error) {
        console.warn(`Error setting sessionStorage key "${key}":`, error)
      }
    },
    [key, storedValue]
  )

  const removeValue = useCallback(() => {
    if (typeof window === 'undefined') {
      console.warn(`Tried removing sessionStorage key "${key}" even though environment is not a client`)
      return
    }

    try {
      window.sessionStorage.removeItem(key)
      setStoredValue(initialValue)
    } catch (error) {
      console.warn(`Error removing sessionStorage key "${key}":`, error)
    }
  }, [key, initialValue])

  return [storedValue, setValue, removeValue]
}

// ============================================================================
// STORAGE UTILITIES
// ============================================================================

export const storage = {
  /**
   * Get item from localStorage with type safety
   */
  getItem: <T,>(key: string, defaultValue: T): T => {
    if (typeof window === 'undefined') return defaultValue

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch {
      return defaultValue
    }
  },

  /**
   * Set item in localStorage
   */
  setItem: <T,>(key: string, value: T): void => {
    if (typeof window === 'undefined') return

    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  },

  /**
   * Remove item from localStorage
   */
  removeItem: (key: string): void => {
    if (typeof window === 'undefined') return

    try {
      window.localStorage.removeItem(key)
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error)
    }
  },

  /**
   * Clear all localStorage
   */
  clear: (): void => {
    if (typeof window === 'undefined') return

    try {
      window.localStorage.clear()
    } catch (error) {
      console.warn('Error clearing localStorage:', error)
    }
  },
}
