import { useState } from 'react'
import type { ChangeEvent, FocusEvent, SubmitEvent } from 'react'
import Button from './ui/Button'
import TextField from './ui/TextField'
import { validateSignup } from '../lib/validateSignup'
import type { SignupValues } from '../lib/validateSignup'
import type { CampusEvent } from '../data/events'

const initialValues: SignupValues = { fullName: '', email: '', tickets: '1' }

type Field = keyof SignupValues

export default function EventSignupForm({ event }: { event: CampusEvent }) {
  const [values, setValues] = useState<SignupValues>(initialValues)
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({})
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [seatsLeft, setSeatsLeft] = useState(event.seats)
  const [booked, setBooked] = useState<{ tickets: number; name: string } | null>(null)

  const errors = validateSignup(values, seatsLeft)

  function errorFor(field: Field) {
    return touched[field] || submitAttempted ? errors[field] : undefined
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    const { name } = e.target
    setTouched((current) => ({ ...current, [name]: true }))
  }

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitAttempted(true)
    if (Object.keys(errors).length > 0) {
      return
    }
    const tickets = Number(values.tickets)
    setSeatsLeft((current) => current - tickets)
    setBooked({ tickets, name: values.fullName.trim() })
    setValues(initialValues)
    setTouched({})
    setSubmitAttempted(false)
  }

  return (
    <section>
      <h2>Book a seat</h2>
      <p>Seats left: {seatsLeft}</p>
      {booked && (
        <p role="status">
          Booked: {booked.tickets} for {booked.name}.
        </p>
      )}
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
          label="Tickets"
          name="tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorFor('tickets')}
        />
        <Button type="submit">Book</Button>
      </form>
    </section>
  )
}
