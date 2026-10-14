// src/components/Skills.jsx
import React from 'react';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiGit, DiBootstrap, DiLaravel, DiAndroid, DiApple } from 'react-icons/di';
import { Cpu } from 'lucide-react';

const skillList = [
    { name: 'HTML5',             color: '#E34F26', icon: <DiHtml5 />,        level: 90, category: 'Frontend' },
    { name: 'CSS3',              color: '#1572B6', icon: <DiCss3 />,         level: 85, category: 'Frontend' },
    { name: 'JavaScript',        color: '#F7DF1E', icon: <DiJavascript1 />,  level: 80, category: 'Frontend' },
    { name: 'React.js',          color: '#61DAFB', icon: <DiReact />,        level: 75, category: 'Frontend' },
    { name: 'Bootstrap',         color: '#7952B3', icon: <DiBootstrap />,    level: 85, category: 'Frontend' },
    { name: 'Laravel',           color: '#FF2D20', icon: <DiLaravel />,      level: 75, category: 'Backend'  },
    { name: 'Git & GitHub',      color: '#F05032', icon: <DiGit />,          level: 80, category: 'Tools'    },
    { name: 'Kotlin',            color: '#7F52FF', icon: <DiAndroid />,      level: 65, category: 'Mobile'   },
    { name: 'Flutter',           color: '#02569B', icon: <DiApple />,        level: 70, category: 'Mobile'   },
];

const categories = ['Semua', 'Frontend', 'Backend', 'Mobile', 'Tools'];

function SkillCard({ skill, index }) {
    const [hovered, setHovered] = React.useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: hovered ? 'rgba(22,50,96,0.9)' : 'var(--bg-card)',
                border: `1px solid ${hovered ? skill.color + '60' : 'rgba(0,180,216,0.12)'}`,
                borderRadius: '16px',
                padding: '24px 20px',
                textAlign: 'center',
                cursor: 'default',
                transition: 'all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
                transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hovered ? `0 20px 40px ${skill.color}25` : 'none',
                position: 'relative',
                overflow: 'hidden',
                animationDelay: `${index * 0.07}s`,
            }}
        >
            {/* Glow top bar */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
                opacity: hovered ? 1 : 0,
                transition: 'opacity 0.35s ease',
            }} />

            {/* Icon */}
            <div style={{
                fontSize: '48px',
                color: skill.color,
                lineHeight: 1,
                marginBottom: '12px',
                transition: 'transform 0.35s ease',
                transform: hovered ? 'scale(1.1)' : 'scale(1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {skill.icon}
            </div>

            {/* Name */}
            <p style={{
                fontWeight: '700',
                fontSize: '0.95rem',
                color: hovered ? 'var(--text-primary)' : 'var(--text-secondary)',
                marginBottom: '12px',
                transition: 'color 0.3s ease',
            }}>
                {skill.name}
            </p>

            {/* Progress bar */}
            <div style={{
                height: '4px',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '2px',
                overflow: 'hidden',
                marginBottom: '6px',
            }}>
                <div style={{
                    height: '100%',
                    width: hovered ? `${skill.level}%` : '0%',
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}90)`,
                    borderRadius: '2px',
                    transition: 'width 0.6s cubic-bezier(0.25,0.46,0.45,0.94)',
                }} />
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'right' }}>
                {skill.level}%
            </p>

            {/* Category badge */}
            <span style={{
                position: 'absolute', top: '12px', right: '12px',
                fontSize: '0.65rem', fontWeight: '700', letterSpacing: '1px',
                padding: '3px 8px', borderRadius: '50px',
                background: `${skill.color}18`,
                color: skill.color,
                border: `1px solid ${skill.color}40`,
                opacity: hovered ? 1 : 0.5,
                transition: 'opacity 0.3s ease',
            }}>
                {skill.category}
            </span>
        </div>
    );
}

function Skills() {
    const [activeFilter, setActiveFilter] = React.useState('Semua');

    const filtered = activeFilter === 'Semua'
        ? skillList
        : skillList.filter(s => s.category === activeFilter);

    return (
        <section
            id="skills"
            className="section"
            style={{ background: '#0a1628' }}
        >
            {/* Blobs */}
            <div style={{
                position: 'absolute', width: '350px', height: '350px',
                background: 'radial-gradient(circle, rgba(0,119,182,0.2) 0%, transparent 70%)',
                borderRadius: '50%', bottom: '5%', right: '-50px', filter: 'blur(60px)', pointerEvents: 'none',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vh, 56px)' }}>
                    <div className="section-label"><Cpu size={12} /> Keahlian</div>
                    <h2 className="section-title">
                        Teknologi yang <span>Saya Kuasai</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
                        Stack dan tools yang saya gunakan untuk membangun solusi digital.
                    </p>

                    {/* Filter buttons */}
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                style={{
                                    padding: '8px 20px',
                                    borderRadius: '50px',
                                    border: activeFilter === cat
                                        ? '1px solid var(--color-gold)'
                                        : '1px solid rgba(0,180,216,0.2)',
                                    background: activeFilter === cat
                                        ? 'rgba(255,214,10,0.12)'
                                        : 'transparent',
                                    color: activeFilter === cat ? 'var(--color-gold)' : 'var(--text-muted)',
                                    fontFamily: 'var(--font-main)',
                                    fontWeight: '600',
                                    fontSize: '0.85rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                    gap: 'clamp(12px, 2vw, 20px)',
                }}>
                    {filtered.map((skill, i) => (
                        <SkillCard key={skill.name} skill={skill} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;