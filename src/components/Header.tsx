import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "#home", icon: "/favicon.ico" },
    { name: "Projects", href: "#projects", icon: "/light-theme-image.png" },
    { name: "Achievements", href: "#achievements", icon: "/dark-theme-image.png" },
    { name: "Education & Certifications", href: "#education", icon: "/new-avatar.JPG" },
    { name: "Contact", href: "#contact", icon: "/favicon.ico" },
];

export default function Header() {
    const [dark, setDark] = useState(false);

    // On mount, check localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setDark(savedTheme === "dark");
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        } else {
            // Use system preference
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setDark(prefersDark);
            document.documentElement.classList.toggle("dark", prefersDark);
        }
    }, []);

    // When dark changes, update html class and localStorage
    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <header
            style={{ background: "var(--header-footer-bg)", color: "var(--foreground)" }}
            className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 transition-colors duration-200"
        >
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <span className="text-3xl font-extrabold font-sans tracking-wide" style={{ fontFamily: 'cursive' }}>Suriya</span>
                <ul className="flex gap-8 text-base font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name} className="flex items-center gap-2">
                            <Image src={link.icon} alt={link.name + ' icon'} width={20} height={20} className="inline-block" />
                            <a href={link.href} className="transition-colors duration-200">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    aria-label="Toggle dark mode"
                    className="ml-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    onClick={() => setDark((d) => !d)}
                >
                    {/* Show moon in dark mode, sun in light mode */}
                    {dark ? <FaMoon className="text-white text-xl" /> : <FaSun className="text-yellow-400 text-xl" />}
                </button>
            </nav>
        </header>
    );
} 