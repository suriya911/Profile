import React from "react";
import Image from "next/image";
import { FaHome, FaFolderOpen, FaTrophy } from "react-icons/fa";

const cards = [
    {
        title: "Home",
        description: "Welcome to my portfolio homepage!",
        icon: "/favicon.ico",
        headerIcon: <FaHome className="inline-block mb-1 mr-1" />,
    },
    {
        title: "Projects",
        description: "Explore my latest projects and case studies.",
        icon: "/light-theme-image.png",
        headerIcon: <FaFolderOpen className="inline-block mb-1 mr-1" />,
    },
    {
        title: "Achievements",
        description: "Check out my awards and recognitions.",
        icon: "/dark-theme-image.png",
        headerIcon: <FaTrophy className="inline-block mb-1 mr-1" />,
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
        <section className="max-w-5xl mx-auto mt-12 flex flex-col md:flex-row gap-8 justify-center items-center" style={{ color: "var(--foreground)" }}>
            {cards.map((card, idx) => (
                <div
                    key={card.title}
                    style={glassStyle}
                    className="flex-1 p-8 transition-transform duration-200 hover:scale-105 cursor-pointer flex flex-col items-center text-center"
                >
                    <Image src={card.icon} alt={card.title + ' icon'} width={48} height={48} className="mb-4" />
                    <h3 className="mt-2 text-xl font-bold mb-2 flex items-center justify-center">
                        {card.headerIcon} {card.title}
                    </h3>
                    <p>{card.description}</p>
                </div>
            ))}
        </section>
    );
} 