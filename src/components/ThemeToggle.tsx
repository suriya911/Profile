'use client';

import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '@/lib/theme';
import { useEffect } from 'react';

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
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
        </button>
    );
} 