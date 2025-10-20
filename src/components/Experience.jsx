// src/components/Experience.jsx
import React from 'react';
import { Briefcase, MapPin, Code, DollarSign, BookOpen, Smartphone, Shield } from 'lucide-react'; 

const experienceList = [
    // ... (experienceList unchanged) ...
    {
        title: "Sistem Kepuasan Layanan Akademik (SIKELA)",
        role: "Backend Developer",
        year: "2024",
        tech: ["PHP Native", "MySQL"],
        description: "Mengembangkan fitur backend utama termasuk otentikasi pengguna, validasi, dan manajemen data kuesioner layanan akademik.",
        icon: Code
    },
    {
        title: "FindUAtm (Website Pencarian ATM Kota Padang)",
        role: "Full-Stack Developer",
        year: "2024",
        tech: ["QGIS", "PHP Native", "Leaflet.js", "GeoJSON"],
        description: "Menciptakan aplikasi Web GIS untuk mengintegrasikan data spasial dan peta interaktif, memberikan fitur pencarian lokasi ATM terdekat.",
        icon: MapPin
    },
    {
        title: "Sistem Perhitungan Gaji Karyawan (Aplikasi Desktop)",
        role: "Developer",
        year: "2024",
        tech: ["C#", "SQL Server"],
        description: "Membangun aplikasi desktop untuk menghitung gaji karyawan dengan fitur input data, perhitungan gaji pokok dan tunjangan, serta pembuatan laporan/slip gaji.",
        icon: DollarSign
    },
    {
        title: "Sistem Booking Gedung Berbasis Web",
        role: "Full-Stack Developer",
        year: "2025",
        tech: ["Laravel", "Bootstrap", "MySQL"],
        description: "Proyek akhir mata kuliah Web Programming. Mengembangkan aplikasi web pemesanan gedung dengan fitur pengajuan booking, pelacakan status, dan fitur persetujuan admin dengan kontrol akses berbasis peran.",
        icon: BookOpen
    },
    {
        title: "Aplikasi Catatan Mobile Sederhana (CRUD)",
        role: "Mobile Developer",
        year: "2024",
        tech: ["Flutter", "SQLite"],
        description: "Membuat aplikasi notes mobile sederhana dengan fungsionalitas penuh CRUD (Create, Read, Update, Delete). Data disimpan secara lokal di perangkat menggunakan basis data SQLite.",
        icon: Smartphone
    },
    {
        title: "Aplikasi Manajemen Data Kampus (Mobile)",
        role: "Mobile Developer",
        year: "2025",
        tech: ["Flutter", "MySQL", "API"],
        description: "Mengembangkan aplikasi mobile berbasis Flutter dengan fungsionalitas CRUD lengkap. Mengintegrasikan Google Maps untuk menampilkan lokasi kampus dan MySQL sebagai penyimpanan data online via API.",
        icon: Smartphone
    },
    {
        title: "Klinik App (Mobile)",
        role: "Mobile Developer",
        year: "2024",
        tech: ["Kotlin"],
        description: "Mengembangkan aplikasi mobile berbasis kotlin.",
        icon: Smartphone
    },
    {
        title: "Riset Sawit (Keamanan Perkebunan Kelapa Sawit)",
        role: "Anggota Tim Peneliti",
        year: "2025",
        tech: ["IoT", "Sistem Monitoring"],
        description: "Terpilih sebagai salah satu dari 40 proposal yang didanai oleh BPDP. Berkontribusi dalam pengembangan solusi berbasis IoT untuk meningkatkan keamanan dan sistem monitoring di perkebunan kelapa sawit.",
        icon: Shield
    },
];


function Experience() {
    const [hoveredIndex, setHoveredIndex] = React.useState(null);
    // FIX 1: Tambahkan state dan logic untuk mendeteksi mobile
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // DEFINE WARNA TEMA
    const darkBg = '#0f172a';
    const primaryColor = '#0ea5e9'; // Biru terang
    const accentColor = '#06b6d4'; // Biru Cyan
    const lightText = '#f1f5f9';
    const mutedText = '#cbd5e1';
    const cardBg = '#1e293b';

    const getIconColor = (index) => {
        
        const colors = [primaryColor, accentColor, '#FFD700', '#FF7F50'];
        return colors[index % colors.length];
    };

    return (
        <section 
            id="experience" 
            style={{ 
                // FIX 2: Sesuaikan padding section untuk mobile
                padding: isMobile ? '60px 16px' : '100px 20px',
                backgroundColor: darkBg,
                textAlign: 'center',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{ 
                maxWidth: '1000px', 
                margin: '0 auto', 
                position: 'relative', 
                zIndex: 1, 
                // FIX 3: Tambahkan padding horizontal kecil di mobile
                padding: isMobile ? '0 10px' : '0' 
            }}>
                
                {/* Header */}
                <h2 style={{
                    // FIX: Font size responsif
                    fontSize: isMobile ? 'clamp(1.8em, 7vw, 2.8em)' : 'clamp(2em, 8vw, 2.8em)',
                    fontWeight: '800',
                    marginBottom: '15px',
                    background: `linear-gradient(135deg, ${lightText}, ${primaryColor})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}>
                    Pengalaman Kerja & Proyek
                </h2>
                <p style={{ 
                    // FIX: Margin dan font size responsif
                    marginBottom: isMobile ? '40px' : '60px',
                    color: mutedText,
                    fontSize: isMobile ? '1em' : '1.1em',
                }}>
                    Peran dan kontribusi utama saya dalam berbagai proyek pengembangan.
                </p>

                {/* Timeline/List Experience */}
                <div style={{ textAlign: 'left' }}>
                    {experienceList.map((exp, index) => {
                        const IconComponent = exp.icon || Briefcase; // Default icon
                        const iconColor = getIconColor(index);

                        return (
                            <div 
                                key={index} 
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '20px',
                                    // FIX: Margin dan padding responsif
                                    marginBottom: isMobile ? '30px' : '40px',
                                    paddingBottom: index < experienceList.length - 1 ? (isMobile ? '30px' : '40px') : '0',
                                    borderLeft: index < experienceList.length - 1 ? `2px solid ${cardBg}` : 'none',
                                    position: 'relative',
                                }}
                            >
                                {/* Dot / Icon Indicator */}
                                <div style={{
                                    // FIX 4: Matikan sticky di mobile
                                    position: isMobile ? 'relative' : 'sticky',
                                    top: isMobile ? '0' : '100px', 
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginRight: '10px',
                                    zIndex: 10,
                                }}>
                                    <div 
                                        style={{
                                            backgroundColor: cardBg,
                                            border: `3px solid ${iconColor}`,
                                            borderRadius: '50%',
                                            // FIX: Padding icon responsif
                                            padding: isMobile ? '6px' : '8px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                                            transition: 'transform 0.3s ease',
                                        }}
                                        onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                                        onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                                    >
                                        {/* FIX: Ukuran icon responsif */}
                                        <IconComponent size={isMobile ? 18 : 20} color={lightText} />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div 
                                    style={{
                                        flex: 1,
                                        backgroundColor: cardBg,
                                        // FIX: Padding card responsif
                                        padding: isMobile ? '20px' : '25px',
                                        borderRadius: '10px',
                                        boxShadow: hoveredIndex === index ? `0 15px 30px ${iconColor}20` : 'none',
                                        border: `1px solid ${hoveredIndex === index ? iconColor : 'transparent'}`,
                                        transform: hoveredIndex === index && !isMobile ? 'translateY(-5px)' : 'translateY(0)', // FIX: Matikan transform hover di mobile
                                        transition: 'all 0.3s ease',
                                        marginTop: isMobile ? '0' : '10px',
                                        width: '100%'
                                    }}
                                    onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                                    onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                                >
                                    <div style={{ 
                                        display: 'flex', 
                                        // FIX 5: Layout header card vertikal di mobile
                                        flexDirection: isMobile ? 'column' : 'row',
                                        alignItems: isMobile ? 'flex-start' : 'center',
                                        marginBottom: '10px' 
                                    }}>
                                        <h3 style={{ 
                                            margin: 0, 
                                            color: lightText, 
                                            // FIX: Font size responsif
                                            fontSize: isMobile ? '1.2em' : '1.4em', 
                                            fontWeight: '700',
                                            // FIX: Margin bawah di mobile
                                            marginBottom: isMobile ? '5px' : '0'
                                        }}>
                                            {exp.title}
                                        </h3>
                                        <span style={{ 
                                            color: primaryColor, 
                                            fontWeight: '600', 
                                            // FIX: Font size responsif & margin kiri di desktop
                                            fontSize: isMobile ? '0.85em' : '0.9em',
                                            marginLeft: isMobile ? '0' : 'auto'
                                        }}>
                                            {exp.year}
                                        </span>
                                    </div>
                                    
                                    <p style={{ color: accentColor, margin: '5px 0 10px 0', fontWeight: '500', fontSize: isMobile ? '0.9em' : '0.95em' }}>
                                        {exp.role}
                                    </p>
                                    
                                    <p style={{ color: mutedText, fontSize: isMobile ? '0.85em' : '0.95em', lineHeight: '1.6' }}>
                                        {exp.description}
                                    </p>

                                    <div style={{ marginTop: '15px', paddingTop: '10px', borderTop: `1px dashed ${mutedText}33`, display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {exp.tech.map((tech, i) => (
                                            <span key={i} style={{ 
                                                backgroundColor: `${iconColor}20`,
                                                color: iconColor,
                                                padding: '4px 10px', 
                                                borderRadius: '20px', 
                                                fontSize: '0.8em',
                                                fontWeight: 'bold'
                                            }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Experience;