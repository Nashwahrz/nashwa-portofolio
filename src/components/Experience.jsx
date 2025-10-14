import React from 'react';
import { Briefcase, MapPin, Code, DollarSign, BookOpen, Smartphone, Shield } from 'lucide-react'; 

const experienceList = [
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
        description: "Proyek akhir mata kuliah Web Programming. Mengembangkan aplikasi web pemesanan gedung dengan fitur pengajuan *booking*, pelacakan status, dan fitur persetujuan admin dengan kontrol akses berbasis peran.",
        icon: BookOpen
    },
    {
        title: "Aplikasi Catatan Mobile Sederhana (CRUD)",
        role: "Mobile Developer",
        year: "2024",
        tech: ["Flutter", "SQLite"],
        description: "Membuat aplikasi *notes* mobile sederhana dengan fungsionalitas penuh CRUD (Create, Read, Update, Delete). Data disimpan secara lokal di perangkat menggunakan basis data SQLite.",
        icon: Smartphone
    },
    {
        title: "Aplikasi Manajemen Data Kampus (Mobile)",
        role: "Mobile Developer",
        year: "2025",
        tech: ["Flutter", "MySQL", "API"],
        description: "Mengembangkan aplikasi mobile berbasis Flutter dengan fungsionalitas CRUD lengkap. Mengintegrasikan Google Maps untuk menampilkan lokasi kampus dan MySQL sebagai penyimpanan data *online* via API.",
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
                // PERBAIKAN: Padding vertikal responsif, Padding horizontal dihilangkan
                padding: 'clamp(60px, 10vh, 100px) 0', 
                
                backgroundColor: darkBg,
                textAlign: 'center',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                
                {/* Header (Font size sudah menggunakan clamp) */}
                <h2 style={{
                    fontSize: 'clamp(2em, 8vw, 2.8em)',
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
                    marginBottom: '60px',
                    color: mutedText,
                    fontSize: '1.1em',
                }}>
                    Peran dan kontribusi utama saya dalam berbagai proyek pengembangan.
                </p>

                {/* Timeline/List Experience */}
                <div style={{ textAlign: 'left' }}>
                    {experienceList.map((exp, index) => {
                        const IconComponent = exp.icon || Briefcase; 
                        const iconColor = getIconColor(index);

                        return (
                            <div 
                                key={index} 
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '20px',
                                    marginBottom: '40px',
                                    paddingBottom: index < experienceList.length - 1 ? '40px' : '0',
                                    borderLeft: index < experienceList.length - 1 ? `2px solid ${cardBg}` : 'none',
                                    position: 'relative',
                                    // Memastikan garis vertikal tetap ada di layar kecil
                                    marginLeft: '15px' // Memberi ruang di kiri agar garis terlihat
                                }}
                            >
                                {/* Dot / Icon Indicator */}
                                <div style={{
                                    position: 'sticky',
                                    // PERBAIKAN: Mengurangi top sticky di HP
                                    top: '70px', 
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginRight: '10px',
                                    zIndex: 10,
                                    transform: 'translateX(-17px)', // Menarik ikon agar sejajar dengan garis
                                }}>
                                    <div 
                                        style={{
                                            backgroundColor: cardBg,
                                            border: `3px solid ${iconColor}`,
                                            borderRadius: '50%',
                                            padding: '8px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                                            transition: 'transform 0.3s ease',
                                        }}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <IconComponent size={20} color={lightText} />
                                    </div>
                                </div>

                                {/* Content Card (Dibuat responsif) */}
                                <div 
                                    style={{
                                        flex: 1,
                                        backgroundColor: cardBg,
                                        padding: '25px',
                                        borderRadius: '10px',
                                        boxShadow: hoveredIndex === index ? `0 15px 30px ${iconColor}20` : 'none',
                                        border: `1px solid ${hoveredIndex === index ? iconColor : 'transparent'}`,
                                        transform: hoveredIndex === index ? 'translateY(-5px)' : 'translateY(0)',
                                        transition: 'all 0.3s ease',
                                        marginTop: '10px',
                                        width: '100%',
                                        minWidth: '0' // Mencegah overflow horizontal
                                    }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                                        {/* Tahun diletakkan di atas judul di HP */}
                                        <span style={{ color: primaryColor, fontWeight: '600', fontSize: '0.85em', marginBottom: '5px' }}>
                                            {exp.year}
                                        </span>
                                        <h3 style={{ margin: 0, color: lightText, fontSize: 'clamp(1.2em, 4vw, 1.4em)', fontWeight: '700' }}>
                                            {exp.title}
                                        </h3>
                                    </div>
                                    
                                    <p style={{ color: accentColor, margin: '5px 0 10px 0', fontWeight: '500', fontSize: '0.9em' }}>
                                        {exp.role}
                                    </p>
                                    
                                    <p style={{ color: mutedText, fontSize: '0.95em', lineHeight: '1.6' }}>
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