
import styles from './container.module.scss';

export default function Container({
  children,
  withBorder = false,
}) {
  return (
    <div
      className={`${styles.container} ${withBorder ? styles.withBorder : ''}`}
      data-testid='container'
    >
      {children}
    </div>
  );
}
