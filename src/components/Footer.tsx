"use client";

import React, { useEffect, useState } from 'react';

export default function Footer() {
    const [atBottom, setAtBottom] = useState(true);
    const [hoveringBottom, setHoveringBottom] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setAtBottom(window.innerHeight + window.scrollY >= document.body.offsetHeight - 10);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setHoveringBottom(window.innerHeight - e.clientY < 60);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        setVisible(atBottom || hoveringBottom);
    }, [atBottom, hoveringBottom]);

    return (
        <footer
            className={`${visible ? 'show-bar' : 'hide-footer'}`}
            style={{ willChange: 'transform' }}
        >
            <p>&copy; 2025 Suriya. All Rights Reserved.</p>
        </footer>
    );
} 