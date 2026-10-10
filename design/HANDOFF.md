# Week 5 — Handoff notes (SIS 2 starter design)
Routes (from the prototype):  / (posts list) → /posts/:id (single post) → * (404, "Back to all posts" → /)
Components → React files:     PostCard → src/components/ProfileCard.tsx   Button → src/components/ui/Button.tsx   Tag → src/components/ui/Tag.tsx
Button variants → prop:       variant = "primary" | "secondary"
PostCard layout:              direction vertical (column)  gap 12  padding 16  radius 8
Breakpoint change:            phone 1 column(s), desktop 3 columns; header stacked (column) on phone, one row on desktop
Tokens (all ten):             color/primary = #1D4ED8  color/on-primary = #FFFFFF  color/text = #1F2937  color/text-muted = #9CA3AF  color/surface = #FFFFFF  color/border = #D1D5DB  space/2 = 8  space/4 = 16  space/6 = 24  radius/md = 8