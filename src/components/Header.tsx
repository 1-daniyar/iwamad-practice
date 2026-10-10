import { NavLink } from 'react-router'
import type { HeaderProps } from '../types'
import logo from '../assets/logo.svg'

function Header({ title }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="brand">
        <img src={logo} alt="" width="32" height="32" />
        <h1>{title}</h1>
      </div>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header