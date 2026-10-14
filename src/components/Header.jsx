// src/components/Header.jsx
import React from 'react';
import styles from './Header.module.css';

function Header() {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={styles.headerContainer}
            style={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none' }}
        >
            <h1 className={styles.headerTitle}>
                Nashwa <span>Portfolio</span>
            </h1>

            <nav className={styles.nav}>
                <a href="#about"      className={styles.navLink}>Tentang</a>
                <a href="#skills"     className={styles.navLink}>Keahlian</a>
                <a href="#projects"   className={styles.navLink}>Proyek</a>
                <a href="#experience" className={styles.navLink}>Pengalaman</a>
                <a href="#contact"    className={styles.navLink}>Kontak</a>
            </nav>
        </header>
    );
}

export default Header;