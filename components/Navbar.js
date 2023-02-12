import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <>
    <div className='bg-gray-400 p-2'>
        <ul className='flex gap-5 text-ri
         uppercase'>
            <Link href='/'>Home</Link>
            <li>About</li>
            <li>contact</li>
            <div>
            </div>
        </ul>
    </div>
    </>
  )
}

export default Navbar