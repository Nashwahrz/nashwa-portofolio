// src/components/Experience.jsx
import React from 'react';
import { Briefcase, MapPin, Code, DollarSign, BookOpen, Smartphone, Shield, Calendar } from 'lucide-react';

const experienceList = [
    {
        title: 'Sistem Kepuasan Layanan Akademik (SIKELA)',
        role: 'Backend Developer',
        year: '2024',
        tech: ['PHP Native', 'MySQL'],
        description: 'Mengembangkan fitur backend utama termasuk otentikasi pengguna, validasi, dan manajemen data kuesioner layanan akademik.',
        icon: Code,
        color: '#00b4d8',
    },
    {
        title: 'FindUAtm – Website Pencarian ATM Kota Padang',
        role: 'Full-Stack Developer',
        year: '2024',
        tech: ['QGIS', 'PHP Native', 'Leaflet.js', 'GeoJSON'],
        description: 'Menciptakan aplikasi Web GIS untuk mengintegrasikan data spasial dan peta interaktif, memberikan fitur pencarian lokasi ATM terdekat.',
        icon: MapPin,
        color: '#ffd60a',
    },
    {
        title: 'Sistem Perhitungan Gaji Karyawan',
        role: 'Desktop Developer',
        year: '2024',
        tech: ['C#', 'SQL Server'],
        description: 'Membangun aplikasi desktop untuk menghitung gaji karyawan dengan fitur input data, perhitungan gaji pokok dan tunjangan, serta pembuatan slip gaji.',
        icon: DollarSign,
        color: '#00b4d8',
    },
    {
        title: 'Sistem Booking Gedung Berbasis Web',
        role: 'Full-Stack Developer',
        year: '2025',
        tech: ['Laravel', 'Bootstrap', 'MySQL'],
        description: 'Mengembangkan aplikasi web pemesanan gedung dengan fitur pengajuan booking, pelacakan status, dan persetujuan admin berbasis peran.',
        icon: BookOpen,
        color: '#ffd60a',
    },
    {
        title: 'Aplikasi Catatan Mobile Sederhana (CRUD)',
        role: 'Mobile Developer',
        year: '2024',
        tech: ['Flutter', 'SQLite'],
        description: 'Membuat aplikasi notes mobile sederhana dengan fungsionalitas penuh CRUD. Data disimpan secara lokal menggunakan SQLite.',
        icon: Smartphone,
        color: '#00b4d8',
    },
    {
        title: 'Aplikasi Manajemen Data Kampus (Mobile)',
        role: 'Mobile Developer',
        year: '2025',
        tech: ['Flutter', 'MySQL', 'API', 'Google Maps'],
        description: 'Mengembangkan aplikasi mobile Flutter dengan CRUD lengkap, integrasi Google Maps untuk lokasi kampus, dan MySQL via API.',
        icon: Smartphone,
        color: '#ffd60a',
    },
    {
        title: 'Klinik App (Mobile)',
        role: 'Mobile Developer',
        year: '2024',
        tech: ['Kotlin'],
        description: 'Mengembangkan aplikasi mobile berbasis Kotlin untuk manajemen data klinik.',
        icon: Smartphone,
        color: '#00b4d8',
    },
    {
        title: 'Riset Sawit – Keamanan Perkebunan Kelapa Sawit',
        role: 'Anggota Tim Peneliti',
        year: '2025',
        tech: ['IoT', 'Sistem Monitoring'],
        description: 'Terpilih sebagai salah satu dari 40 proposal yang didanai BPDP. Mengembangkan solusi berbasis IoT untuk keamanan dan monitoring perkebunan kelapa sawit.',
        icon: Shield,
        color: '#ffd60a',
    },
];

function ExpCard({ exp, index }) {
    const [hovered, setHovered] = React.useState(false);
    const IconComp = exp.icon || Briefcase;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: 'flex',
                gap: 'clamp(14px, 3vw, 24px)',
                alignItems: 'flex-start',
                marginBottom: '20px',
                opacity: 0,
                animation: 'expFadeIn 0.5s ease forwards',
                animationDelay: `${index * 0.08}s`,
            }}
        >
            {/* Timeline dot */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexShrink: 0,
                paddingTop: '4px',
            }}>
                <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: hovered
                        ? `${exp.color}20`
                        : 'var(--bg-card)',
                    border: `2px solid ${hovered ? exp.color : 'rgba(0,180,216,0.2)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: hovered ? `0 0 16px ${exp.color}40` : 'none',
                }}>
                    <IconComp size={18} color={hovered ? exp.color : 'var(--text-muted)'} />
                </div>
                {index < experienceList.length - 1 && (
                    <div style={{
                        width: '2px',
                        flex: 1,
                        minHeight: '30px',
                        background: 'linear-gradient(to bottom, rgba(0,180,216,0.3), transparent)',
                        marginTop: '8px',
                    }} />
                )}
            </div>

            {/* Card */}
            <div style={{
                flex: 1,
                background: hovered ? 'rgba(22,50,96,0.8)' : 'var(--bg-card)',
                border: `1px solid ${hovered ? exp.color + '50' : 'rgba(0,180,216,0.1)'}`,
                borderRadius: '14px',
                padding: 'clamp(16px, 3vw, 24px)',
                transition: 'all 0.35s ease',
                transform: hovered ? 'translateX(6px)' : 'translateX(0)',
                boxShadow: hovered ? `0 10px 30px ${exp.color}15` : 'none',
                marginBottom: '16px',
            }}>
                {/* Header */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '8px',
                }}>
                    <h3 style={{
                        fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        margin: 0,
                        flex: 1,
                        minWidth: '200px',
                    }}>
                        {exp.title}
                    </h3>
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '3px 10px',
                        background: `${exp.color}15`,
                        border: `1px solid ${exp.color}40`,
                        borderRadius: '50px',
                        fontSize: '0.78rem',
                        fontWeight: '700',
                        color: exp.color,
                        whiteSpace: 'nowrap',
                    }}>
                        <Calendar size={11} /> {exp.year}
                    </span>
                </div>

                <p style={{
                    color: exp.color,
                    fontSize: '0.88rem',
                    fontWeight: '600',
                    marginBottom: '10px',
                }}>
                    {exp.role}
                </p>

                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    marginBottom: '14px',
                }}>
                    {exp.description}
                </p>

                {/* Tech badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {exp.tech.map((t, i) => (
                        <span key={i} style={{
                            padding: '3px 10px',
                            borderRadius: '50px',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            background: `${exp.color}12`,
                            color: exp.color,
                            border: `1px solid ${exp.color}30`,
                        }}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Experience() {
    return (
        <section
            id="experience"
            className="section"
            style={{ background: 'linear-gradient(180deg, #0d1f3c 0%, #0a1628 100%)' }}
        >
            <div style={{
                position: 'absolute', width: '350px', height: '350px',
                background: 'radial-gradient(circle, rgba(255,214,10,0.08) 0%, transparent 70%)',
                borderRadius: '50%', top: '10%', left: '-60px', filter: 'blur(60px)', pointerEvents: 'none',
            }} />

            <style>{`
                @keyframes expFadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vh, 56px)' }}>
                    <div className="section-label"><Briefcase size={12} /> Pengalaman</div>
                    <h2 className="section-title">
                        Proyek & <span>Pengalaman</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Peran dan kontribusi saya dalam berbagai proyek pengembangan digital.
                    </p>
                </div>

                {/* Timeline */}
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {experienceList.map((exp, i) => (
                        <ExpCard key={i} exp={exp} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;