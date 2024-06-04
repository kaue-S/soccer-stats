
import React from 'react'
import HeaderLogo from '@/components/headerLogo'
import Navigation from '@/components/Navigation'
import MenuResponsivo from './MenuResponsivo'





export default function Header() {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500  py-4 lg:px-16 lg:py-8">
        <div className='flex items-center gap-x-16 justify-around'>
              <HeaderLogo />
              <Navigation />
        </div>
              <MenuResponsivo  />
    </header>
  )
}
