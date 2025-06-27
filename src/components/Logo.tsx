'use client';

import Link from 'next/link';
import { useEffect } from 'react';

interface LogoProps {
    text?: string;
    className?: string;
}

export default function Logo({ text = "Suriya", className = "" }: LogoProps) {
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <Link href="/" className={`logo-container ${className}`}>
            <div className="logo-text">{text}</div>
        </Link>
    );
} 