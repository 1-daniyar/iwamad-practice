import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <Header title="My Profile Card" />
      <main>
        <Outlet />
      </main>
      <Footer text="Week 4 practice - IWaMAD" />
    </>
  )
}