'use client';

import { useThemeStore } from '@/lib/theme';
import { useEffect } from 'react';
import Image from 'next/image';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useThemeStore();

    useEffect(() => {
        if (theme === 'light') {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    }, [theme]);

    return (
        <button
            onClick={toggleTheme}
            className="theme-btn"
            title="Toggle Theme"
        >
            <Image
                src={theme === 'light' ? '/dark-theme-image.png' : '/light-theme-image.png'}
                alt={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                width={30}
                height={30}
                className="theme-icon"
            />
        </button>
    );
} 