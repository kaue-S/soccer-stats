import React from 'react'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'


export default function NavButton() {
  return (
    <Button className="ml-4 lg:hidden" variant="outline" size="sm">
        <Menu size={20}/>
    </Button>
  )
}
