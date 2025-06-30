import React from 'react';

export default function ProjectsSection() {
    const projects = [
        {
            title: "AI-Powered Resume Parser",
            description: "Developed an intelligent resume parsing system using NLP and machine learning. Built with Python, FastAPI, and React. Features include automatic skill extraction, experience classification, and candidate matching.",
            technologies: ["Python", "FastAPI", "React", "NLP", "Machine Learning", "PostgreSQL"],
            github: "#",
            live: "#"
        },
        {
            title: "Cloud-Native E-commerce Platform",
            description: "Built a scalable e-commerce platform using microservices architecture. Implemented features like real-time inventory management, payment processing, and recommendation engine.",
            technologies: ["AWS", "Docker", "Node.js", "React", "MongoDB", "Redis"],
            github: "#",
            live: "#"
        },
        {
            title: "LLM-Powered Chatbot Assistant",
            description: "Created an intelligent chatbot using OpenAI's GPT models with custom fine-tuning. Integrated with vector database for context-aware responses and implemented RAG system for enhanced accuracy.",
            technologies: ["OpenAI API", "Python", "LangChain", "Vector Database", "FastAPI", "React"],
            github: "#",
            live: "#"
        },
        {
            title: "Real-time Data Analytics Dashboard",
            description: "Developed a comprehensive analytics dashboard for monitoring system performance and user behavior. Features real-time data visualization, automated reporting, and predictive analytics.",
            technologies: ["Python", "React", "D3.js", "Apache Kafka", "InfluxDB", "Docker"],
            github: "#",
            live: "#"
        }
    ];

    return (
        <section className="card" style={{ width: '100%', padding: '2.5rem 2rem', margin: '2rem', boxShadow: 'var(--shadow-light)', borderRadius: 'var(--border-radius)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--card-border-light)' }}>
            <h2>Featured Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
                {projects.map((project, index) => (
                    <div key={index} className="project-card" style={{
                        padding: '1.5rem',
                        backgroundColor: 'var(--card-bg-light)',
                        borderRadius: 'var(--border-radius)',
                        border: '1px solid var(--card-border-light)',
                        transition: 'transform 0.2s ease-in-out',
                        cursor: 'pointer'
                    }}>
                        <h3 style={{
                            marginBottom: '1rem',
                            color: 'var(--accent-color)',
                            fontSize: '1.2rem',
                            fontWeight: '600'
                        }}>
                            {project.title}
                        </h3>
                        <p style={{
                            marginBottom: '1rem',
                            lineHeight: '1.6',
                            color: 'var(--text-secondary)'
                        }}>
                            {project.description}
                        </p>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.5rem',
                            marginBottom: '1rem'
                        }}>
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} style={{
                                    padding: '0.3rem 0.6rem',
                                    backgroundColor: 'var(--accent-color)',
                                    color: 'white',
                                    borderRadius: '15px',
                                    fontSize: '0.75rem',
                                    fontWeight: '500'
                                }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href={project.github} style={{
                                padding: '0.5rem 1rem',
                                backgroundColor: 'var(--accent-color)',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: 'var(--border-radius)',
                                fontSize: '0.9rem',
                                fontWeight: '500'
                            }}>
                                GitHub
                            </a>
                            <a href={project.live} style={{
                                padding: '0.5rem 1rem',
                                backgroundColor: 'transparent',
                                color: 'var(--accent-color)',
                                textDecoration: 'none',
                                borderRadius: 'var(--border-radius)',
                                fontSize: '0.9rem',
                                fontWeight: '500',
                                border: '1px solid var(--accent-color)'
                            }}>
                                Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 