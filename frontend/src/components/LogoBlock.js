'use client'

import { useMenu } from '../../utils/useMenu.js';

import styles from './logoBlock.module.scss';

export default function LogoBlock() {
  const {
    isMenuOpen,
  } = useMenu();

  return (
    <div
      className={`${styles.logoBlock} ${isMenuOpen ? styles.open : ''}`}
      data-testid='logo-block'
    >
      <h1>
        <a href="/">Layne Upholstery
          <object 
            data="/sewing-machine.svg"
            aria-label="Layne Upholstery Logo"
            data-testid='logo-image'
          ></object>
        </a>
      </h1>
    </div>
  );
}
