import React from 'react';

export default function ContactSection() {
    return (
        <section className="card" style={{ width: '100%', padding: '2.5rem 2rem', margin: '2rem', boxShadow: 'var(--shadow-light)', borderRadius: 'var(--border-radius)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--card-border-light)' }}>
            <h2>Contact</h2>
            <p>This is a placeholder for the Contact section. Add your email, phone, or a contact form here.</p>
        </section>
    );
} 