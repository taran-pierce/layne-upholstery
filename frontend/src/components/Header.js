import Container from "./Container";
import Navigation from "./Navigation";
import LogoBlock from './LogoBlock';

import styles from './header.module.scss';

export default function Header() {
  return (
    <header
      className={styles.header}
      data-testid='header'
    >
      <Container>
        <div className={styles.mainWrapper}>
          <LogoBlock />
          <Navigation />
        </div>
      </Container>
    </header>
  );
}
