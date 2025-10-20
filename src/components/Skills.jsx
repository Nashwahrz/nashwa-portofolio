// src/components/Skills.jsx
import React from 'react';

// Pastikan Anda sudah menginstal react-icons: npm install react-icons
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiGit, DiBootstrap, DiLaravel, DiAndroid, DiApple } from 'react-icons/di';

const skillList = [
    { name: "HTML5", color: "#E34F26", icon: <DiHtml5 size={40} /> },
    { name: "CSS3", color: "#1572B6", icon: <DiCss3 size={40} /> },
    { name: "JavaScript (ES6+)", color: "#F7DF1E", icon: <DiJavascript1 size={40} /> },
    { name: "React.js", color: "#61DAFB", icon: <DiReact size={40} /> },
    { name: "Git & GitHub", color: "#181717", icon: <DiGit size={40} /> },
    { name: "Bootstrap", color: "#7952B3", icon: <DiBootstrap size={40} /> }, 
    { name: "Laravel", color: "#FF2D20", icon: <DiLaravel size={40} /> },
    { name: "Kotlin", color: "#7F52FF", icon: <DiAndroid size={40} /> },
    { name: "Flutter", color: "#02569B", icon: <DiApple size={40} /> }, 
];

function Skills() {
    const [hoveredIndex, setHoveredIndex] = React.useState(null);
    // FIX 1: Tambahkan state dan logic untuk mendeteksi mobile
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const darkBg = '#0f172a';
    const primaryColor = '#0ea5e9';
    const accentColor = '#06b6d4';
    const lightText = '#f1f5f9';
    const mutedText = '#cbd5e1';
    const cardBg = '#1e293b';

    return (
        <section 
            id="skills"
            style={{ 
                // FIX 2: Padding vertikal responsif
                padding: 'clamp(60px, 10vh, 100px) 0', 
                backgroundColor: darkBg,
                textAlign: 'center',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background decoration (Tidak diubah) */}
            <div style={{
                position: 'absolute',
                width: '400px',
                height: '400px',
                background: `radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)`,
                borderRadius: '50%',
                top: '-80px',
                left: '-80px',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                width: '500px',
                height: '500px',
                background: `radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)`,
                borderRadius: '50%',
                bottom: '-100px',
                right: '-100px',
                pointerEvents: 'none'
            }} />


            {/* Kontainer utama tetap di tengah dan mengatur lebar maksimum */}
            <div style={{ 
                maxWidth: '1100px', 
                margin: '0 auto', 
                width: '100%', 
                position: 'relative', 
                zIndex: 1,
                // FIX 3: Menambahkan padding horizontal untuk HP
                padding: '0 20px'
            }}>

                {/* Header */}
                <h2 style={{
                    // FIX: Font size responsif
                    fontSize: isMobile ? 'clamp(1.8em, 7vw, 2.8em)' : 'clamp(2em, 8vw, 2.8em)',
                    fontWeight: '800',
                    marginBottom: '15px',
                    background: `linear-gradient(135deg, ${lightText}, ${accentColor})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    Keahlian Saya
                </h2>
                <p style={{ 
                    marginBottom: '60px',
                    color: mutedText,
                    // FIX: Font size responsif
                    fontSize: isMobile ? '1em' : '1.1em',
                    fontWeight: '400'
                }}>
                    Berikut adalah daftar teknologi dan tingkat penguasaan saya:
                </p>

                {/* Skills Grid */}
                <div 
                    style={{
                        display: 'grid',
                        // Sudah responsif, minmax 150px memastikan 2-3 kolom di HP
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
                        // FIX: Mengurangi gap agar lebih pas di HP
                        gap: isMobile ? '12px' : '15px', 
                        maxWidth: '1100px',
                        margin: '0 auto'
                    }}
                >
                    {skillList.map((skill, index) => (
                        <div 
                            key={index}
                            style={{
                                backgroundColor: cardBg,
                                border: `2px solid ${hoveredIndex === index ? skill.color : 'rgba(14, 165, 233, 0.2)'}`,
                                // FIX: Mengurangi padding di dalam kartu
                                padding: isMobile ? '20px 15px' : '25px 20px', 
                                borderRadius: '12px',
                                boxShadow: hoveredIndex === index
                                    ? `0 20px 50px ${skill.color}40, inset 0 0 20px ${skill.color}15`
                                    : `0 10px 30px rgba(6, 182, 212, 0.1)`,
                                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                // FIX: Matikan hover transform di mobile
                                transform: isMobile ? 'translateY(0)' : (hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)'),
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* ... (Glow effect) ... */}

                            {/* Content */}
                            <div style={{ position: 'relative', zIndex: 1 }}>

                                {/* Ikon Keterampilan */}
                                <span style={{ display: 'block', marginBottom: '10px', color: skill.color }}>
                                    {/* FIX: Ukuran ikon responsif */}
                                    {React.cloneElement(skill.icon, { color: skill.color, size: isMobile ? 32 : 40 })}
                                </span>

                                {/* Color accent bar */}
                                <div style={{
                                    width: '50px',
                                    height: '4px',
                                    backgroundColor: skill.color,
                                    borderRadius: '2px',
                                    margin: '0 auto 15px',
                                    transform: hoveredIndex === index ? 'scaleX(1.5)' : 'scaleX(1)',
                                    transition: 'transform 0.4s ease'
                                }} />

                                <h3 style={{ 
                                    margin: '10px 0 0 0',
                                    color: lightText,
                                    // FIX: Font size responsif
                                    fontSize: isMobile ? '1.1em' : '1.3em',
                                    fontWeight: '700',
                                    transition: 'color 0.3s ease'
                                }}>
                                    {skill.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;