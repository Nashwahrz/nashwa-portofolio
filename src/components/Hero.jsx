// src/components/Hero.jsx

import React from 'react';

import { ArrowRight, Code2, Sparkles, Smartphone } from 'lucide-react'; 

// --- DEFINISI GAYA DAN DATA ---
const useHeroStyles = (isPhotoHovered, isButtonHovered) => {
    // Dark mode colors (Consistency is KEY)
    const darkBg = '#0f172a';
    const primaryColor = '#0ea5e9';
    const accentColor = '#06b6d4';
    const lightText = '#f1f5f9';
    const mutedText = '#cbd5e1';

    // Gaya untuk Tombol CTA
    const buttonStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        margin: '0 auto', 
        padding: '16px 40px',
        fontSize: '1.1em',
        fontWeight: '700',
        letterSpacing: '0.5px',
        textDecoration: 'none',
        background: isButtonHovered 
            ? `linear-gradient(135deg, ${accentColor}, ${primaryColor})`
            : `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
        color: darkBg,
        border: 'none',
        borderRadius: '60px',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        boxShadow: isButtonHovered 
            ? `0 20px 50px rgba(6, 182, 212, 0.6)` 
            : `0 10px 30px rgba(6, 182, 212, 0.3)`,
        transform: isButtonHovered ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
    };

    // Gaya untuk Foto Profil
    const photoContainerStyle = {
        position: 'relative',
        width: '180px', // Dikecilkan untuk HP
        height: '180px', // Dikecilkan untuk HP
        borderRadius: '50%',
        boxShadow: isPhotoHovered 
            ? `0 0 0 8px ${primaryColor}` 
            : `0 0 0 5px ${accentColor}`,
        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transform: isPhotoHovered ? 'scale(1.05)' : 'scale(1)',
        cursor: 'pointer',
    };

    return { darkBg, primaryColor, accentColor, lightText, mutedText, buttonStyle, photoContainerStyle };
};
// --- AKHIR DEFINISI GAYA DAN DATA ---


function Hero() {
    const [isPhotoHovered, setIsPhotoHovered] = React.useState(false);
    const [isButtonHovered, setIsButtonHovered] = React.useState(false);

    const { darkBg, primaryColor, accentColor, lightText, mutedText, buttonStyle, photoContainerStyle } = 
        useHeroStyles(isPhotoHovered, isButtonHovered);

    const nama = "Nashwa Harzathi Rahma";
    const tagline = "Web & Mobile Developer";
    const ringkasan = "Code. Create. Connect";
    const motto = "Menciptakan pengalaman pengguna yang luar biasa."; 
    const fotoUrl = "/awa.png";

    return (
        <section 
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh', 
                padding: '60px 20px',
                backgroundColor: darkBg,
                color: lightText,
                overflow: 'hidden',
                position: 'relative',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
            }}
        >
            
            <div style={{ 
                maxWidth: '900px', 
                position: 'relative', 
                zIndex: 1, 
                margin: '0 auto', 
                textAlign: 'center' 
            }}>
                
                {/* --- JUDUL / BADGE ATAS --- */}
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '8px', 
                    marginBottom: '40px', 
                    opacity: 0.8 
                }}>
                    <Sparkles size={16} color={accentColor} />
                    <span style={{ 
                        fontSize: '0.95em', 
                        fontWeight: '500', 
                        color: accentColor, 
                        letterSpacing: '1px', 
                        textTransform: 'uppercase' 
                    }}>
                        Selamat datang di portfolio saya
                    </span>
                </div>

                {/* --- FOTO PROFIL --- */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
                    <div 
                        style={photoContainerStyle}
                        onMouseEnter={() => setIsPhotoHovered(true)} 
                        onMouseLeave={() => setIsPhotoHovered(false)}
                    >
                        {/* Glow ring background */}
                        <div style={{
                            position: 'absolute', inset: '-10px', borderRadius: '50%',
                            background: `linear-gradient(135deg, ${accentColor}, ${primaryColor})`,
                            opacity: isPhotoHovered ? 0.3 : 0.15,
                            animation: isPhotoHovered ? 'pulse-glow 2s infinite' : 'none',
                            transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                            transform: isPhotoHovered ? 'scale(1.05)' : 'scale(1)'
                        }} />
                        
                        <img 
                            src={fotoUrl} 
                            alt="Foto Profil Nashwa"
                            style={{
                                position: 'relative', width: '100%', height: '100%', borderRadius: '50%',
                                objectFit: 'cover', border: `3px solid ${darkBg}`,
                                boxShadow: `0 10px 40px rgba(6, 182, 212, 0.1)`,
                                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)', cursor: 'pointer'
                            }}
                        />
                    </div>
                </div>

                {/* --- JUDUL UTAMA --- */}
                <h1 style={{
                    fontSize: 'clamp(3em, 10vw, 4.5em)', // Disesuaikan untuk HP
                    fontWeight: '800',
                    marginBottom: '10px',
                    lineHeight: '1.1',
                    background: `linear-gradient(135deg, ${lightText}, ${accentColor})`,
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    display: 'block', margin: '0 auto',
                    maxWidth: '800px'
                }}>
                    Halo, Saya <span style={{ color: lightText, textShadow: `0 0 10px ${accentColor}` }}>{nama}</span>
                </h1>

                {/* --- SUB-TAGLINE (Keahlian) --- */}
                <div style={{
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '20px',
                    marginBottom: '30px', 
                    flexWrap: 'wrap', 
                    margin: '0 auto',
                    padding: '0 10px'
                }}>
                    <p style={{ fontSize: 'clamp(1.2em, 3vw, 1.6em)', fontWeight: '600', color: primaryColor, margin: 0 }}>
                        {tagline}
                    </p>
                    <span style={{ color: mutedText }}>|</span>
                    <Code2 size={20} color={primaryColor} />
                    <Smartphone size={20} color={primaryColor} />
                </div>
                
                {/* --- RINGKASAN/MOTTO --- */}
                <p style={{
                    fontSize: 'clamp(1.5em, 5vw, 2.2em)',
                    fontWeight: '600',
                    color: accentColor,
                    margin: '0 auto 15px auto',
                    letterSpacing: '1px'
                }}>
                    {ringkasan}
                </p>

                <p style={{
                    fontSize: 'clamp(1em, 3vw, 1.3em)',
                    color: mutedText,
                    lineHeight: '1.8',
                    maxWidth: '650px',
                    margin: '0 auto 60px auto',
                    fontWeight: '400',
                }}>
                    {motto}
                </p>

                {/* --- CTA BUTTON (Link Anchor) --- */}
                <a 
                    href="#projects"
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                    style={buttonStyle}
                >
                    Lihat Proyek Saya
                    <ArrowRight size={20} strokeWidth={3} />
                </a>

                {/* Scroll indicator (Placeholder) */}
                <div style={{}}>
                </div>
            </div>
        </section>
    );
}

export default Hero;