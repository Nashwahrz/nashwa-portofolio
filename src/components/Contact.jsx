// src/components/Contact.jsx
import React from 'react';
import { Mail, Github, MessageCircleMore, Instagram, Download, Send } from 'lucide-react';

const contacts = [
    {
        id: 'cv',
        icon: <Download size={22} />,
        label: 'Portofolio Dokumen',
        value: 'Unduh CV Saya',
        href: '/cv_nashwa.pdf',
        download: true,
        color: '#ffd60a',
    },
    {
        id: 'email',
        icon: <Mail size={22} />,
        label: 'Email',
        value: 'nashwaharzathi05@email.com',
        href: 'mailto:nashwaharzathi05@email.com',
        color: '#00b4d8',
    },
    {
        id: 'github',
        icon: <Github size={22} />,
        label: 'GitHub',
        value: 'github.com/Nashwahrz',
        href: 'https://github.com/Nashwahrz/',
        target: '_blank',
        color: '#a8c8e8',
    },
    {
        id: 'whatsapp',
        icon: <MessageCircleMore size={22} />,
        label: 'WhatsApp',
        value: '+6282383522629',
        href: 'https://wa.me/6282383522629',
        target: '_blank',
        color: '#25D366',
    },
    {
        id: 'instagram',
        icon: <Instagram size={22} />,
        label: 'Instagram',
        value: '@nsshw.z',
        href: 'https://www.instagram.com/nsshw.z',
        target: '_blank',
        color: '#E1306C',
    },
];

function ContactCard({ contact }) {
    const [hovered, setHovered] = React.useState(false);

    return (
        <a
            href={contact.href}
            download={contact.download || undefined}
            target={contact.target || undefined}
            rel={contact.target ? 'noopener noreferrer' : undefined}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: 'clamp(14px, 2.5vw, 20px)',
                background: hovered ? `rgba(${contact.color === '#ffd60a' ? '255,214,10' : '17,34,64'},0.9)` : 'var(--bg-card)',
                border: `1px solid ${hovered ? contact.color + '60' : 'rgba(0,180,216,0.12)'}`,
                borderRadius: '14px',
                textDecoration: 'none',
                transition: 'all 0.35s ease',
                transform: hovered ? 'translateX(8px)' : 'translateX(0)',
                boxShadow: hovered ? `0 12px 30px ${contact.color}20` : 'none',
                cursor: 'pointer',
            }}
        >
            {/* Icon circle */}
            <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: `${contact.color}15`,
                border: `1px solid ${contact.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: contact.color,
                flexShrink: 0,
                transition: 'all 0.3s ease',
                boxShadow: hovered ? `0 0 16px ${contact.color}30` : 'none',
            }}>
                {contact.icon}
            </div>

            {/* Text */}
            <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.78rem',
                    fontWeight: '500',
                    marginBottom: '3px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                }}>
                    {contact.label}
                </p>
                <p style={{
                    color: hovered ? contact.color : 'var(--text-primary)',
                    fontSize: 'clamp(0.82rem, 2vw, 0.95rem)',
                    fontWeight: '600',
                    transition: 'color 0.3s ease',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}>
                    {contact.value}
                </p>
            </div>

            {/* Arrow */}
            <Send size={16} style={{
                color: hovered ? contact.color : 'var(--text-muted)',
                transition: 'all 0.3s ease',
                transform: hovered ? 'translateX(3px)' : 'translateX(0)',
                opacity: hovered ? 1 : 0.4,
                flexShrink: 0,
            }} />
        </a>
    );
}

function Contact() {
    return (
        <section
            id="contact"
            className="section"
            style={{ background: '#0a1628' }}
        >
            {/* Blobs */}
            <div style={{
                position: 'absolute', width: '400px', height: '400px',
                background: 'radial-gradient(circle, rgba(0,119,182,0.2) 0%, transparent 70%)',
                borderRadius: '50%', top: '50%', left: '-100px',
                transform: 'translateY(-50%)', filter: 'blur(70px)', pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', width: '300px', height: '300px',
                background: 'radial-gradient(circle, rgba(255,214,10,0.08) 0%, transparent 70%)',
                borderRadius: '50%', bottom: '10%', right: '-60px', filter: 'blur(60px)', pointerEvents: 'none',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 6vh, 60px)' }}>
                    <div className="section-label"><Send size={12} /> Kontak</div>
                    <h2 className="section-title">
                        Hubungi <span>Saya</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Siap berkolaborasi! Jangan ragu untuk menghubungi saya melalui platform berikut.
                    </p>
                </div>

                {/* Contact grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 'clamp(10px, 2vw, 16px)',
                    maxWidth: '860px',
                    margin: '0 auto 48px',
                }}>
                    {contacts.map(contact => (
                        <ContactCard key={contact.id} contact={contact} />
                    ))}
                </div>

                {/* Footer note */}
                <div style={{
                    textAlign: 'center',
                    padding: '28px',
                    background: 'linear-gradient(135deg, rgba(0,180,216,0.06), rgba(255,214,10,0.06))',
                    border: '1px solid rgba(0,180,216,0.15)',
                    borderRadius: '16px',
                    maxWidth: '600px',
                    margin: '0 auto',
                }}>
                    <p style={{ fontSize: '1.5rem', marginBottom: '10px' }}>👩‍💻</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                        Terbuka untuk peluang{' '}
                        <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>freelance</span>,{' '}
                        <span style={{ color: 'var(--color-teal)', fontWeight: 600 }}>magang</span>, maupun{' '}
                        <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>kolaborasi proyek</span>.
                        Mari wujudkan ide brilian kita bersama!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;