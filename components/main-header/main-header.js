'use client';

import Link from 'next/link';
import Image from "next/image";
import  { usePathname } from 'next/navigation'

import Logo from '@/assets/logo.png'
import classes from "./main-header.module.css"
import MainHeaderBackground from './main-header-background';


function MainHeader() {
   const path =  usePathname()

  return (
    <>
    <MainHeaderBackground/>
    <header className={classes.header}>
        <Link className={classes.logo} href="">
        <Image src={Logo} alt="A plate with food on it"/>
        Next level food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                   
                </li>
                <li>
                    <Link href="/community" className={path === '/community' ? classes.active : undefined}>Foodies Community</Link>
                </li>
            </ul>
        </nav>
        </header>
        </>
  )
}

export default MainHeader;