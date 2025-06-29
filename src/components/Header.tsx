'use client';

import Link from 'next/link';
import { useThemeStore } from '@/lib/theme';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import { FaHome, FaUser, FaFolderOpen, FaTrophy, FaGraduationCap, FaEnvelope } from 'react-icons/fa';
import { useEffect } from 'react';

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

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('aos').then(AOS => {
                AOS.init();
            });
        }
    }, []);

    return (
        <header className="sticky top-0 z-50">
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