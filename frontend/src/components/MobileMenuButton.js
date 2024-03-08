import styles from './mobileMenuButton.module.scss';

export default function MobileMenuButton({
  toggleMenu,
  isMenuOpen,
}) {
  async function handleClick() {
    await toggleMenu();
  }

  return (
    <button
      type='button'
      className={`button ${styles.mobileMenuButton} ${isMenuOpen ? styles.open : ''}`}
      onClick={handleClick}
      data-testid='mobile-menu-button'
    >
      <object
        data="/images/icons/menu.svg"
        aria-label="Menu Toggle Icon"
      ></object>
      {/* <img
        src='/menu-80.png'
        alt='Navigation Toggle'
        data-testid='logo'
      /> */}
    </button>
  )
}
