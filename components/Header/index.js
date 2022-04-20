import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <header>
      <div><Link href="/">
          <a>Hello</a>
        </Link></div>
      <ul>
        <li><Link href="/movies">
          <a>Movies</a>
        </Link></li>
        <li><Link href="/about">
          <a>About Us</a>
        </Link></li>
      </ul>
    </header>
  )
}

export default Header