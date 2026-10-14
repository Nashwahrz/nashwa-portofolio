// src/components/Hero.jsx
import React from 'react';
import { ArrowRight, Download, Code2, Smartphone, Sparkles } from 'lucide-react';

function Hero() {
    const [imgLoaded, setImgLoaded] = React.useState(false);

    const stats = [
        { value: '3+', label: 'Tahun Belajar' },
        { value: '8+', label: 'Proyek Selesai' },
        { value: '5+', label: 'Teknologi' },
    ];

    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)',
                position: 'relative',
                overflow: 'hidden',
                padding: 'clamp(80px, 12vh, 120px) 0 clamp(60px, 8vh, 80px)',
            }}
        >
            {/* Animated background blobs */}
            <div style={{
                position: 'absolute', width: '500px', height: '500px',
                background: 'radial-gradient(circle, rgba(0,119,182,0.3) 0%, transparent 70%)',
                borderRadius: '50%', top: '-100px', right: '-100px', filter: 'blur(60px)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', width: '400px', height: '400px',
                background: 'radial-gradient(circle, rgba(230,190,0,0.12) 0%, transparent 70%)',
                borderRadius: '50%', bottom: '-80px', left: '-80px', filter: 'blur(60px)',
                pointerEvents: 'none',
            }} />

            {/* Grid pattern overlay */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: 'linear-gradient(rgba(0,180,216,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.03) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
            }} />

            <style>{`
                @keyframes heroFadeUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes heroFloat {
                    0%,100% { transform: translateY(0); }
                    50%      { transform: translateY(-14px); }
                }
                @keyframes heroPulse {
                    0%   { box-shadow: 0 0 0 0 rgba(0,180,216,0.5); }
                    70%  { box-shadow: 0 0 0 20px rgba(0,180,216,0); }
                    100% { box-shadow: 0 0 0 0 rgba(0,180,216,0); }
                }
                .hero-item { animation: heroFadeUp 0.7s ease-out forwards; opacity: 0; }
                .hero-item:nth-child(1) { animation-delay: 0.1s; }
                .hero-item:nth-child(2) { animation-delay: 0.25s; }
                .hero-item:nth-child(3) { animation-delay: 0.4s; }
                .hero-item:nth-child(4) { animation-delay: 0.55s; }
                .hero-item:nth-child(5) { animation-delay: 0.7s; }
                .hero-item:nth-child(6) { animation-delay: 0.85s; }
                .hero-photo-wrapper { animation: heroFloat 5s ease-in-out infinite; }
                .hero-photo-ring { animation: heroPulse 2.5s ease-out infinite; }
                .hero-stat-card {
                    background: rgba(17,34,64,0.8);
                    border: 1px solid rgba(0,180,216,0.18);
                    border-radius: 14px;
                    padding: 16px 24px;
                    text-align: center;
                    backdrop-filter: blur(8px);
                    transition: all 0.3s ease;
                    flex: 1;
                    min-width: 90px;
                }
                .hero-stat-card:hover {
                    border-color: rgba(255,214,10,0.4);
                    transform: translateY(-4px);
                }
            `}</style>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '24px',
                }}>

                    {/* Badge */}
                    <div className="hero-item section-label" style={{ marginBottom: 0 }}>
                        <Sparkles size={12} />
                        Web &amp; Mobile Developer
                    </div>

                    {/* Profile Photo */}
                    <div className="hero-item" style={{ position: 'relative', display: 'inline-flex', justifyContent: 'center' }}>
                        <div className="hero-photo-wrapper" style={{ position: 'relative', display: 'inline-block' }}>
                            {/* Outer decorative ring */}
                            <div style={{
                                position: 'absolute', inset: '-18px',
                                borderRadius: '50%',
                                border: '2px dashed rgba(255,214,10,0.3)',
                                animation: 'spin-slow 20s linear infinite',
                            }} />
                            {/* Glow ring */}
                            <div className="hero-photo-ring" style={{
                                position: 'absolute', inset: '-6px',
                                borderRadius: '50%',
                                border: '3px solid rgba(0,180,216,0.6)',
                            }} />
                            <img
                                src="/awa.png"
                                alt="Foto Profil Nashwa Harzathi Rahma"
                                onLoad={() => setImgLoaded(true)}
                                style={{
                                    width: 'clamp(140px, 22vw, 200px)',
                                    height: 'clamp(140px, 22vw, 200px)',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    objectPosition: 'top',
                                    border: '4px solid #0a1628',
                                    display: 'block',
                                    opacity: imgLoaded ? 1 : 0,
                                    transition: 'opacity 0.5s ease',
                                }}
                            />
                        </div>
                    </div>

                    {/* Name */}
                    <div className="hero-item">
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '6px', letterSpacing: '1px' }}>
                            Halo, Saya 👋
                        </p>
                        <h1 style={{
                            fontSize: 'clamp(2rem, 7vw, 4rem)',
                            fontWeight: '900',
                            lineHeight: 1.1,
                            color: 'var(--text-primary)',
                            letterSpacing: '-0.5px',
                        }}>
                            Nashwa{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, #ffd60a, #00b4d8)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>
                                Harzathi
                            </span>
                            <br />Rahma
                        </h1>
                    </div>

                    {/* Tagline chips */}
                    <div className="hero-item" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {[
                            { icon: <Code2 size={14} />, label: 'Web Developer' },
                            { icon: <Smartphone size={14} />, label: 'Mobile Developer' },
                        ].map((chip, i) => (
                            <span key={i} style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                padding: '8px 18px',
                                background: 'rgba(0,180,216,0.1)',
                                border: '1px solid rgba(0,180,216,0.3)',
                                borderRadius: '50px',
                                fontSize: '0.88rem',
                                fontWeight: '600',
                                color: 'var(--color-teal)',
                            }}>
                                {chip.icon} {chip.label}
                            </span>
                        ))}
                    </div>

                    {/* Motto */}
                    <p className="hero-item" style={{
                        color: 'var(--text-secondary)',
                        fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                        maxWidth: '520px',
                        lineHeight: 1.7,
                    }}>
                        Menciptakan pengalaman pengguna yang luar biasa melalui kode yang
                        bersih dan desain yang{' '}
                        <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>intuitif</span>.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-item" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <a href="#projects" className="btn-gold">
                            Lihat Proyek <ArrowRight size={18} />
                        </a>
                        <a href="/cv_nashwa.pdf" download className="btn-outline">
                            <Download size={18} /> Unduh CV
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="hero-item" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: '480px', marginTop: '8px' }}>
                        {stats.map((stat, i) => (
                            <div key={i} className="hero-stat-card">
                                <p style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '800', color: 'var(--color-gold)', lineHeight: 1 }}>
                                    {stat.value}
                                </p>
                                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px', fontWeight: 500 }}>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;