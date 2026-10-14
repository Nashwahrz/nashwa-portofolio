// src/components/Projects.jsx
import React from 'react';
import { FolderOpen, ExternalLink, Github, X, CheckCircle, Monitor, Smartphone, Globe } from 'lucide-react';

// ---- DATA ----
const projectList = [
    {
        title: 'Aplikasi Booking Gedung',
        description: 'Final Project – Web Programming Course. Sistem pemesanan gedung berbasis web dengan manajemen admin lengkap.',
        tech: ['Laravel', 'MySQL', 'Bootstrap'],
        type: 'Web',
        image: '/gedung.png',
        link: 'https://github.com/Nashwahrz/booking-gedung.git',
        details: {
            features: [
                'Sistem Otentikasi Pengguna & Admin',
                'Fitur Pemesanan (Booking) dan Cek Ketersediaan Gedung',
                'Manajemen Data Gedung, Jadwal, dan Pembayaran',
                'Laporan Pemakaian Gedung (Admin)',
            ],
            images: [
                { src: '/gedung.png',      alt: 'Halaman Utama' },
                { src: '/gedung-page1.png', alt: 'List Gedung' },
                { src: '/gedung-page2.png', alt: 'Detail Gedung' },
                { src: '/gedung-page3.png', alt: 'Tanggal Booking' },
                { src: '/gedung-page4.png', alt: 'Form Booking' },
                { src: '/gedung-page8.png', alt: 'Status Booking' },
                { src: '/gedung-page6.png', alt: 'Dashboard Admin' },
                { src: '/gedung-page7.png', alt: 'Dashboard Admin 2' },
            ],
        },
    },
    {
        title: 'Website Kuesioner SIKELA',
        description: 'Sistem berbasis web untuk mengumpulkan dan mengevaluasi kepuasan mahasiswa terhadap layanan akademik.',
        tech: ['PHP Native', 'Bootstrap', 'JavaScript'],
        type: 'Web',
        image: '/sikela.png',
        link: 'https://www.sikela.2.mibers23.my.id/',
        details: {
            features: [
                'Pengisian Kuesioner oleh Mahasiswa, Dosen, Tendik dan Mitra',
                'Sistem Penilaian Otomatis',
                'Dashboard Visualisasi Hasil Kuesioner',
                'Pemantauan data bagi Kajur dan Kaprodi',
            ],
            images: [
                { src: '/sikela1.png', alt: 'Halaman Depan' },
                { src: '/sikela2.png', alt: 'Form Kuesioner' },
                { src: '/sikela5.png', alt: 'Dashboard Hasil' },
                { src: '/sikela6.png', alt: 'Dashboard 2' },
                { src: '/sikela7.png', alt: 'Dashboard 3' },
            ],
        },
    },
    {
        title: 'Website FindUATM',
        description: 'Final Project for GIS Course. Aplikasi web GIS peta interaktif pencarian ATM terdekat di Kota Padang.',
        tech: ['QGIS', 'PHP Native', 'Leaflet.js', 'GeoJSON'],
        type: 'Web',
        image: '/atm.png',
        link: 'https://github.com/Nashwahrz/AtmGis.git',
        details: {
            features: [
                'Peta Interaktif berbasis Leaflet.js',
                'Pencarian Lokasi ATM Terdekat',
                'Integrasi Data Geospasial (GeoJSON)',
            ],
            images: [
                { src: '/atm.png',       alt: 'Dashboard Peta' },
                { src: '/atm-page2.png', alt: 'Form Pencarian' },
                { src: '/atm-page3.png', alt: 'Dashboard Admin' },
            ],
        },
    },
    {
        title: 'Sistem Perhitungan Gaji',
        description: 'Final Project Desktop Programming. Aplikasi desktop manajemen dan perhitungan gaji karyawan lengkap.',
        tech: ['C#', 'SQL Server'],
        type: 'Desktop',
        image: '/gaji.png',
        link: null,
        details: {
            features: [
                'Manajemen Data Karyawan',
                'Perhitungan Gaji Pokok, Tunjangan, dan Potongan',
                'Fitur Cetak Slip Gaji (Reporting)',
            ],
            images: [
                { src: '/gaji.png',       alt: 'Form Login' },
                { src: '/gaji-page1.png', alt: 'Input Gaji' },
                { src: '/gaji-page2.png', alt: 'Laporan' },
            ],
        },
    },
    {
        title: 'Aplikasi Data Kampus',
        description: 'Final Project Mobile Programming. Aplikasi Flutter dengan Google Maps dan integrasi API backend Lumen.',
        tech: ['Flutter', 'Lumen', 'API', 'MySQL'],
        type: 'Mobile',
        image: '/kampus.png',
        link: 'https://github.com/Nashwahrz/project_data_kampus.git',
        details: {
            features: [
                'Pengambilan Data Kampus via REST API',
                'Tampilan List Kampus',
                'Tampilan Form Tambah dan Edit',
                'Detail Kampus dengan Google Maps',
            ],
            images: [
                { src: '/kampus.png',       alt: 'Splash Screen' },
                { src: '/kampus-page1.jpg', alt: 'Halaman Utama' },
                { src: '/kampus-page2.png', alt: 'Tambah Data' },
                { src: '/kampus-page3.png', alt: 'Detail Data' },
                { src: '/kampus-page4.png', alt: 'Edit Data' },
            ],
        },
    },
    {
        title: 'Aplikasi Catatan',
        description: 'Assignment Mobile Programming. Aplikasi notes sederhana berbasis Flutter dengan operasi CRUD lengkap.',
        tech: ['Flutter', 'SQLite'],
        type: 'Mobile',
        image: '/note.png',
        link: 'https://github.com/Nashwahrz/notes_awaa.git',
        details: {
            features: [
                'Tampilan List Catatan',
                'Tambah, Edit, dan Hapus Catatan',
            ],
            images: [
                { src: '/note.png',       alt: 'Splash Screen' },
                { src: '/note-page1.png', alt: 'Halaman Utama' },
                { src: '/note-page2.png', alt: 'Tambah Data' },
            ],
        },
    },
    {
        title: 'Klinik App',
        description: 'Assignment Mobile Programming. Aplikasi manajemen klinik sederhana berbasis Kotlin.',
        tech: ['Kotlin'],
        type: 'Mobile',
        image: '/care4.jpg',
        link: 'https://github.com/Nashwahrz/Klinik.Apps',
        details: {
            features: [
                'Tampilan List Data',
                'Tampilan Detail',
            ],
            images: [
                { src: '/care4.jpg', alt: 'Splash Screen' },
                { src: '/care3.jpg', alt: 'Login' },
                { src: '/care1.jpg', alt: 'List' },
                { src: '/care.jpg',  alt: 'Detail' },
            ],
        },
    },
];

const typeFilters = ['Semua', 'Web', 'Mobile', 'Desktop'];

const typeColors = {
    Web:     { bg: 'rgba(0,180,216,0.1)',   border: 'rgba(0,180,216,0.3)',   text: '#00b4d8'   },
    Mobile:  { bg: 'rgba(255,214,10,0.1)',  border: 'rgba(255,214,10,0.3)',  text: '#ffd60a'   },
    Desktop: { bg: 'rgba(168,120,255,0.1)', border: 'rgba(168,120,255,0.3)', text: '#a878ff'   },
};

const TypeIcon = ({ type, size = 14 }) => {
    if (type === 'Mobile')  return <Smartphone size={size} />;
    if (type === 'Desktop') return <Monitor size={size} />;
    return <Globe size={size} />;
};

// ---- MODAL ----
function ProjectModal({ project, onClose }) {
    const isLink = project.link && project.link !== 'Not Found';
    const isGH   = isLink && project.link.includes('github');
    const tc      = typeColors[project.type] || typeColors.Web;

    // Close on ESC
    React.useEffect(() => {
        const handler = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    return (
        <div
            onClick={onClose}
            style={{
                position: 'fixed', inset: 0,
                background: 'rgba(5,12,24,0.92)',
                backdropFilter: 'blur(8px)',
                zIndex: 2000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(12px, 3vw, 24px)',
                overflowY: 'auto',
            }}
        >
            <div
                onClick={e => e.stopPropagation()}
                style={{
                    background: '#0d1f3c',
                    border: `1px solid ${tc.border}`,
                    borderRadius: '20px',
                    maxWidth: '820px',
                    width: '100%',
                    maxHeight: '92vh',
                    overflowY: 'auto',
                    padding: 'clamp(20px, 4vw, 40px)',
                    position: 'relative',
                    boxShadow: `0 30px 80px rgba(0,0,0,0.6), 0 0 40px ${tc.text}20`,
                    animation: 'modalIn 0.3s ease',
                }}
            >
                <style>{`
                    @keyframes modalIn {
                        from { opacity: 0; transform: scale(0.94) translateY(20px); }
                        to   { opacity: 1; transform: scale(1) translateY(0); }
                    }
                    .modal-img-card {
                        background: rgba(10,22,40,0.8);
                        border: 1px solid rgba(0,180,216,0.12);
                        border-radius: 10px;
                        overflow: hidden;
                        transition: all 0.3s ease;
                    }
                    .modal-img-card:hover {
                        border-color: rgba(0,180,216,0.4);
                        transform: translateY(-4px);
                    }
                    .feature-item {
                        display: flex; align-items: flex-start; gap: 10px;
                        padding: 12px 16px;
                        background: rgba(0,180,216,0.05);
                        border: 1px solid rgba(0,180,216,0.12);
                        border-radius: 10px;
                        margin-bottom: 8px;
                        transition: all 0.2s ease;
                    }
                    .feature-item:hover {
                        background: rgba(0,180,216,0.1);
                        border-color: rgba(0,180,216,0.3);
                        transform: translateX(4px);
                    }
                `}</style>

                {/* Close button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute', top: '16px', right: '16px',
                        width: '36px', height: '36px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: '#a8c8e8',
                        cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.2s ease',
                        fontFamily: 'inherit',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#e74c3c20'; e.currentTarget.style.borderColor = '#e74c3c'; e.currentTarget.style.color = '#e74c3c'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#a8c8e8'; }}
                >
                    <X size={18} />
                </button>

                {/* Header */}
                <div style={{ marginBottom: '24px', paddingRight: '40px' }}>
                    <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                        padding: '4px 12px', borderRadius: '50px', marginBottom: '12px',
                        fontSize: '0.75rem', fontWeight: '700',
                        background: tc.bg, border: `1px solid ${tc.border}`, color: tc.text,
                    }}>
                        <TypeIcon type={project.type} size={11} /> {project.type}
                    </span>
                    <h2 style={{ color: '#e8f4fd', fontSize: 'clamp(1.2rem, 4vw, 1.7rem)', fontWeight: '800', marginBottom: '10px' }}>
                        {project.title}
                    </h2>
                    <p style={{ color: '#6b8cae', fontSize: '0.9rem', lineHeight: 1.7, borderBottom: '1px solid rgba(0,180,216,0.12)', paddingBottom: '20px' }}>
                        {project.description}
                    </p>
                </div>

                {/* Gallery */}
                <h3 style={{ color: '#00b4d8', fontSize: '1rem', fontWeight: '700', marginBottom: '14px' }}>
                    📸 Galeri Proyek
                </h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(110px, 22%, 200px), 1fr))',
                    gap: '10px',
                    marginBottom: '28px',
                }}>
                    {project.details.images.map((img, i) => (
                        <div key={i} className="modal-img-card">
                            <img
                                src={img.src} alt={img.alt}
                                style={{ width: '100%', height: 'clamp(100px, 18vw, 180px)', objectFit: 'cover', display: 'block' }}
                            />
                            <p style={{ fontSize: '0.72rem', color: '#6b8cae', padding: '6px 8px', textAlign: 'center', background: 'rgba(0,180,216,0.05)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {img.alt}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Features */}
                <h3 style={{ color: '#ffd60a', fontSize: '1rem', fontWeight: '700', marginBottom: '14px' }}>
                    ✅ Fitur Utama
                </h3>
                <div>
                    {project.details.features.map((f, i) => (
                        <div key={i} className="feature-item">
                            <CheckCircle size={16} color="#00b4d8" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span style={{ color: '#a8c8e8', fontSize: '0.9rem', lineHeight: 1.5 }}>{f}</span>
                        </div>
                    ))}
                </div>

                {/* Tech badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(0,180,216,0.1)' }}>
                    {project.tech.map((t, i) => (
                        <span key={i} className="tech-badge">{t}</span>
                    ))}
                </div>

                {/* Link button */}
                {isLink && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold"
                        style={{ marginTop: '24px', display: 'inline-flex' }}
                    >
                        {isGH ? <><Github size={16} /> Lihat di GitHub</> : <><ExternalLink size={16} /> Kunjungi Website</>}
                    </a>
                )}
            </div>
        </div>
    );
}

// ---- CARD ----
function ProjectCard({ project, onClick, index }) {
    const [hovered, setHovered] = React.useState(false);
    const tc = typeColors[project.type] || typeColors.Web;
    const isLink = project.link && project.link !== 'Not Found';

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onClick}
            style={{
                background: hovered ? '#0d1f3c' : 'var(--bg-card)',
                border: `1px solid ${hovered ? tc.border : 'rgba(0,180,216,0.1)'}`,
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
                transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hovered ? `0 20px 50px rgba(0,0,0,0.4), 0 0 20px ${tc.text}20` : '0 4px 16px rgba(0,0,0,0.2)',
                display: 'flex',
                flexDirection: 'column',
                opacity: 0,
                animation: 'cardFadeIn 0.5s ease forwards',
                animationDelay: `${index * 0.1}s`,
            }}
        >
            {/* Image */}
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9' }}>
                <img
                    src={project.image}
                    alt={project.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s ease',
                        transform: hovered ? 'scale(1.07)' : 'scale(1)',
                    }}
                />
                {/* Overlay */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: hovered
                        ? `linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.5) 60%, transparent 100%)`
                        : `linear-gradient(to top, rgba(10,22,40,0.8) 0%, transparent 60%)`,
                    transition: 'all 0.35s ease',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '16px',
                }}>
                    {hovered && (
                        <span style={{
                            fontSize: '0.82rem', fontWeight: '700', color: tc.text,
                            letterSpacing: '0.5px',
                        }}>
                            Klik untuk detail →
                        </span>
                    )}
                </div>
                {/* Type badge */}
                <span style={{
                    position: 'absolute', top: '12px', right: '12px',
                    display: 'inline-flex', alignItems: 'center', gap: '4px',
                    padding: '4px 10px', borderRadius: '50px',
                    fontSize: '0.72rem', fontWeight: '700',
                    background: 'rgba(10,22,40,0.85)',
                    border: `1px solid ${tc.border}`,
                    color: tc.text,
                    backdropFilter: 'blur(4px)',
                }}>
                    <TypeIcon type={project.type} size={11} /> {project.type}
                </span>
            </div>

            {/* Content */}
            <div style={{ padding: 'clamp(14px, 2.5vw, 20px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{
                    fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                    transition: 'color 0.3s ease',
                    color: hovered ? tc.text : '#e8f4fd',
                }}>
                    {project.title}
                </h3>

                <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.84rem',
                    lineHeight: 1.6,
                    flex: 1,
                    marginBottom: '14px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }}>
                    {project.description}
                </p>

                {/* Tech */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                    {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} style={{
                            padding: '2px 9px', borderRadius: '50px',
                            fontSize: '0.72rem', fontWeight: '600',
                            background: `${tc.text}12`, color: tc.text,
                            border: `1px solid ${tc.text}30`,
                        }}>
                            {t}
                        </span>
                    ))}
                    {project.tech.length > 3 && (
                        <span style={{ padding: '2px 9px', borderRadius: '50px', fontSize: '0.72rem', color: '#6b8cae', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                            +{project.tech.length - 3}
                        </span>
                    )}
                </div>

                {/* Link */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {isLink ? (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: tc.text, fontSize: '0.8rem', fontWeight: '600' }}>
                            {project.link.includes('github') ? <Github size={13} /> : <ExternalLink size={13} />}
                            {project.link.includes('github') ? 'GitHub' : 'Live Demo'}
                        </span>
                    ) : (
                        <span style={{ color: '#4a6585', fontSize: '0.8rem' }}>Private Project</span>
                    )}
                </div>
            </div>
        </div>
    );
}

// ---- MAIN COMPONENT ----
function Projects() {
    const [activeType, setActiveType] = React.useState('Semua');
    const [modalProject, setModalProject] = React.useState(null);

    const filtered = activeType === 'Semua'
        ? projectList
        : projectList.filter(p => p.type === activeType);

    return (
        <section
            id="projects"
            className="section"
            style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0d1f3c 100%)' }}
        >
            {/* BG Blobs */}
            <div style={{
                position: 'absolute', width: '450px', height: '450px',
                background: 'radial-gradient(circle, rgba(0,119,182,0.2) 0%, transparent 70%)',
                borderRadius: '50%', top: '-80px', right: '-80px', filter: 'blur(70px)', pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', width: '350px', height: '350px',
                background: 'radial-gradient(circle, rgba(255,214,10,0.07) 0%, transparent 70%)',
                borderRadius: '50%', bottom: '10%', left: '-60px', filter: 'blur(60px)', pointerEvents: 'none',
            }} />

            <style>{`
                @keyframes cardFadeIn {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vh, 56px)' }}>
                    <div className="section-label"><FolderOpen size={12} /> Proyek</div>
                    <h2 className="section-title">
                        Karya <span>Terbaik Saya</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
                        Kumpulan proyek yang telah saya kerjakan selama perjalanan belajar dan berkarir.
                    </p>

                    {/* Filter */}
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {typeFilters.map(f => {
                            const tc = f === 'Semua' ? null : typeColors[f];
                            const active = activeType === f;
                            return (
                                <button
                                    key={f}
                                    onClick={() => setActiveType(f)}
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                                        padding: '8px 20px', borderRadius: '50px',
                                        border: active
                                            ? `1px solid ${tc ? tc.border : 'rgba(255,214,10,0.5)'}`
                                            : '1px solid rgba(0,180,216,0.15)',
                                        background: active
                                            ? (tc ? tc.bg : 'rgba(255,214,10,0.1)')
                                            : 'transparent',
                                        color: active
                                            ? (tc ? tc.text : '#ffd60a')
                                            : '#6b8cae',
                                        fontFamily: 'var(--font-main)',
                                        fontWeight: '600',
                                        fontSize: '0.85rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    {f !== 'Semua' && <TypeIcon type={f} size={13} />}
                                    {f}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(260px, 32%, 380px), 1fr))',
                    gap: 'clamp(14px, 2.5vw, 24px)',
                }}>
                    {filtered.map((project, i) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={i}
                            onClick={() => setModalProject(project)}
                        />
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '60px 0', color: '#6b8cae' }}>
                        <p style={{ fontSize: '2rem', marginBottom: '12px' }}>🔍</p>
                        <p>Tidak ada proyek untuk kategori ini.</p>
                    </div>
                )}
            </div>

            {/* Modal */}
            {modalProject && (
                <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
            )}
        </section>
    );
}

export default Projects;