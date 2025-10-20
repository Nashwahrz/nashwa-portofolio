// src/components/About.jsx
import React from 'react';

function About() {
    const [hoveredCard, setHoveredCard] = React.useState(false);
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
    
    // Teks biografi
    const biographyText = (
        <p style={{ 
            fontSize: isMobile ? '1em' : '1.1em', // FIX: Font size responsif
            lineHeight: '1.8', 
            color: mutedText, 
            marginBottom: '25px',
            padding: '20px',
            borderLeft: `4px solid ${primaryColor}`,
            backgroundColor: 'rgba(14, 165, 233, 0.05)',
            borderRadius: '8px'
        }}>
            Halo! Saya Nashwa Harzathi Rahma, seorang mahasiswa semester 5 Politeknik Negeri Padang, jurusan Teknologi Informasi, Prodi D3 Manajemen Informatika. 
            Saya memulai perjalanan saya dengan dasar yang kuat di <span style={{ color: primaryColor, fontWeight: '600' }}>HTML, CSS, dan JavaScript</span>. 
            Kini, saya berfokus sebagai **Programmer** yang memiliki kemampuan dalam membangun keseluruhan sistem digital.
            Saya menguasai pembangunan antarmuka pengguna, perancangan logika bisnis, hingga implementasi basis data untuk aplikasi Web dan Mobile. 
        </p>
    );

    // Daftar Tujuan Karir
    const goalList = [
        "Menciptakan arsitektur Back-end yang stabil dan terukur.",
        "Mengembangkan aplikasi Front-end yang optimal dan user-friendly.",
        "Mengaplikasikan pengetahuan Web dan Mobile dalam solusi bisnis.",
        "Beradaptasi cepat dengan teknologi dan kerangka kerja baru.",
    ];
    
    return (
        <section 
            id="about" 
            style={{ 
                // FIX: Padding vertikal responsif
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
            <div style={{ 
                maxWidth: '1100px', 
                margin: '0 auto', 
                width: '100%', 
                position: 'relative', 
                zIndex: 1,
                // FIX 2: Menambahkan padding horizontal pada kontainer utama
                padding: '0 20px' 
            }}>
                
                {/* Header (Font size menggunakan clamp) */}
                <h2 style={{ 
                    fontSize: 'clamp(2em, 8vw, 2.5em)', 
                    marginBottom: '10px',
                    background: `linear-gradient(135deg, ${lightText}, ${accentColor})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: '800'
                }}>
                    Tentang <span style={{ color: accentColor }}>Saya</span>
                </h2>
                <p style={{ 
                    color: mutedText, 
                    marginBottom: '60px',
                    // FIX: Font size responsif
                    fontSize: isMobile ? '1em' : '1.1em',
                    fontWeight: '400'
                }}>
                    Mengenal lebih dekat perjalanan saya sebagai pengembang.
                </p>

                {/* TATA LETAK DUA KOLOM */}
                <div 
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap', 
                        alignItems: 'stretch',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        gap: isMobile ? '30px' : '40px', // FIX: Mengurangi gap di mobile
                        padding: 0 // FIX 3: Menghapus padding: '0 10px' yang berlebihan
                    }}
                >
                    {/* Kolom Kiri: Teks Cerita */}
                    <div 
                        style={{ 
                            flex: 1, 
                            minWidth: '280px', // Memastikan stacking di HP
                        }}
                    >
                        <h3 style={{ 
                            color: accentColor, 
                            marginBottom: '30px',
                            // FIX: Font size responsif
                            fontSize: isMobile ? '1.5em' : '1.8em',
                            fontWeight: '700'
                        }}>
                            Transformasi Kreativitas menjadi Kode Fungsional
                        </h3>
                        
                        {biographyText}
                        
                        <p style={{ 
                            // FIX: Font size responsif
                            fontSize: isMobile ? '1em' : '1.1em', 
                            lineHeight: '1.8', 
                            color: mutedText,
                            padding: '20px',
                            borderLeft: `4px solid ${accentColor}`,
                            backgroundColor: 'rgba(6, 182, 212, 0.05)',
                            borderRadius: '8px'
                        }}>
                            Tujuan saya adalah menciptakan pengalaman digital yang <span style={{ color: accentColor, fontWeight: '600' }}>intuitif dan responsif</span>. 
                            Saya antusias dengan tantangan baru dan selalu siap mengaplikasikan logika pemrograman 
                            untuk menciptakan solusi web yang efisien.
                        </p>
                    </div>

                    {/* Kolom Kanan: KARTU GOAL BARU */}
                    <div 
                        style={{ 
                            flex: 1, 
                            minWidth: '280px', // Memastikan stacking di HP
                            textAlign: 'center',
                        }}
                        onMouseEnter={() => setHoveredCard(true)}
                        onMouseLeave={() => setHoveredCard(false)}
                    >
                        <div 
                            style={{
                                padding: isMobile ? '40px 30px' : '50px 40px', // FIX: Padding responsif
                                // ... (hover styles) ...
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}
                        >
                            <h3 style={{ 
                                color: lightText, 
                                marginBottom: '25px',
                                // FIX: Font size responsif
                                fontSize: isMobile ? '1.4em' : '1.6em',
                                fontWeight: '700'
                            }}>
                                Fokus dan Target Karir
                            </h3>
                            
                            {/* Menampilkan Goal dalam bentuk daftar poin yang terstruktur */}
                            <ul style={{ 
                                listStyle: 'none', 
                                padding: 0, 
                                textAlign: 'left',
                                margin: '0 auto',
                            }}>
                                {goalList.map((goal, index) => (
                                    <li key={index} style={{ 
                                        color: mutedText, 
                                        marginBottom: '15px', 
                                        display: 'flex', 
                                        alignItems: 'flex-start',
                                        // FIX: Font size responsif
                                        fontSize: isMobile ? '0.95em' : '1.05em' 
                                    }}>
                                        <span style={{ color: accentColor, marginRight: '10px', fontSize: '1.2em' }}>
                                            •
                                        </span>
                                        {goal}
                                    </li>
                                ))}
                            </ul>
                            
                            <div style={{ 
                                marginTop: '30px', 
                                fontSize: '4em',
                                transition: 'transform 0.4s ease',
                                transform: hoveredCard ? 'scale(1.2) rotate(10deg)' : 'scale(1) rotate(0deg)'
                            }}>
                                🚀
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;