import React from 'react';

function About() {
    const [hoveredCard, setHoveredCard] = React.useState(false);
    
    const darkBg = '#0f172a';
    const primaryColor = '#0ea5e9';
    const accentColor = '#06b6d4';
    const lightText = '#f1f5f9';
    const mutedText = '#cbd5e1';
    const cardBg = '#1e293b';
    

    const biographyText = (
        <p style={{ 
            fontSize: '1.1em', 
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


    const goalList = [
        "Menciptakan arsitektur Back-end yang stabil dan terukur.",
        "Mengembangkan aplikasi Front-end yang optimal dan *user-friendly*.",
        "Mengaplikasikan pengetahuan Web dan Mobile dalam solusi bisnis.",
        "Beradaptasi cepat dengan teknologi dan kerangka kerja baru.",
    ];
    
    return (
        <section 
            id="about" 
            style={{ 
                padding: '100px 20px',
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
                width: '500px',
                height: '500px',
                background: `radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)`,
                borderRadius: '50%',
                top: '-100px',
                right: '-100px',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                width: '400px',
                height: '400px',
                background: `radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)`,
                borderRadius: '50%',
                bottom: '100px',
                left: '-50px',
                pointerEvents: 'none'
            }} />

            <style>{`
                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-40px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(40px); }
                    to { opacity: 1; transform: translateX(0); }
                }
            `}</style>

            <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
                
                {/* Header */}
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
                    fontSize: '1.1em',
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
                        gap: '50px'
                    }}
                >
                    {/* Kolom Kiri: Teks Cerita */}
                    <div 
                        style={{ 
                            flex: 1, 
                            minWidth: '300px',
                            animation: 'slideInLeft 0.8s ease-out'
                        }}
                    >
                        <h3 style={{ 
                            color: accentColor, 
                            marginBottom: '30px',
                            fontSize: '1.8em',
                            fontWeight: '700'
                        }}>
                            Transformasi Kreativitas menjadi Kode Fungsional
                        </h3>
                        
                        {biographyText}
                        
                        <p style={{ 
                            fontSize: '1.1em', 
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

                    {/* Kolom Kanan: KARTU GOAL BARU (Lebih Profesional) */}
                    <div 
                        style={{ 
                            flex: 1, 
                            minWidth: '300px',
                            textAlign: 'center',
                            animation: 'slideInRight 0.8s ease-out'
                        }}
                        onMouseEnter={() => setHoveredCard(true)}
                        onMouseLeave={() => setHoveredCard(false)}
                    >
                        <div 
                            style={{
                                padding: '50px 40px',
                                backgroundColor: cardBg,
                                borderRadius: '16px',
                                border: `2px solid ${hoveredCard ? accentColor : primaryColor}`,
                                boxShadow: hoveredCard 
                                    ? `0 25px 60px rgba(6, 182, 212, 0.4), inset 0 0 30px rgba(6, 182, 212, 0.1)` 
                                    : `0 10px 40px rgba(6, 182, 212, 0.15)`,
                                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                transform: hoveredCard ? 'translateY(-8px)' : 'translateY(0)',
                                cursor: 'pointer',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}
                        >
                            <h3 style={{ 
                                color: lightText, 
                                marginBottom: '25px',
                                fontSize: '1.6em',
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
                                maxWidth: '300px' 
                            }}>
                                {goalList.map((goal, index) => (
                                    <li key={index} style={{ 
                                        color: mutedText, 
                                        marginBottom: '15px', 
                                        display: 'flex', 
                                        alignItems: 'flex-start',
                                        fontSize: '1.05em' 
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