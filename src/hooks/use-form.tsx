import { useState, useCallback, FormEvent } from 'react'
import { z } from 'zod'

// ============================================================================
# TYPES
// ============================================================================

interface UseFormOptions<T> {
  initialValues: T
  schema: z.ZodSchema<T>
  onSubmit: (values: T) => Promise<void> | void
}

interface FormState<T> {
  values: T
  errors: Partial<Record<keyof T, string>>
  touched: Partial<Record<keyof T, boolean>>
  isSubmitting: boolean
  isValid: boolean
  isDirty: boolean
}

// ============================================================================
// USEFORM HOOK
// ============================================================================

export function useForm<T extends Record<string, any>>({
  initialValues,
  schema,
  onSubmit,
}: UseFormOptions<T>) {
  const [state, setState] = useState<FormState<T>>({
    values: initialValues,
    errors: {},
    touched: {},
    isSubmitting: false,
    isValid: false,
    isDirty: false,
  })

  // Validate single field
  const validateField = useCallback(
    (name: keyof T, value: any): string | undefined => {
      try {
        const fieldSchema = schema.shape[name as string]
        if (fieldSchema) {
          fieldSchema.parse(value)
        }
        return undefined
      } catch (error) {
        if (error instanceof z.ZodError) {
          return error.errors[0]?.message
        }
        return 'Error de validación'
      }
    },
    [schema]
  )

  // Validate all fields
  const validateForm = useCallback((): boolean => {
    try {
      schema.parse(state.values)
      setState((prev) => ({ ...prev, errors: {}, isValid: true }))
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Partial<Record<keyof T, string>> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            errors[err.path[0] as keyof T] = err.message
          }
        })
        setState((prev) => ({ ...prev, errors, isValid: false }))
      }
      return false
    }
  }, [schema, state.values])

  // Handle change
  const handleChange = useCallback(
    (name: keyof T) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value

      setState((prev) => ({
        ...prev,
        values: { ...prev.values, [name]: value },
        isDirty: true,
      }))

      // Validate field if touched
      if (state.touched[name]) {
        const error = validateField(name, value)
        setState((prev) => ({
          ...prev,
          errors: { ...prev.errors, [name]: error },
        }))
      }
    },
    [state.touched, validateField]
  )

  // Handle blur
  const handleBlur = useCallback(
    (name: keyof T) => () => {
      setState((prev) => ({
        ...prev,
        touched: { ...prev.touched, [name]: true },
      }))

      const error = validateField(name, state.values[name])
      setState((prev) => ({
        ...prev,
        errors: { ...prev.errors, [name]: error },
      }))
    },
    [state.values, validateField]
  )

  // Handle submit
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      // Mark all fields as touched
      const touched: Partial<Record<keyof T, boolean>> = {}
      Object.keys(state.values).forEach((key) => {
        touched[key as keyof T] = true
      })
      setState((prev) => ({ ...prev, touched }))

      // Validate
      if (!validateForm()) {
        return
      }

      // Submit
      setState((prev) => ({ ...prev, isSubmitting: true }))
      try {
        await onSubmit(state.values)
      } catch (error) {
        console.error('Form submission error:', error)
      } finally {
        setState((prev) => ({ ...prev, isSubmitting: false }))
      }
    },
    [state.values, validateForm, onSubmit]
  )

  // Set field value programmatically
  const setFieldValue = useCallback((name: keyof T, value: any) => {
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [name]: value },
      isDirty: true,
    }))
  }, [])

  // Set field error
  const setFieldError = useCallback((name: keyof T, error: string) => {
    setState((prev) => ({
      ...prev,
      errors: { ...prev.errors, [name]: error },
    }))
  }, [])

  // Reset form
  const reset = useCallback(() => {
    setState({
      values: initialValues,
      errors: {},
      touched: {},
      isSubmitting: false,
      isValid: false,
      isDirty: false,
    })
  }, [initialValues])

  // Get field props
  const getFieldProps = useCallback(
    (name: keyof T) => ({
      name: name as string,
      value: state.values[name] || '',
      onChange: handleChange(name),
      onBlur: handleBlur(name),
      error: state.errors[name],
      'aria-invalid': !!state.errors[name],
      'aria-describedby': state.errors[name] ? `${String(name)}-error` : undefined,
    }),
    [state.values, state.errors, handleChange, handleBlur]
  )

  return {
    values: state.values,
    errors: state.errors,
    touched: state.touched,
    isSubmitting: state.isSubmitting,
    isValid: state.isValid,
    isDirty: state.isDirty,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldError,
    reset,
    getFieldProps,
  }
}

// ============================================================================
// FIELD COMPONENT HELPER
// ============================================================================

interface FieldProps {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  error?: string
  [key: string]: any
}

export function Field({ label, name, type = 'text', required, error, ...props }: FieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
      <input
        id={name}
        type={type}
        className={cn(
          'flex h-11 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          error && 'border-destructive focus-visible:ring-destructive'
        )}
        {...props}
      />
      {error && (
        <p id={`${name}-error`} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
