'use client';

import { useThemeStore } from '@/lib/theme';
import { useEffect } from 'react';

interface ThemeProviderProps {
    children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const { theme } = useThemeStore();

    useEffect(() => {
        // Apply theme class to body element
        const body = document.body;

        // Remove existing theme classes
        body.classList.remove('light-mode', 'dark-mode');

        // Add current theme class
        if (theme === 'light') {
            body.classList.add('light-mode');
        } else {
            body.classList.add('dark-mode');
        }
    }, [theme]);

    return <>{children}</>;
} 