import React from 'react'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function MenuResponsivo() {

  return (
    <nav className='lg:hidden ml-4 flex'>

      <Sheet>
        <SheetTrigger><Menu size={35} className='rounded-md p-1 bg-white px-2'/></SheetTrigger>
        <SheetContent  side="left">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
