import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import EventsPage from './EventsPage'
import { events } from '../data/events'

describe('EventsPage', () => {
  it('renders one card per event', () => {
    render(
      <MemoryRouter>
        <EventsPage />
      </MemoryRouter>,
    )
    expect(screen.getAllByRole('article')).toHaveLength(events.length)
  })
})
