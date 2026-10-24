export type CampusEvent = { id: number; title: string; date: string; place: string; seats: number }

export const events: CampusEvent[] = [
  { id: 1, title: 'KBTU Hackathon 2026', date: '2026-11-07', place: 'KBTU, Main Hall', seats: 20 },
  { id: 2, title: 'React Workshop', date: '2026-11-12', place: 'KBTU, Room 305', seats: 3 },
  { id: 3, title: 'Startup Pitch Night', date: '2026-11-20', place: 'Almaty Tech Garden', seats: 15 },
  { id: 4, title: 'Career Day for IT Students', date: '2026-12-03', place: 'KBTU, Atrium', seats: 50 },
]
