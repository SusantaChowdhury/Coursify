import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-gray-800 p-4 text-white shadow-lg'>
        <div className='max-w-screen container flex justify-between items-center'>
          <p className="text-4xl font-bold">Coursify</p>
          <ul className="flex gap-4 items-center text-lg">
            <li className="hover:text-gray-400"><a href="/about">About</a></li>
            <li className="hover:text-gray-400"><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
