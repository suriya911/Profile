import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaMapMarkerAlt, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import TypingEffect from './TypingEffect';
import Image from 'next/image';

export default function HomeSection() {
    return (
        <section className="card" style={{ width: '100%', maxWidth: 1200, padding: '2.5rem 2rem', margin: '2rem auto', boxShadow: 'var(--shadow-light)', borderRadius: 'var(--border-radius)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--card-border-light)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
            {/* Left Side */}
            <div style={{ flex: 1, minWidth: 320 }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{ background: '#4fd1c5', color: '#fff', padding: '0.5rem 1.5rem', borderRadius: 24, fontWeight: 600, fontSize: '1.1rem', display: 'inline-block', marginBottom: 16 }}>
                        Hello I&apos;m
                    </span>
                </div>
                <h1 style={{ fontWeight: 800, fontSize: '3rem', margin: 0, lineHeight: 1.1 }}>Suriya Chellappan</h1>
                <div style={{ fontWeight: 700, fontSize: '2.2rem', margin: '0.5rem 0 1.5rem 0', color: 'var(--primary-btn-light)', minHeight: 40 }}>
                    <TypingEffect roles={["AI/ML Engineer", "Cloud Engineer", "Software Developer", "Data Scientist"]} />
                </div>
                <div style={{ marginBottom: 12, color: 'var(--secondary-text-light)', fontSize: '1.1rem' }}>
                    <a href="mailto:suriya911@hotmail.com" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginBottom: 4 }}>
                        <FaEnvelope style={{ marginRight: 8 }} /> suriya911@hotmail.com
                    </a>
                    <a href="tel:+14084554739" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginBottom: 4 }}>
                        <FaPhone style={{ marginRight: 8 }} /> +1 (408) 455-4739
                    </a>
                    <a href="https://www.google.com/maps/search/?api=1&query=California,USA" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
                        <FaMapMarkerAlt style={{ marginRight: 8 }} /> California, USA
                    </a>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', margin: '1.5rem 0 0 0', fontSize: '2rem', flexWrap: 'wrap' }}>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" title="Twitter" style={{ color: '#1da1f2' }}><FaTwitter /></a>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" title="GitHub" style={{ color: 'var(--primary-btn-light)' }}><FaGithub /></a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ color: 'var(--secondary-btn-light)' }}><FaLinkedin /></a>
                    <a href="https://wa.me/14084554739" target="_blank" rel="noopener noreferrer" title="WhatsApp" style={{ color: '#25d366' }}><FaWhatsapp /></a>
                    <a href="https://yourblog.com" target="_blank" rel="noopener noreferrer" title="Blog" style={{ color: '#fdcb6e' }}><HiOutlineLightBulb /></a>
                </div>
            </div>
            {/* Right Side */}
            <div style={{ flex: 1, minWidth: 280, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 260, height: 260, borderRadius: '50%', overflow: 'hidden', border: '10px solid rgba(0,0,0,0.15)', boxShadow: '0 4px 32px 0 rgba(0,0,0,0.12)' }}>
                    <Image
                        src="/profile.JPG"
                        alt="Suriya Avatar"
                        width={260}
                        height={260}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        priority
                    />
                </div>
                <a
                    href="/resume.pdf"
                    download
                    className="resume-btn"
                >
                    <FaFileAlt /> Download Resume
                </a>
            </div>
        </section>
    );
} 