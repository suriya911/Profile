'use client';

import Link from 'next/link';
import { useThemeStore } from '@/lib/theme';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    const { theme } = useThemeStore();

    return (
        <header>
            <div className="logo-container">
                <div className="logo-text">Suriya</div>
            </div>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/achievements">Achievements</Link></li>
                    <li><Link href="/education-certifications">Education & Certifications</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
            <ThemeToggle />
        </header>
    );
} 