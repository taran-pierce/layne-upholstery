import styles from './sideBySide.module.scss';

export default function SideBySide({ children }) {
  return (
    <div
      className={styles.sideBySideWrapper}
      data-testid='side-by-side'
    >
      {children}
    </div>
  );
}
