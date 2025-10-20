// src/components/Projects.jsx

import React from 'react';

// Data Proyek (Tidak Berubah)
const projectList = [
    {
        title: "Aplikasi Booking Gedung",
        description: "Final Project – Web Programming Course.",
        tech: ["Laravel", "MySQL", "Bootstrap"],
        type: "Web",
        Image: "/gedung.png", 
        link: "https://github.com/Nashwahrz/booking-gedung.git",
        details: { 
            features: [
                "Sistem Otentikasi Pengguna & Admin",
                "Fitur Pemesanan (Booking) dan Cek Ketersediaan Gedung",
                "Manajemen Data Gedung, Jadwal, dan Pembayaran",
                "Laporan Pemakaian Gedung (Admin)",
            ],
            images: [
                { src: "/gedung.png", alt: "Halaman Utama Aplikasi" },
                { src: "/gedung-page1.png", alt: "Halaman List Gedung" },
                { src: "/gedung-page2.png", alt: "Detail Gedung" },
                { src: "/gedung-page3.png", alt: "List Tanggal Booking" },
                { src: "/gedung-page4.png", alt: "Form Booking" },
                { src: "/gedung-page8.png", alt: "Cek Status Booking" },
                { src: "/gedung-page6.png", alt: "Dashboard Admin" },
                { src: "/gedung-page7.png", alt: "Dashboard Admin" },
            ]
        }
    },
    {
        title: "Website Kuesioner SIKELA",
        description: "A web-based system designed to collect and evaluate student satisfaction with academic services such as administration, lecturer performance, and scheduling.",
        tech: ["PHP Native", "Bootstrap", "JS"],
        type: "Web",
        Image: "/sikela.png",
        link: "https://www.sikela.2.mibers23.my.id/",
        details: {
            features: [
                "Pengisian Kuesioner oleh Mahasiswa, Dosen, Tendik dan Mitra",
                "Sistem Penilaian Otomatis",
                "Dashboard Visualisasi Hasil Kuesioner",
                "Pemantauan data bagi Kajur dan Kaprodi"
            ],
            images: [
                { src: "/sikela1.png", alt: "Halaman Depan Kuesioner" },
                { src: "/sikela2.png", alt: "Form kuesioner" },
                { src: "/sikela5.png", alt: "Dashboard Hasil" },
                { src: "/sikela6.png", alt: "Dashboard Hasil" },
                { src: "/sikela7.png", alt: "Dashboard Hasil" },
            ]
        }
    },
    {
        title: "Website FindUATM",
        description: "Final Project for Geographic Information System (GIS).",
        tech: ["QGIS", "PHP Native", "Leaflet.js", "GeoJSON"],
        type: "Web",
        Image: "/atm.png",
        link: "https://github.com/Nashwahrz/AtmGis.git",
        details: {
            features: [
                "Peta Interaktif berbasis Leaflet.js",
                "Pencarian Lokasi ATM Terdekat",
                "Integrasi Data Geospasial (GeoJSON)",
            ],
            images: [
                { src: "/atm.png", alt: "Tampilan Dashboard" },
                { src: "/atm-page2.png", alt: "Form Pencarian ATM" },
                { src: "/atm-page3.png", alt: "Dashboard Admin" },
            ]
        }
    },
    {
        title: "Sistem Perhitungan Gaji Karyawan",
        description: "Final Project for Desktop Programming Course. Aplikasi desktop untuk manajemen gaji.",
        tech: ["C#", "SQL Server"],
        type: "Desktop",
        Image: "/gaji.png",
        link: "Not Found",
        details: {
            features: [
                "Manajemen Data Karyawan",
                "Perhitungan Gaji Pokok, Tunjangan, dan Potongan",
                "Fitur Cetak Slip Gaji (Reporting)",
            ],
            images: [
                { src: "/gaji.png", alt: "Tampilan Form Login Aplikasi" },
                { src: "/gaji-page1.png", alt: "Form Input Gaji" },
                { src: "/gaji-page2.png", alt: "Tampilan Laporan" },
            ]
        }
    },
    {
        title: "Aplikasi Data Kampus",
        description: "Final Project for Mobile Programming Course.",
        tech: ["Flutter", "Lumen", "API", "Mysql"],
        type: "Mobile",
        Image: "/kampus.png",
        link: "https://github.com/Nashwahrz/project_data_kampus.git",
        details: {
            features: [
                "Pengambilan Data Kampus via API (Lumen)",
                "Tampilan List Kampus",
                "Tampilan Form Tambah dan Edit",
                "Tampilan Detail Kampus beserta dengan maps menggunakan API ",
            ],
            images: [
                { src: "/kampus.png", alt: "Tampilan Splash Screen Aplikasi" },
                { src: "/kampus-page1.jpg", alt: "Halaman Utama Mobile" },
                { src: "/kampus-page2.png", alt: "Halaman Tambah Data" },
                { src: "/kampus-page3.png", alt: "Halaman Detail Data" },
                { src: "/kampus-page4.png", alt: "Halaman Edit Data" },
            ]
        }
    },
     {
        title: "Aplikasi Catatan",
        description: "Assignment for Mobile Programming Course.",
        tech: ["Flutter", "Lumen", "API", "Mysql"],
        type: "Mobile",
        Image: "/note.png",
        link: "https://github.com/Nashwahrz/notes_awaa.git",
        details: {
            features: [
                "Tampilan List Catatan",
                "Tampilan Form Tambah dan Edit",
            ],
            images: [
                { src: "/note.png", alt: "Tampilan Splash Screen Aplikasi" },
                { src: "/note-page1.png", alt: "Halaman Utama Mobile" },
                { src: "/note-page2.png", alt: "Halaman Tambah Data" },
            ]
        }
    },
    {
        title: "Klinik App",
        description: "Assignment for Mobile Programming Course.",
        tech: ["Kotlin"],
        type: "Mobile",
        Image: "/care4.jpg",
        link: "https://github.com/Nashwahrz/Klinik.Apps",
        details: {
            features: [
                "Tampilan List",
                "Tampilan Detail",
            ],
            images: [
                { src: "/care4.jpg", alt: "Tampilan Splash Screen Aplikasi" },
                { src: "/care3.jpg", alt: "Halaman Login" },
                { src: "/care1.jpg", alt: "Halaman List" },
                { src: "/care.jpg", alt: "Halaman Detail" },
            ]
        }
    },
];

function Projects() {
    const [hoveredIndex, setHoveredIndex] = React.useState(null);
    const [modalProject, setModalProject] = React.useState(null); 
    // FIX 1: Tambahkan state dan logic untuk mendeteksi mobile
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const darkBg = '#0f172a'; 
    const cardBg = '#1e293b'; 
    const primaryColor = '#0ea5e9'; 
    const accentColor = '#06b6d4'; 
    const lightText = '#f1f5f9'; 
    const mutedText = '#cbd5e1';

    const closeModal = () => setModalProject(null);
    const openModal = (project) => setModalProject(project);

    const ProjectModal = ({ project, onClose }) => {
        if (!project) return null;

        const isLinkAvailable = project.link && project.link !== "Not Found";
        const isGitHubLink = isLinkAvailable && project.link.includes('github');

        return (
            <div 
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.85)', 
                    zIndex: 1000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // FIX 2: Padding modal overlay responsif
                    padding: isMobile ? '16px' : '20px',
                    overflowY: 'auto'
                }}
                onClick={onClose} 
            >
                <div 
                    style={{
                        backgroundColor: cardBg,
                        color: lightText,
                        borderRadius: '16px',
                        maxWidth: '800px',
                        width: '100%',
                        maxHeight: '90vh', 
                        overflowY: 'auto', 
                        // FIX 3: Padding modal content responsif
                        padding: isMobile ? '24px' : '40px',
                        position: 'relative',
                        boxShadow: `0 25px 80px rgba(6, 182, 212, 0.3), 0 0 40px ${accentColor}40`,
                        border: `2px solid ${accentColor}40`
                    }}
                    onClick={(e) => e.stopPropagation()} 
                >
                    <button 
                        onClick={onClose} 
                        style={{
                            position: 'absolute',
                            // FIX: Sesuaikan posisi close button
                            top: isMobile ? '12px' : '20px',
                            right: isMobile ? '12px' : '20px',
                            backgroundColor: 'transparent',
                            color: mutedText,
                            border: `2px solid ${mutedText}`,
                            fontSize: '1.5em',
                            cursor: 'pointer',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            fontWeight: 'bold'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = primaryColor;
                            e.currentTarget.style.color = darkBg;
                            e.currentTarget.style.borderColor = primaryColor;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = mutedText;
                            e.currentTarget.style.borderColor = mutedText;
                        }}
                    >
                        ×
                    </button>

                    <h2 style={{ color: accentColor, marginBottom: '10px', fontSize: isMobile ? '1.4em' : '1.8em', fontWeight: '800' }}>
                        {project.title}
                    </h2>
                    <p style={{ color: mutedText, marginBottom: '25px', borderBottom: `1px solid ${accentColor}40`, paddingBottom: '15px', fontSize: isMobile ? '0.9em' : '1em' }}>
                        {project.description}
                    </p>

                    <h3 style={{ color: primaryColor, marginTop: '30px', marginBottom: '18px', fontSize: isMobile ? '1em' : '1.2em', fontWeight: '700' }}>
                        Galeri Proyek
                    </h3>
                    <div 
                        style={{
                            display: 'grid',
                            // FIX 4: Sesuaikan grid galeri untuk mobile
                            gridTemplateColumns: isMobile ? 'repeat(auto-fit, minmax(130px, 1fr))' : 'repeat(auto-fit, minmax(180px, 1fr))',
                            gap: '12px', // Mengurangi gap di mobile
                            marginBottom: '30px',
                        }}
                    >
                        {project.details.images.map((img, i) => (
                            <div key={i} style={{ 
                                backgroundColor: darkBg, 
                                borderRadius: '10px', 
                                overflow: 'hidden', 
                                boxShadow: `0 8px 20px rgba(6, 182, 212, 0.15)`,
                                border: `1px solid ${accentColor}20`,
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                if (!isMobile) {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = `0 12px 30px rgba(6, 182, 212, 0.3)`;
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isMobile) {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = `0 8px 20px rgba(6, 182, 212, 0.15)`;
                                }
                            }}>
                                <img 
                                    src={img.src} 
                                    alt={img.alt} 
                                    style={{ 
                                        width: '100%', 
                                        height: 'auto',
                                        maxWidth: '100%',
                                        // FIX 5: Tinggi gambar di modal lebih kecil di mobile
                                        maxHeight: isMobile ? '150px' : '280px',
                                        objectFit: 'contain', 
                                        display: 'block',
                                        padding: '8px',
                                        margin: '0 auto'
                                    }}
                                />
                                <p style={{ 
                                    // FIX 6: Font size deskripsi gambar lebih kecil di mobile
                                    fontSize: isMobile ? '0.7em' : '0.8em', 
                                    color: mutedText, 
                                    padding: '8px', 
                                    textAlign: 'center',
                                    width: '100%',
                                    backgroundColor: `${accentColor}10`,
                                    margin: 0,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {img.alt}
                                </p>
                            </div>
                        ))}
                    </div>

                    <h3 style={{ color: primaryColor, marginBottom: '18px', fontSize: isMobile ? '1em' : '1.2em', fontWeight: '700' }}>
                        Fitur Utama
                    </h3>
                    <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left' }}>
                        {project.details.features.map((feature, i) => (
                            <li key={i} style={{ 
                                marginBottom: '12px', 
                                backgroundColor: `${primaryColor}10`, 
                                padding: '12px 14px', // FIX: Padding disesuaikan
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'flex-start', // FIX: Menggunakan flex-start agar centang di atas
                                border: `1px solid ${primaryColor}20`,
                                transition: 'all 0.3s ease',
                                fontSize: isMobile ? '0.85em' : '0.95em'
                            }}
                            onMouseEnter={(e) => {
                                if (!isMobile) {
                                    e.currentTarget.style.backgroundColor = `${primaryColor}15`;
                                    e.currentTarget.style.borderColor = `${primaryColor}40`;
                                    e.currentTarget.style.transform = 'translateX(5px)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isMobile) {
                                    e.currentTarget.style.backgroundColor = `${primaryColor}10`;
                                    e.currentTarget.style.borderColor = `${primaryColor}20`;
                                    e.currentTarget.style.transform = 'translateX(0)';
                                }
                            }}>
                                <span style={{ color: accentColor, marginRight: '10px', fontWeight: 'bold', fontSize: '1em', marginTop: '2px', flexShrink: 0 }}>✓</span> 
                                <span style={{ color: lightText }}>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    {isLinkAvailable && (
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                marginTop: '30px',
                                // FIX 7: Padding dan font size tombol lebih kecil di mobile
                                padding: isMobile ? '10px 18px' : '12px 24px',
                                backgroundColor: primaryColor,
                                color: darkBg, 
                                fontWeight: '700',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                boxShadow: `0 10px 30px ${primaryColor}40`,
                                fontSize: isMobile ? '0.85em' : '0.95em'
                            }}
                            onMouseEnter={(e) => {
                                if (!isMobile) {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = `0 15px 40px ${primaryColor}60`;
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isMobile) {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = `0 10px 30px ${primaryColor}40`;
                                }
                            }}
                        >
                            {isGitHubLink ? 'Lihat Kode (GitHub)' : 'Kunjungi Website'}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        );
    };

    return (
        <section 
            id="projects" 
            style={{ 
                // FIX 8: Sesuaikan padding section untuk mobile
                padding: isMobile ? '60px 16px' : '100px 20px',
                backgroundColor: darkBg,
                textAlign: 'center',
                color: lightText,
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background-color 0.5s ease'
            }}
        >
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                width: '400px',
                height: '400px',
                background: `radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)`,
                borderRadius: '50%',
                top: '-80px',
                right: '-80px',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                width: '500px',
                height: '500px',
                background: `radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)`,
                borderRadius: '50%',
                bottom: '-100px',
                left: '-100px',
                pointerEvents: 'none'
            }} />

            {/* FIX 9: Tambahkan media query untuk animasi yang lebih pendek di mobile */}
            <style>{`
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                /* MOBILE ANIMATION ADJUSTMENT */
                @media (max-width: 768px) {
                    @keyframes slideUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                }
            `}</style>

            <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
                <h2 style={{ 
                    // FIX 10: Font size header responsif
                    fontSize: isMobile ? 'clamp(1.5em, 6vw, 2em)' : 'clamp(2em, 8vw, 2.8em)', 
                    marginBottom: '10px',
                    fontWeight: '800',
                    background: `linear-gradient(135deg, ${lightText}, ${accentColor})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    Portofolio <span style={{ color: accentColor }}>Proyek</span>
                </h2>
                <p style={{ 
                    // FIX 11: Margin dan font size deskripsi responsif
                    marginBottom: isMobile ? '40px' : '60px', 
                    color: mutedText, 
                    fontSize: isMobile ? '0.9em' : '1.1em',
                    fontWeight: '400',
                    padding: '0 10px'
                }}>
                    Klik pada kartu proyek untuk melihat detail fitur dan galeri tampilan.
                </p>
                
                <div 
                    style={{
                        display: 'grid',
                        // FIX 12: Mengubah minmax dari 320px menjadi 280px
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                        // FIX 13: Gap lebih kecil di mobile
                        gap: isMobile ? '20px' : '30px',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}
                >
                    {projectList.map((project, index) => {
                        const isCurrentHovered = index === hoveredIndex;

                        return (
                            <div 
                                key={index}
                                onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                                onClick={() => openModal(project)} 
                                style={{
                                    backgroundColor: cardBg,
                                    border: `2px solid ${isCurrentHovered ? accentColor : 'rgba(14, 165, 233, 0.2)'}`,
                                    borderRadius: '14px',
                                    padding: isMobile ? '20px' : '30px', // FIX: Padding kartu responsif
                                    textAlign: 'left',
                                    boxShadow: isCurrentHovered 
                                        ? `0 25px 60px rgba(6, 182, 212, 0.4), inset 0 0 30px rgba(6, 182, 212, 0.1)`
                                        : '0 10px 30px rgba(6, 182, 212, 0.1)',
                                    // FIX 14: Matikan hover transform di mobile
                                    transform: isMobile ? 'translateY(0)' : (isCurrentHovered ? 'translateY(-10px)' : 'translateY(0)'),
                                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    animation: `slideUp 0.6s ease-out ${index * 0.08}s backwards`
                                }}
                            >
                                {/* Background glow effect */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: `radial-gradient(circle at 50% 0%, ${accentColor}20, transparent 70%)`,
                                    opacity: isCurrentHovered ? 1 : 0,
                                    transition: 'opacity 0.4s ease',
                                    pointerEvents: 'none'
                                }} />

                                <div style={{ position: 'relative', zIndex: 1 }}>
                                    {project.Image && (
                                        <img 
                                            src={project.Image} 
                                            alt={project.title} 
                                            style={{
                                                width: '100%',
                                                // FIX 15: Tinggi gambar kartu responsif
                                                height: isMobile ? '150px' : '200px', 
                                                borderRadius: '10px',
                                                marginBottom: '20px', 
                                                objectFit: 'cover',
                                                border: `1px solid ${accentColor}20`,
                                                transition: 'transform 0.4s ease',
                                                transform: isCurrentHovered && !isMobile ? 'scale(1.02)' : 'scale(1)'
                                            }}
                                        />
                                    )}
                                    
                                    <h3 style={{ 
                                        color: lightText, 
                                        marginBottom: '10px', 
                                        // FIX 16: Font size judul kartu responsif
                                        fontSize: isMobile ? '1.1em' : '1.4em',
                                        fontWeight: '700',
                                        lineHeight: '1.3'
                                    }}>
                                        {project.title}
                                    </h3>
                                    <p style={{ 
                                        color: mutedText, 
                                        // FIX 17: Font size deskripsi kartu responsif
                                        fontSize: isMobile ? '0.85em' : '0.95em', 
                                        marginBottom: '18px',
                                        lineHeight: '1.6',
                                        fontWeight: '400'
                                    }}>
                                        {project.description}
                                    </p>
                                    
                                    {/* FIX 18: Memperbaiki kesalahan sintaks object style */}
                                    <div style={{ margin: '22px 0 18px 0', display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                                        {project.type && (
                                            <span 
                                                style={{ 
                                                    display: 'inline-block', 
                                                    backgroundColor: `${primaryColor}20`,
                                                    border: `1.5px solid ${primaryColor}`,
                                                    color: primaryColor,
                                                    padding: '6px 12px', 
                                                    borderRadius: '20px', 
                                                    // FIX 19: Font size tag responsif
                                                    fontSize: '0.75em',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    transition: 'all 0.3s ease',
                                                    letterSpacing: '0.5px'
                                                }}
                                            >
                                                {project.type}
                                            </span>
                                        )}
                                        
                                        {project.tech.slice(0, 2).map((tech, i) => (
                                            <span 
                                                key={i} 
                                                style={{ 
                                                    display: 'inline-block',
                                                    backgroundColor: `${accentColor}15`,
                                                    border: `1px solid ${accentColor}30`,
                                                    color: accentColor,
                                                    padding: '6px 10px', 
                                                    borderRadius: '20px', 
                                                    // FIX 20: Font size tag responsif
                                                    fontSize: '0.75em',
                                                    fontWeight: '600',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.length > 2 && (
                                            <span 
                                                style={{ 
                                                    display: 'inline-block',
                                                    backgroundColor: `${accentColor}15`,
                                                    border: `1px solid ${accentColor}30`,
                                                    color: accentColor,
                                                    padding: '6px 10px', 
                                                    borderRadius: '20px', 
                                                    // FIX 21: Font size tag responsif
                                                    fontSize: '0.75em',
                                                    fontWeight: '600'
                                                }}
                                            >
                                                +{project.tech.length - 2}
                                            </span>
                                        )}
                                    </div>
                                    
                                    <p style={{
                                        marginTop: '20px',
                                        color: primaryColor,
                                        fontWeight: '700',
                                        // FIX 22: Font size CTA responsif
                                        fontSize: '0.85em',
                                        opacity: isCurrentHovered && !isMobile ? 1 : 0.7,
                                        transition: 'opacity 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    }}>
                                        Klik untuk Detail
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7"/>
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            {modalProject && <ProjectModal project={modalProject} onClose={closeModal} />}
        </section>
    );
}

export default Projects;