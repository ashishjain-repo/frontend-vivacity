import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full grid grid-cols-[768px_1fr] text-center mx-auto py-4 bg-slate h-fit bg-slate-800 items-center'>
        <div>
            <p className='text-5xl italic text-white'>Me</p>
        </div>
        <ul className='grid grid-cols-[100px_100px_100px] text-center justify-center'>
            <li><a href="" className='text-lg font-semibold text-white hover:text-violet-400'>Home</a></li>
            <li><a href="" className='text-lg font-semibold text-white hover:text-violet-400'>Signup</a></li>
            <li><a href="" className='text-lg font-semibold text-white hover:text-violet-400'>Login</a></li>
        </ul>
    </nav>
  )
}

export default Navbar