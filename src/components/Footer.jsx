// src/components/Footer.jsx

import React from 'react';

function Footer() {
    return (
        <footer 
            style={{ 
                padding: '30px 20px', 
                backgroundColor: '#333', 
                color: 'white', 
                textAlign: 'center' 
            }}
        >
            <p style={{ margin: '0 0 10px 0', fontSize: '1.1em' }}>
                &copy; {new Date().getFullYear()} Nashwa Portofolio.
            </p>
            <p style={{ fontSize: '0.9em', color: '#bbb' }}>
                Dibuat menggunakan React dan Vite.
            </p>
            
            {/* Link Media Sosial (Placeholder) */}
            <div style={{ marginTop: '15px' }}>
                <a href="https://github.com/nashwa" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>GitHub</a>
                <a href="https://linkedin.com/in/nashwa-profile" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>LinkedIn</a>
            </div>
        </footer>
    );
}

export default Footer;