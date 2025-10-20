// src/App.jsx

import React from 'react';
// FIX 1: Import Header
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';

import { MessageCircleMore } from 'lucide-react';

function App() {
    
    // FIX 2: Angka WhatsApp disesuaikan dengan yang ada di Contact.jsx (6282383522629)
    const whatsappNumber = "6282383522629"; 
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    const whatsappColor = '#25D366';
    const darkBg = '#0f172a'; 

    return (
        
        <>
            
            {/* FIX 3: Tambahkan Header di luar tag <main> agar menempel di atas (sticky) */}
            <Header /> 
            
            <main>
                <Hero /> 
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>

            {/* FLOATING WHATSAPP BUTTON - Dibuat responsif */}
            <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                    position: 'fixed', 
                    // POSISI: Menggunakan REM agar proporsional
                    bottom: '1.5rem', 
                    right: '1.5rem', 
                    
                    backgroundColor: whatsappColor,
                    borderRadius: '50%',
                    
                    // UKURAN: Menggunakan CLAMP/VW agar tombol mengecil di layar HP
                    width: 'clamp(45px, 12vw, 60px)', // Min 45px, Max 60px
                    height: 'clamp(45px, 12vw, 60px)',
                    
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 15px rgba(37, 211, 102, 0.6)',
                    zIndex: 999, 
                    transition: 'transform 0.3s ease, background-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.backgroundColor = '#128C7E';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.backgroundColor = whatsappColor;
                }}
            >
                {/* UKURAN IKON disesuaikan agar proporsional dengan tombol */}
                <MessageCircleMore size={'clamp(24px, 8vw, 32px)'} color={darkBg} strokeWidth={2} /> 
            </a>

            {/* <Footer /> dihapus karena tidak ada komponennya */}
            
        </>
    );
}

export default App;