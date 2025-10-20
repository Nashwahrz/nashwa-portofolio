// src/components/Header.jsx

import React from 'react';
import styles from './Header.module.css';

// DEFINE STYLING UNTUK LINK (AGAR BISA MENAMBAH EFEK HOVER)
const NavLink = ({ href, children }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    // FIX 1: Tambahkan state dan logic untuk mendeteksi mobile
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Warna Aksen Cerah (untuk hover)
    const accentColor = '#61DAFB'; 

    const linkStyle = {
        color: 'white',
        // FIX 2: Menggunakan isMobile untuk margin dan font size
        margin: isMobile ? '0 10px' : '0 18px', 
        fontSize: isMobile ? '0.9em' : '1.05em', 
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

            {/* FIX 3: Menambahkan flexWrap agar link bisa ke bawah jika terlalu panjang di HP */}
            <nav style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <NavLink href="#about">Tentang</NavLink>
                <NavLink href="#skills">Keahlian</NavLink>
                <NavLink href="#projects">Proyek</NavLink>
                <NavLink href="#contact">Kontak</NavLink>
            </nav>
        </header>
    );
}

export default Header;