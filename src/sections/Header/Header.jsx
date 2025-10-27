import React from 'react';
import styles from './Header.module.scss';
import navData from '../../JSON/header.json'; // Adjust path as needed

const Header = () => {
  return (
    <header className={styles['portfolio-header']}>
      <div className={styles.logo}>
        <a>{navData.logoText}</a>
      </div>
      <nav className={styles['nav-links']}>
        {navData.links.map((link, index) => (
          <a key={index} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
