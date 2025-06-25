import React from "react";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
    {
        title: "Machine Learning Researcher",
        company: "SJSU Research Foundation",
        date: "Jun 2024 - Present",
    },
    {
        title: "Software Engineer Intern",
        company: "",
        date: "May 2024 - Aug 2024",
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

export default function Experience() {
    return (
        <section id="experience" className="max-w-5xl mx-auto mt-16" style={{ color: "var(--foreground)", ...glassStyle }}>
            <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
                <FaBriefcase className="inline-block mb-1" /> Professional Experience
            </h2>
            <div className="relative border-l-2 border-red-600 pl-8">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="mb-12 relative">
                        <div className="absolute -left-5 top-1 w-3 h-3 bg-red-600 rounded-full border-2 border-white"></div>
                        <div className="flex flex-col gap-1">
                            <span className="text-sm">{exp.date}</span>
                            <span className="text-lg font-semibold">{exp.title}</span>
                            <span>{exp.company}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 