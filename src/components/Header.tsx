'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useThemeStore } from '@/lib/theme';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import { FaHome, FaUser, FaFolderOpen, FaTrophy, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

const navigationItems = [
    { name: 'Home', href: '/', icon: <FaHome /> },
    { name: 'About', href: '/#about', icon: <FaUser /> },
    { name: 'Projects', href: '/projects', icon: <FaFolderOpen /> },
    { name: 'Achievements', href: '/achievements', icon: <FaTrophy /> },
    { name: 'Education', href: '/education-certifications', icon: <FaGraduationCap /> },
    { name: 'Contact', href: '/contact', icon: <FaEnvelope /> },
];

export default function Header() {
    const { theme } = useThemeStore();
    const [atTop, setAtTop] = useState(true);
    const [hoveringTop, setHoveringTop] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setAtTop(window.scrollY === 0);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setHoveringTop(e.clientY < 60);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        setVisible(atTop || hoveringTop);
    }, [atTop, hoveringTop]);

    return (
        <header
            className={`${visible ? 'show-bar' : 'hide-bar'}`}
            style={{ willChange: 'transform' }}
        >
            <Logo />
            <nav className="hidden md:block">
                <ul className="flex space-x-6">
                    {navigationItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-125"
                            >
                                <span className="text-sm">{item.icon}</span>
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex items-center space-x-4">
                <ThemeToggle />
            </div>
        </header>
    );
} 