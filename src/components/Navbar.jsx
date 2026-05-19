import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-rose-700 py-2.5 px-8 flex items-center justify-between'>
            <h1 className=' bg-linear-to-r from-white to-yellow-300 bg-clip-text text-transparent text-2xl font-black'>PokeGame </h1>
            <h1 className='bg-linear-to-r from-white to-blue-800 bg-clip-text text-transparent text-2xl font-black'>v2.0 </h1>
        </nav>
    )
}

export default Navbar
