// src/components/Hero.jsx

import React from 'react';

import { ArrowRight, Code2, Sparkles, Smartphone } from 'lucide-react'; 

// --- DEFINISI GAYA DAN DATA ---
const useHeroStyles = (isPhotoHovered, isButtonHovered, isMobile) => {
    const darkBg = '#0f172a';
    const primaryColor = '#0ea5e9';
    const accentColor = '#06b6d4';
    const lightText = '#f1f5f9';
    const mutedText = '#cbd5e1';

    const buttonStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        margin: '0 auto', 
        // FIX: Menggunakan isMobile untuk padding tombol
        padding: isMobile ? '12px 28px' : '16px 40px',
        // FIX: Menggunakan isMobile untuk font size tombol
        fontSize: isMobile ? '0.95em' : '1.1em',
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
        // FIX: Matikan transform hover di mobile
        transform: isButtonHovered && !isMobile ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
    };

    // FIX: Ukuran foto responsif
    const photoSize = isMobile ? '140px' : '180px';
    const photoContainerStyle = {
        position: 'relative',
        width: photoSize,
        height: photoSize,
        borderRadius: '50%',
        boxShadow: isPhotoHovered 
            ? `0 0 0 ${isMobile ? '6px' : '8px'} ${primaryColor}` 
            : `0 0 0 ${isMobile ? '4px' : '5px'} ${accentColor}`,
        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transform: isPhotoHovered ? 'scale(1.05)' : 'scale(1)',
        cursor: 'pointer',
        margin: '0 auto',
    };

    return { darkBg, primaryColor, accentColor, lightText, mutedText, buttonStyle, photoContainerStyle };
};

function Hero() {
    const [isPhotoHovered, setIsPhotoHovered] = React.useState(false);
    const [isButtonHovered, setIsButtonHovered] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { darkBg, primaryColor, accentColor, lightText, mutedText, buttonStyle, photoContainerStyle } = 
        useHeroStyles(isPhotoHovered, isButtonHovered, isMobile);

    const nama = "Nashwa Harzathi Rahma";
    const tagline = "Web & Mobile Developer";
    const ringkasan = "Code. Create. Connect";
    const motto = "Menciptakan pengalaman pengguna yang luar biasa."; 
    const fotoUrl = "/awa.png";

    return (
        <section 
            style={{
                display: 'flex',
                justifyContent: 'center',
                minHeight: '100vh', 
                // FIX: Padding vertikal responsif
                padding: isMobile ? '40px 0' : '60px 0',
                backgroundColor: darkBg,
                color: lightText,
                overflow: 'hidden',
                position: 'relative',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
            }}
        >
            
            <style>{`
                @keyframes pulse-glow {
                    0%, 100% { transform: scale(1); opacity: 0.3; }
                    50% { transform: scale(1.1); opacity: 0.5; }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @media (max-width: 768px) {
                     @keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                }

                .hero-content > * {
                    animation: fadeInUp 0.8s ease-out forwards;
                }

                .hero-content > *:nth-child(1) { animation-delay: 0.1s; }
                .hero-content > *:nth-child(2) { animation-delay: 0.2s; }
                .hero-content > *:nth-child(3) { animation-delay: 0.3s; }
                .hero-content > *:nth-child(4) { animation-delay: 0.4s; }
                .hero-content > *:nth-child(5) { animation-delay: 0.5s; }
                .hero-content > *:nth-child(6) { animation-delay: 0.6s; }
            `}</style>
            
            <div className="hero-content" style={{ 
                maxWidth: '900px', 
                position: 'relative', 
                zIndex: 1, 
                margin: '0 auto', 
                textAlign: 'center',
                width: '100%',
                // FIX: Memastikan padding horizontal kecil yang responsif
                padding: '0 clamp(10px, 4vw, 30px)', 
                // FIX: Tambahkan padding top yang cukup besar 
                paddingTop: 'clamp(50px, 10vh, 100px)' 
            }}>
                
                {/* Badge Atas */}
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '8px', 
                    marginBottom: isMobile ? '25px' : '40px', 
                    opacity: 0.8,
                    flexWrap: 'wrap'
                }}>
                    <Sparkles size={isMobile ? 14 : 16} color={accentColor} />
                    <span style={{ 
                        fontSize: isMobile ? '0.85em' : '0.95em', 
                        fontWeight: '500', 
                        color: accentColor, 
                        letterSpacing: '1px', 
                        textTransform: 'uppercase'
                    }}>
                        Selamat datang di portfolio saya
                    </span>
                </div>

                {/* Foto Profil */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: isMobile ? '30px' : '50px' }}>
                    <div 
                        style={photoContainerStyle}
                        onMouseEnter={() => setIsPhotoHovered(true)} 
                        onMouseLeave={() => setIsPhotoHovered(false)}
                        onTouchStart={() => setIsPhotoHovered(true)}
                        onTouchEnd={() => setIsPhotoHovered(false)}
                    >
                        {/* Glow ring background */}
                        <div style={{
                            position: 'absolute', 
                            inset: isMobile ? '-8px' : '-10px', 
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${accentColor}, ${primaryColor})`,
                            opacity: isPhotoHovered ? 0.3 : 0.15,
                            animation: isPhotoHovered ? 'pulse-glow 2s infinite' : 'none',
                            transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                            transform: isPhotoHovered ? 'scale(1.05)' : 'scale(1)',
                            pointerEvents: 'none'
                        }} />
                        
                        <img 
                            src={fotoUrl} 
                            alt="Foto Profil Nashwa"
                            style={{
                                position: 'relative', 
                                width: '100%', 
                                height: '100%', 
                                borderRadius: '50%',
                                objectFit: 'cover', 
                                border: `3px solid ${darkBg}`,
                                boxShadow: `0 10px 40px rgba(6, 182, 212, 0.1)`,
                                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                </div>

                {/* Judul Utama */}
                <h1 style={{
                    // FIX: Menggunakan clamp untuk font size responsif
                    fontSize: 'clamp(2em, 8vw, 4.5em)',
                    fontWeight: '800',
                    marginBottom: '10px',
                    lineHeight: '1.1',
                    background: `linear-gradient(135deg, ${lightText}, ${accentColor})`,
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent', 
                    backgroundClip: 'text',
                    display: 'block', 
                    margin: '0 auto 10px',
                    maxWidth: '100%',
                    padding: '0 10px'
                }}>
                    Halo, Saya <br style={{ display: isMobile ? 'block' : 'none' }} />
                    <span style={{ color: lightText, textShadow: `0 0 10px ${accentColor}` }}>
                        {nama}
                    </span>
                </h1>

                {/* Sub-Tagline (Keahlian) */}
                <div style={{
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: isMobile ? '10px' : '20px',
                    marginBottom: '25px', 
                    flexWrap: 'wrap',
                    padding: '0 10px'
                }}>
                    <p style={{ 
                        // FIX: Menggunakan clamp untuk font size responsif
                        fontSize: 'clamp(1em, 3vw, 1.6em)', 
                        fontWeight: '600', 
                        color: primaryColor, 
                        margin: 0,
                        lineHeight: '1.2'
                    }}>
                        {tagline}
                    </p>
                    <span style={{ color: mutedText, display: isMobile ? 'none' : 'inline' }}>|</span>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Code2 size={isMobile ? 18 : 20} color={primaryColor} />
                        <Smartphone size={isMobile ? 18 : 20} color={primaryColor} />
                    </div>
                </div>
                
                {/* Ringkasan/Motto */}
                <p style={{
                    // FIX: Menggunakan clamp untuk font size responsif
                    fontSize: 'clamp(1.2em, 5vw, 2.2em)',
                    fontWeight: '600',
                    color: accentColor,
                    margin: '0 auto 15px auto',
                    letterSpacing: '1px',
                    lineHeight: '1.3'
                }}>
                    {ringkasan}
                </p>

                <p style={{
                    // FIX: Menggunakan clamp untuk font size responsif
                    fontSize: 'clamp(0.9em, 3vw, 1.3em)',
                    color: mutedText,
                    lineHeight: '1.8',
                    maxWidth: '650px',
                    margin: '0 auto 40px auto',
                    fontWeight: '400',
                    padding: '0 10px'
                }}>
                    {motto}
                </p>

                {/* CTA Button */}
                <a 
                    href="#projects"
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                    onTouchStart={() => setIsButtonHovered(true)}
                    onTouchEnd={() => setIsButtonHovered(false)}
                    style={buttonStyle}
                >
                    Lihat Proyek Saya
                    <ArrowRight size={isMobile ? 18 : 20} strokeWidth={3} />
                </a>
            </div>
        </section>
    );
}

export default Hero;