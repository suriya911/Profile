import React from 'react';

export default function SkillsSection() {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "HTML/CSS"]
        },
        {
            title: "AI/ML & Data Science",
            skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenAI API", "LangChain", "RAG Systems", "Vector Databases", "Fine-tuning LLMs"]
        },
        {
            title: "Cloud & DevOps",
            skills: ["AWS", "Google Cloud Platform", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Terraform", "Serverless Architecture"]
        },
        {
            title: "Web Development",
            skills: ["React", "Next.js", "Node.js", "Express.js", "REST APIs", "GraphQL", "MongoDB", "PostgreSQL", "Redis"]
        },
        {
            title: "Tools & Technologies",
            skills: ["Git", "VS Code", "Jupyter Notebooks", "Postman", "Docker Compose", "Nginx", "Linux", "Agile/Scrum"]
        }
    ];

    return (
        <section className="card" style={{ width: '100%', padding: '2.5rem 2rem', margin: '2rem', boxShadow: 'var(--shadow-light)', borderRadius: 'var(--border-radius)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--card-border-light)' }}>
            <h2>Technical Skills</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
                {skillCategories.map((category, index) => (
                    <div key={index} style={{
                        padding: '1.5rem',
                        backgroundColor: 'var(--card-bg-light)',
                        borderRadius: 'var(--border-radius)',
                        border: '1px solid var(--card-border-light)'
                    }}>
                        <h3 style={{
                            marginBottom: '1rem',
                            color: 'var(--accent-color)',
                            fontSize: '1.1rem',
                            fontWeight: '600'
                        }}>
                            {category.title}
                        </h3>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.5rem'
                        }}>
                            {category.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} style={{
                                    padding: '0.4rem 0.8rem',
                                    backgroundColor: 'var(--accent-color)',
                                    color: 'white',
                                    borderRadius: '20px',
                                    fontSize: '0.85rem',
                                    fontWeight: '500',
                                    display: 'inline-block'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 