import React from 'react'
import LOGO from '../assets/mu_logo.png'
const Navbar = () => {
  return (
    <header>
        <nav className="flex justify-center p-3 items-center gap-4 text-gray-600">
            <img src={LOGO} alt="LOGO" className='w-12' />
            <h3 className="font-bold">PNA News 2.0</h3>
        </nav>
    </header>
  )
}

export default Navbar