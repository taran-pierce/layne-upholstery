import Container from "./Container";

import styles from './footer.module.scss';

export default function Footer() {
  const date = new Date;
  const year = date.getFullYear();

  return (
    <footer
      className={styles.footer}
      data-testid='footer'
    >
      <Container>
        <p>Copyright © Layne Upholstery {year}</p>
      </Container>
    </footer>
  );
}
