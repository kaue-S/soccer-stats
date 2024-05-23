'use client'
import { MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import { Menubar } from "@/components/ui/menubar";
import Link from "next/link";



export default function Navigation() {
  return (
    <nav className="flex items-center gap-x-10">
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>Ligas nacionais</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <Link href={"/brasil"}>
                            Brasileirão
                        
                        </Link>
                    </MenubarItem>
                    <MenubarItem>
                        champions
                    </MenubarItem>
                    <MenubarItem>
                        libertadores
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarSeparator />
            <MenubarMenu>
                <MenubarTrigger>Ligas Continentais</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        italia
                    </MenubarItem>
                    <MenubarItem>
                        franca
                    </MenubarItem>
                    <MenubarItem>
                        espanha
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarSeparator />
            <MenubarMenu>
                <MenubarTrigger>Clubes</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        italia
                    </MenubarItem>
                    <MenubarItem>
                        franca
                    </MenubarItem>
                    <MenubarItem>
                        espanha
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarSeparator />
            <MenubarMenu>
                <MenubarTrigger>Seleções</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        italia
                    </MenubarItem>
                    <MenubarItem>
                        franca
                    </MenubarItem>
                    <MenubarItem>
                        espanha
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    </nav>
  ) 
}
