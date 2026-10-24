export type CampusEvent = { id: number; title: string; date: string; place: string; seats: number }

export const events: CampusEvent[] = [
  { id: 1, title: 'React study night', date: '2026-10-29', place: 'Room 302', seats: 20 },
  { id: 2, title: 'KBTU Hackathon Warm-up', date: '2026-11-03', place: 'Main Hall', seats: 40 },
  { id: 3, title: 'Startup Pitch Evening', date: '2026-11-07', place: 'Business Incubator', seats: 3 },
  { id: 4, title: 'TypeScript Workshop', date: '2026-11-12', place: 'Lab 215', seats: 15 },
  { id: 5, title: 'Kaspi Seller Meetup', date: '2026-11-19', place: 'Coworking Space', seats: 25 },
]
