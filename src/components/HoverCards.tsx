import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaFolderOpen, FaTrophy, FaGraduationCap, FaEnvelope, FaUser } from "react-icons/fa";

const cards = [
    {
        title: "Home",
        description: "Welcome to my portfolio homepage! Discover my journey and passion for technology.",
        icon: "/favicon.ico",
        headerIcon: <FaHome className="inline-block mb-1 mr-1" />,
        href: "/",
        color: "from-blue-500 to-purple-600"
    },
    {
        title: "About",
        description: "Learn more about my background, skills, and what drives me in the tech world.",
        icon: "/new-avatar.JPG",
        headerIcon: <FaUser className="inline-block mb-1 mr-1" />,
        href: "/#about",
        color: "from-green-500 to-teal-600"
    },
    {
        title: "Projects",
        description: "Explore my latest projects, case studies, and innovative solutions.",
        icon: "/light-theme-image.png",
        headerIcon: <FaFolderOpen className="inline-block mb-1 mr-1" />,
        href: "/projects",
        color: "from-orange-500 to-red-600"
    },
    {
        title: "Achievements",
        description: "Check out my awards, recognitions, and professional accomplishments.",
        icon: "/dark-theme-image.png",
        headerIcon: <FaTrophy className="inline-block mb-1 mr-1" />,
        href: "/achievements",
        color: "from-yellow-500 to-orange-600"
    },
    {
        title: "Education & Certifications",
        description: "View my academic background and professional certifications.",
        icon: "/favicon.ico",
        headerIcon: <FaGraduationCap className="inline-block mb-1 mr-1" />,
        href: "/education-certifications",
        color: "from-purple-500 to-pink-600"
    },
    {
        title: "Contact",
        description: "Get in touch with me for collaborations, opportunities, or just to say hello!",
        icon: "/light-theme-image.png",
        headerIcon: <FaEnvelope className="inline-block mb-1 mr-1" />,
        href: "/contact",
        color: "from-indigo-500 to-blue-600"
    },
];

// Glassmorphic style
const glassStyle = {
    background: "rgba(255,255,255,0.15)",
    boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderRadius: "1rem",
    border: "1px solid rgba(255,255,255,0.25)",
};

export default function HoverCards() {
    return (
        <section className="max-w-7xl mx-auto mt-12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, idx) => (
                    <Link href={card.href} key={card.title}>
                        <div
                            style={glassStyle}
                            className="p-6 transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col items-center text-center h-full group"
                        >
                            <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <div className="text-white text-2xl">
                                    {card.headerIcon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 flex items-center justify-center text-white">
                                {card.title}
                            </h3>
                            <p className="text-gray-200 text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
} 