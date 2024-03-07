
import styles from './logoBlock.module.scss';

export default function LogoBlock() {
  return (
    <div
      className={styles.logoBlock}
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
