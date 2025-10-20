// Pastikan file ini disimpan sebagai: src/components/Contact.jsx

import React from 'react';
// FIX: Import semua ikon yang diperlukan (termasuk Download untuk CV)
import { Mail, Github, MessageCircleMore, Instagram, Download } from 'lucide-react'; 

function Contact() {
    // FIX 1: Tambahkan state dan logic untuk mendeteksi mobile
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // DEFINE WARNA TEMA
    const darkBg = '#0f172a';
    const primaryColor = '#0ea5e9'; // Biru terang (Digunakan untuk Email dan CV)
    const accentColor = '#06b6d4'; // Biru Cyan (Digunakan untuk GitHub)
    const lightText = '#f1f5f9';
    const mutedText = '#cbd5e1';
    const cardBg = '#1e293b';
    
    // Warna spesifik untuk ikon media sosial
    const whatsappColor = '#25D366'; // Hijau WhatsApp
    const instagramColor = '#E1306C'; // Merah Muda/Magenta Instagram
    const cvColor = '#FFD700'; // Kuning Emas untuk CV (Menarik perhatian)

    // Detail Kontak
    const emailAddress = "nashwaharzathi05@email.com";
    const githubUrl = "https://github.com/Nashwahrz/"; 
    const whatsappNumber = "6282383522629"; 
    const instagramHandle = "nsshw.z"; 
    
    // Asumsi: File CV ada di folder public/
    const cvFilePath = "/cv_nashwa.pdf"; 

    // Fungsi Reusable untuk Hover Effect
    const createHoverHandlers = (color) => ({
        onMouseEnter: (e) => {
             if (!isMobile) { // FIX: Hanya aktifkan di desktop
                e.currentTarget.style.borderColor = color;
                e.currentTarget.style.boxShadow = `0 20px 50px ${color}30`;
                e.currentTarget.style.transform = 'translateX(10px)';
            }
        },
        onMouseLeave: (e) => {
            if (!isMobile) { // FIX: Hanya aktifkan di desktop
                e.currentTarget.style.borderColor = color + '33'; // Transparan 20%
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateX(0)';
            }
        }
    });
    
    const emailHandlers = createHoverHandlers(primaryColor);
    const githubHandlers = createHoverHandlers(accentColor);
    const whatsappHandlers = createHoverHandlers(whatsappColor);
    const instagramHandlers = createHoverHandlers(instagramColor);
    const cvHandlers = createHoverHandlers(cvColor); // Handler baru untuk CV

    return (
        <section 
            id="contact"
            style={{ 
                // FIX 2: Padding section responsif
                padding: isMobile ? '60px 20px' : '100px 20px',
                backgroundColor: darkBg,
                minHeight: '80vh', 
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
                top: '50%',
                left: '-100px',
                transform: 'translateY(-50%)',
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

            <div style={{ 
                maxWidth: '700px', 
                margin: '0 auto', 
                width: '100%', 
                position: 'relative', 
                zIndex: 1, 
                textAlign: 'center',
                // FIX 3: Padding horizontal di mobile
                padding: isMobile ? '0 10px' : '0'
            }}>
                
                {/* Header */}
                <h2 style={{
                    // FIX 4: Font size header responsif
                    fontSize: isMobile ? 'clamp(1.8em, 7vw, 2.8em)' : 'clamp(2em, 8vw, 2.8em)',
                    fontWeight: '800',
                    marginBottom: '15px',
                    background: `linear-gradient(135deg, ${lightText}, ${accentColor})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textAlign: 'center',
                }}>
                    Hubungi Saya Langsung
                </h2>
                <p style={{ 
                    // FIX 5: Margin dan font size responsif
                    marginBottom: isMobile ? '40px' : '60px',
                    color: mutedText,
                    fontSize: isMobile ? '0.95em' : '1.1em',
                    fontWeight: '400',
                    textAlign: 'center',
                }}>
                    Anda dapat menghubungi saya dengan cepat melalui tautan berikut:
                </p>

                {/* Contact Info Grid */}
                <div style={{ 
                    display: 'grid',
                    // FIX 6: Grid lebih fleksibel di HP/Tablet
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                    // FIX 7: Gap responsif
                    gap: isMobile ? '15px' : '20px',
                    maxWidth: '850px', 
                    margin: '0 auto',
                    marginBottom: '50px',
                }}>
                    
                    {/* 1. Unduh CV (BARU) */}
                    <a 
                        href={cvFilePath}
                        download 
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            // FIX 8: Padding card responsif
                            padding: isMobile ? '15px' : '20px',
                            backgroundColor: cardBg,
                            border: `2px solid rgba(255, 215, 0, 0.2)`, 
                            borderRadius: '12px',
                            textDecoration: 'none',
                            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                            cursor: 'pointer',
                            // FIX 9: Matikan transform hover di mobile
                            transform: isMobile ? 'translateX(0)' : (cvHandlers.onMouseEnter ? 'translateX(0)' : 'translateX(0)')
                        }}
                        {...cvHandlers}
                    >
                        <Download size={isMobile ? 24 : 28} color={cvColor} />
                        <div style={{ textAlign: 'left' }}>
                            <p style={{ margin: '0', color: mutedText, fontSize: isMobile ? '0.8em' : '0.9em' }}>Portofolio Dokumen</p>
                            <p style={{ margin: '5px 0 0 0', color: lightText, fontWeight: '600', fontSize: isMobile ? '0.95em' : '1.05em' }}>
                                Unduh CV Saya
                            </p>
                        </div>
                    </a>

                    {/* 2. Email */}
                    <a 
                        href={`mailto:${emailAddress}`}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            padding: isMobile ? '15px' : '20px',
                            backgroundColor: cardBg,
                            border: `2px solid rgba(14, 165, 233, 0.2)`,
                            borderRadius: '12px',
                            textDecoration: 'none',
                            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                            cursor: 'pointer',
                            transform: isMobile ? 'translateX(0)' : (emailHandlers.onMouseEnter ? 'translateX(0)' : 'translateX(0)')
                        }}
                        {...emailHandlers}
                    >
                        <Mail size={isMobile ? 24 : 28} color={primaryColor} />
                        <div style={{ textAlign: 'left' }}>
                            <p style={{ margin: '0', color: mutedText, fontSize: isMobile ? '0.8em' : '0.9em' }}>Email</p>
                            <p style={{ margin: '5px 0 0 0', color: lightText, fontWeight: '600', fontSize: isMobile ? '0.95em' : '1.05em' }}>
                                {emailAddress}
                            </p>
                        </div>
                    </a>

                    {/* 3. GitHub */}
                    <a 
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            padding: isMobile ? '15px' : '20px',
                            backgroundColor: cardBg,
                            border: `2px solid rgba(6, 182, 212, 0.2)`,
                            borderRadius: '12px',
                            textDecoration: 'none',
                            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                            cursor: 'pointer',
                            transform: isMobile ? 'translateX(0)' : (githubHandlers.onMouseEnter ? 'translateX(0)' : 'translateX(0)')
                        }}
                        {...githubHandlers}
                    >
                        <Github size={isMobile ? 24 : 28} color={accentColor} />
                        <div style={{ textAlign: 'left' }}>
                            <p style={{ margin: '0', color: mutedText, fontSize: isMobile ? '0.8em' : '0.9em' }}>GitHub</p>
                            <p style={{ margin: '5px 0 0 0', color: lightText, fontWeight: '600', fontSize: isMobile ? '0.95em' : '1.05em' }}>
                                {githubUrl.replace('https://', '')}
                            </p>
                        </div>
                    </a>
                    
                    {/* 4. WhatsApp */}
                    <a 
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            padding: isMobile ? '15px' : '20px',
                            backgroundColor: cardBg,
                            border: `2px solid rgba(37, 211, 102, 0.2)`,
                            borderRadius: '12px',
                            textDecoration: 'none',
                            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                            cursor: 'pointer',
                            transform: isMobile ? 'translateX(0)' : (whatsappHandlers.onMouseEnter ? 'translateX(0)' : 'translateX(0)')
                        }}
                        {...whatsappHandlers}
                    >
                        <MessageCircleMore size={isMobile ? 24 : 28} color={whatsappColor} />
                        <div style={{ textAlign: 'left' }}>
                            <p style={{ margin: '0', color: mutedText, fontSize: isMobile ? '0.8em' : '0.9em' }}>WhatsApp</p>
                            <p style={{ margin: '5px 0 0 0', color: lightText, fontWeight: '600', fontSize: isMobile ? '0.95em' : '1.05em' }}>
                                +{whatsappNumber}
                            </p>
                        </div>
                    </a>

                    {/* 5. Instagram */}
                    <a 
                        href={`https://www.instagram.com/${instagramHandle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            padding: isMobile ? '15px' : '20px',
                            backgroundColor: cardBg,
                            border: `2px solid rgba(225, 48, 108, 0.2)`,
                            borderRadius: '12px',
                            textDecoration: 'none',
                            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                            cursor: 'pointer',
                            transform: isMobile ? 'translateX(0)' : (instagramHandlers.onMouseEnter ? 'translateX(0)' : 'translateX(0)')
                        }}
                        {...instagramHandlers}
                    >
                        <Instagram size={isMobile ? 24 : 28} color={instagramColor} />
                        <div style={{ textAlign: 'left' }}>
                            <p style={{ margin: '0', color: mutedText, fontSize: isMobile ? '0.8em' : '0.9em' }}>Instagram</p>
                            <p style={{ margin: '5px 0 0 0', color: lightText, fontWeight: '600', fontSize: isMobile ? '0.95em' : '1.05em' }}>
                                @{instagramHandle}
                            </p>
                        </div>
                    </a>

                </div>
            </div>
        </section>
    );
}

export default Contact;