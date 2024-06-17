'use client'
import { MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger, Menubar } from "@/components/ui/menubar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";



export default function Navigation() {
     
  return (
    <nav className="hidden lg:flex items-center gap-x-10">
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger className="cursor-pointer">Ligas nacionais</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <Link href={"/brasileirao"}>
                            Brasileirão
                        </Link>
                    </MenubarItem>
                    <MenubarItem>
                        <Link href={"/premierLeague"}>
                            Premier League
                        </Link>
                    </MenubarItem>
                    <MenubarItem>
                        <Link href={"/ligue1"}>
                            League 1
                        </Link>
                    </MenubarItem>
                    <MenubarItem>
                        <Link href={"/serieA"}>
                            Série A
                        </Link>
                    </MenubarItem>
                    <MenubarItem>
                        <Link href={"/bundesliga"}>
                            Bundesliga
                        </Link>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarSeparator />

            <MenubarMenu>
                <MenubarTrigger className="cursor-pointer">Ligas Continentais</MenubarTrigger>
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
                <MenubarTrigger className="cursor-pointer">Clubes</MenubarTrigger>
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
                <MenubarTrigger className="cursor-pointer">Seleções</MenubarTrigger>
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
