'use client';

import Link from 'next/link';
import { useThemeStore } from '@/lib/theme';

interface LogoProps {
    text?: string;
    className?: string;
}

export default function Logo({ text = "Suriya", className = "" }: LogoProps) {
    const { theme } = useThemeStore();

    return (
        <Link href="/" className={`logo-container ${className}`}>
            <div
                className={`logo-text ${theme === 'light' ? 'light-theme-logo' : 'dark-theme-logo'}`}
                style={{ fontFamily: "'Marck Script', cursive" }}
            >
                {text}
            </div>
        </Link>
    );
} 