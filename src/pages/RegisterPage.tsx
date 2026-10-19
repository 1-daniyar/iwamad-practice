import { useState } from 'react'
import type { ChangeEvent, FocusEvent, SubmitEvent } from 'react'
import Button from '../components/ui/Button'
import TextField from '../components/ui/TextField'
import { validateRegistration } from '../lib/validateRegistration'
import type { RegistrationValues } from '../lib/validateRegistration'

const initialValues: RegistrationValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
}

type Field = keyof RegistrationValues

export default function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>(initialValues)
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({})
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [registered, setRegistered] = useState(false)

  const errors = validateRegistration(values)

  function errorFor(field: Field) {
    return touched[field] || submitAttempted ? errors[field] : undefined
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const { name } = event.target
    setTouched((current) => ({ ...current, [name]: true }))
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitAttempted(true)
    if (Object.keys(errors).length === 0) {
      setRegistered(true)
    }
  }

  if (registered) {
    return (
      <div>
        <h1>Register</h1>
        <p role="status">Thanks, {values.fullName.trim()}. You are registered.</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Register</h1>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorFor('fullName')}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorFor('email')}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorFor('password')}
        />
        <TextField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorFor('confirmPassword')}
        />

        <div className="field">
          <div className="check">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="acceptTerms">I accept the terms</label>
          </div>
          {errorFor('acceptTerms') && <p className="field-error">{errors.acceptTerms}</p>}
        </div>

        <Button type="submit">Create account</Button>
      </form>
    </div>
  )
}