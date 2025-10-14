// src/components/Header.jsx

import React from 'react';
import styles from './Header.module.css';

// DEFINE STYLING UNTUK LINK (AGAR BISA MENAMBAH EFEK HOVER)
const NavLink = ({ href, children }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    // Warna Aksen Cerah (untuk hover)
    const accentColor = '#61DAFB'; 

    const linkStyle = {
        color: 'white',
        margin: '0 18px', 
        fontSize: '1.05em', 
        textDecoration: 'none',
        paddingBottom: '5px',
        transition: 'border-bottom 0.3s ease, color 0.3s ease', 
     
        borderBottom: isHovered ? `3px solid ${accentColor}` : '3px solid transparent', 
        fontWeight: isHovered ? 'bold' : '500', 
        color: isHovered ? accentColor : 'white', 
    };

    return (
        <a 
            href={href} 
            style={linkStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </a>
    );
};


function Header() {
    return (
        <header  className={styles.headerContainer}>
           
            <h1 className={styles.headerTitle}>
                Nashwa Portofolio
            </h1>

            {/* Navigasi Menu */}
            <nav>
                <NavLink href="#about">Tentang</NavLink>
                <NavLink href="#skills">Keahlian</NavLink>
                <NavLink href="#projects">Proyek</NavLink>
                <NavLink href="#contact">Kontak</NavLink>
            </nav>
        </header>
    );
}

export default Header;