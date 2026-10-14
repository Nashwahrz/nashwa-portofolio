// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

import { MessageCircleMore } from 'lucide-react';

const WHATSAPP = 'https://wa.me/6282383522629';

function Footer() {
    return (
        <footer style={{
            background: '#060f1e',
            borderTop: '1px solid rgba(0,180,216,0.1)',
            padding: '32px 24px',
            textAlign: 'center',
        }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                © 2025{' '}
                <span style={{ color: 'var(--color-gold)', fontWeight: 700 }}>Nashwa Harzathi Rahma</span>
                {' '}— Dibuat dengan ❤️ menggunakan React
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '6px' }}>
                Web Developer · Mobile Developer · Politeknik Negeri Padang
            </p>
        </footer>
    );
}

function WhatsAppFAB() {
    const [hovered, setHovered] = React.useState(false);

    return (
        <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            aria-label="Chat via WhatsApp"
            style={{
                position: 'fixed',
                bottom: 'clamp(18px, 4vw, 28px)',
                right: 'clamp(18px, 4vw, 28px)',
                width: 'clamp(48px, 12vw, 60px)',
                height: 'clamp(48px, 12vw, 60px)',
                borderRadius: '50%',
                background: hovered
                    ? 'linear-gradient(135deg, #128C7E, #25D366)'
                    : 'linear-gradient(135deg, #25D366, #128C7E)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: hovered
                    ? '0 8px 30px rgba(37,211,102,0.6)'
                    : '0 4px 16px rgba(37,211,102,0.35)',
                transform: hovered ? 'scale(1.12) translateY(-2px)' : 'scale(1)',
                transition: 'all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
                zIndex: 999,
                textDecoration: 'none',
            }}
        >
            <MessageCircleMore
                size="clamp(22px, 7vw, 28px)"
                color="#fff"
                strokeWidth={2}
            />
        </a>
    );
}

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
            <WhatsAppFAB />
        </>
    );
}

export default App;