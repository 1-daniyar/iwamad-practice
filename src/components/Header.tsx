import { NavLink } from 'react-router'
import type { HeaderProps } from '../types'

function Header({ title }: HeaderProps) {
  return (
    <header className="text-center py-6">
      <h1>{title}</h1>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header