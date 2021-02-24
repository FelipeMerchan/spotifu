import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav>
      <li>
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </li>
    </nav>
  )
}

export default NavBar