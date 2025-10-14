// src/App.jsx

import React from 'react';
// Import komponen
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
// import Footer from './components/Footer';

import { MessageCircleMore } from 'lucide-react';

function App() {
    
    // Nomor WhatsApp Anda (Gunakan format internasional tanpa + atau 00)
    const whatsappNumber = "6282384522629"; 
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    // Warna dan style
    const whatsappColor = '#25D366';
    const darkBg = '#0f172a'; 

    return (
        
        <>
            
            {/* <Header />  */}
            
            <main>
                <Hero /> 
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>

            {/* FLOATING WHATSAPP BUTTON - Dibuat responsif menggunakan unit relatif */}
            <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                    position: 'fixed', 
                    // Menggunakan unit REM untuk posisi
                    bottom: '1.5rem', // 24px (sedikit lebih kecil dari 30px statis)
                    right: '1.5rem', // 24px
                    
                    backgroundColor: whatsappColor,
                    borderRadius: '50%',
                    
                    // MENGGUNAKAN CLAMP/VW UNTUK UKURAN AGAR PROPORSIONAL
                    width: 'clamp(45px, 12vw, 60px)', // Min 45px, Max 60px
                    height: 'clamp(45px, 12vw, 60px)',
                    
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 15px rgba(37, 211, 102, 0.6)',
                    zIndex: 999,
                    transition: 'transform 0.3s ease, background-color 0.3s ease',
                }}
                // Efek hover untuk feedback visual
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.backgroundColor = '#128C7E';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.backgroundColor = whatsappColor;
                }}
            >
                {/* Ukuran ikon disesuaikan menggunakan VW */}
                <MessageCircleMore size={'clamp(24px, 8vw, 32px)'} color={darkBg} strokeWidth={2} /> 
            </a>

            {/*      
                <Footer />  */}
            
        </>
    );
}

export default App;