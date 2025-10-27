import styles from './FooterStyles.module.scss';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 PalemKota Naveen. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
