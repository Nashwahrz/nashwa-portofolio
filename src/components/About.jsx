// src/components/About.jsx
import React from 'react';
import { User, Target, Zap, BookOpen } from 'lucide-react';

const goals = [
    { icon: <Zap size={18} />, text: 'Menciptakan arsitektur Back-end yang stabil dan terukur.' },
    { icon: <Target size={18} />, text: 'Mengembangkan Front-end yang optimal dan user-friendly.' },
    { icon: <BookOpen size={18} />, text: 'Mengaplikasikan Web dan Mobile dalam solusi bisnis nyata.' },
    { icon: <User size={18} />, text: 'Beradaptasi cepat dengan teknologi dan framework baru.' },
];

function About() {
    return (
        <section
            id="about"
            className="section"
            style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0d1f3c 100%)' }}
        >
            {/* Background blobs */}
            <div style={{
                position: 'absolute', width: '400px', height: '400px',
                background: 'radial-gradient(circle, rgba(0,119,182,0.18) 0%, transparent 70%)',
                borderRadius: '50%', top: '10%', right: '-80px', filter: 'blur(60px)', pointerEvents: 'none',
            }} />

            <style>{`
                @keyframes aboutFadeUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .about-anim { opacity: 0; }
                .about-anim.visible { animation: aboutFadeUp 0.6s ease-out forwards; }
                .about-anim:nth-child(2).visible { animation-delay: 0.15s; }

                .goal-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 14px;
                    padding: 16px;
                    background: rgba(17,34,64,0.6);
                    border: 1px solid rgba(0,180,216,0.12);
                    border-radius: 12px;
                    transition: all 0.3s ease;
                    margin-bottom: 12px;
                }
                .goal-item:hover {
                    border-color: rgba(255,214,10,0.3);
                    background: rgba(17,34,64,0.9);
                    transform: translateX(6px);
                }
                .goal-icon {
                    width: 36px; height: 36px;
                    border-radius: 8px;
                    background: rgba(255,214,10,0.12);
                    border: 1px solid rgba(255,214,10,0.25);
                    display: flex; align-items: center; justify-content: center;
                    color: var(--color-gold);
                    flex-shrink: 0;
                }

                .info-chip {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    background: rgba(0,180,216,0.08);
                    border: 1px solid rgba(0,180,216,0.2);
                    border-radius: 50px;
                    font-size: 0.85rem;
                    color: var(--color-teal);
                    font-weight: 500;
                    margin: 4px;
                }
            `}</style>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vh, 64px)' }}>
                    <div className="section-label"><User size={12} /> Tentang Saya</div>
                    <h2 className="section-title">
                        Mengenal <span>Lebih Dekat</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Perjalanan saya sebagai mahasiswa Teknologi Informasi yang passionate di bidang pengembangan.
                    </p>
                </div>

                {/* Two-column layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'clamp(24px, 4vw, 48px)',
                    alignItems: 'start',
                }}>
                    {/* Left: Biography */}
                    <div>
                        <h3 style={{
                            fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
                            fontWeight: '700',
                            color: 'var(--color-gold)',
                            marginBottom: '20px',
                        }}>
                            Transformasi Kreativitas<br />menjadi Kode Fungsional
                        </h3>

                        <div style={{
                            background: 'rgba(17,34,64,0.6)',
                            border: '1px solid rgba(0,180,216,0.15)',
                            borderLeft: '4px solid var(--color-teal)',
                            borderRadius: '12px',
                            padding: '24px',
                            marginBottom: '20px',
                            lineHeight: 1.8,
                            color: 'var(--text-secondary)',
                            fontSize: '0.97rem',
                        }}>
                            Halo! Saya <strong style={{ color: 'var(--text-primary)' }}>Nashwa Harzathi Rahma</strong>,
                            seorang mahasiswa semester 5{' '}
                            <span style={{ color: 'var(--color-teal)', fontWeight: 600 }}>Politeknik Negeri Padang</span>,
                            jurusan Teknologi Informasi, Prodi D3 Manajemen Informatika.
                        </div>

                        <div style={{
                            background: 'rgba(17,34,64,0.6)',
                            border: '1px solid rgba(0,180,216,0.15)',
                            borderLeft: '4px solid var(--color-gold)',
                            borderRadius: '12px',
                            padding: '24px',
                            marginBottom: '28px',
                            lineHeight: 1.8,
                            color: 'var(--text-secondary)',
                            fontSize: '0.97rem',
                        }}>
                            Saya memulai perjalanan dengan{' '}
                            <span style={{ color: 'var(--color-teal)', fontWeight: 600 }}>HTML, CSS, JavaScript</span>.
                            Kini berfokus sebagai <strong style={{ color: 'var(--text-primary)' }}>Programmer</strong>{' '}
                            yang menguasai pembangunan antarmuka, logika bisnis, hingga implementasi basis data untuk
                            aplikasi <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>Web dan Mobile</span>.
                        </div>

                        {/* Info chips */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0' }}>
                            {['Semester 5', 'D3 Manajemen Informatika', 'Politeknik Negeri Padang', 'Padang, Indonesia'].map((info, i) => (
                                <span key={i} className="info-chip">{info}</span>
                            ))}
                        </div>
                    </div>

                    {/* Right: Goals */}
                    <div>
                        <h3 style={{
                            fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
                            fontWeight: '700',
                            color: 'var(--text-primary)',
                            marginBottom: '24px',
                        }}>
                            🎯 Fokus & Target Karir
                        </h3>

                        {goals.map((goal, i) => (
                            <div key={i} className="goal-item">
                                <div className="goal-icon">{goal.icon}</div>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                                    {goal.text}
                                </p>
                            </div>
                        ))}

                        {/* Rocket card */}
                        <div style={{
                            marginTop: '24px',
                            padding: '24px',
                            background: 'linear-gradient(135deg, rgba(255,214,10,0.08), rgba(0,180,216,0.08))',
                            border: '1px solid rgba(255,214,10,0.2)',
                            borderRadius: '14px',
                            textAlign: 'center',
                        }}>
                            <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🚀</div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                                Antusias dengan tantangan baru dan selalu siap menciptakan solusi digital yang{' '}
                                <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>efisien & inovatif</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;