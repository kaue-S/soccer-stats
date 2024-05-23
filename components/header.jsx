
import React from 'react'
import HeaderLogo from './headerLogo'
import Navigation from './navigation'





export default function Header() {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-16">
            <div className='flex items-center gap-x-16 border justify-around'>
              <HeaderLogo />
              <Navigation />
        </div>
    </header>
  )
}
