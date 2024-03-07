import styles from './mobileMenuButton.module.scss';

export default function MobileMenuButton({
  toggleMenu,
}) {
  async function handleClick() {
    await toggleMenu();
  }

  return (
    <button
      type='button'
      className={`button ${styles.mobileMenuButton}`}
      onClick={handleClick}
      data-testid='mobile-menu-button'
    >
      <img
        src='/menu-80.png'
        alt='Navigation Toggle'
        data-testid='logo'
      />
    </button>
  )
}
