'use client';

import Link from 'next/link';

import MobileMenuButton from '../components/MobileMenuButton';
import { useMenu } from '../../utils/useMenu';

import styles from './navigation.module.scss';

export const mainLinks = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

export default function Navigation() {
  const {
    isMenuOpen,
    closeMenu,
    toggleMenu,
  } = useMenu();

  async function handleClick() {
    await closeMenu();
  }

  return (
    <nav
      className={styles.navigation}
      role="navigation"
    >
      <MobileMenuButton
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
      />
      <ul className={isMenuOpen ? styles.open : ''}>
        {mainLinks.map((link) => (
          <li
            key={link.name}
          >
            <Link href={link.href} onClick={handleClick}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
