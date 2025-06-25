import React from "react";
import Image from "next/image";

const skills = [
    "PyTorch",
    "TensorFlow",
    "LLMs/Transformers",
    "RAG",
    "Data Engineering",
    "MLOps",
    "Docker",
    "Kubernetes",
    "SQL/NoSQL",
    "Data Analytics",
    "Python",
    "Cloud (AWS/GCP)",
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

export default function About() {
    return (
        <section id="about" className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 mt-8" style={{ color: "var(--foreground)", ...glassStyle }}>
            {/* Content removed */}
        </section>
    );
} 