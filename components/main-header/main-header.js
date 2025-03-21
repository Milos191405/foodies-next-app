import Link from 'next/link';
import Image from "next/image";

import Logo from '@/assets/logo.png';
import classes from "./main-header.module.css";
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={Logo} alt="A plate with food on it" width={50} height={50} />
          Next Level Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
