import React from 'react';

export default function AboutSection() {
    return (
        <section className="card" style={{ width: '100%', padding: '2.5rem 2rem', margin: '2rem', boxShadow: 'var(--shadow-light)', borderRadius: 'var(--border-radius)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--card-border-light)' }}>
            <h2>About Me</h2>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div>
                    <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                        I am a passionate engineer and creator currently pursuing my Master's in <b>General Engineering</b> with a focus on <b>AI and Cloud Computing</b> at <b>San José State University</b>. With a strong foundation in computer science and hands-on experience in cutting-edge technologies, I specialize in building intelligent, scalable solutions that bridge the gap between artificial intelligence and real-world applications.
                    </p>

                    <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                        My journey in technology began with a Bachelor's degree in Computer Science, where I developed a deep understanding of software engineering principles and data structures. This foundation, combined with my current research in AI/ML and cloud infrastructure, has equipped me with a unique perspective on building next-generation applications.
                    </p>
                </div>

                <div>
                    <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem', fontSize: '1.2rem' }}>Core Expertise</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                        <div style={{
                            padding: '1rem',
                            backgroundColor: 'var(--card-bg-light)',
                            borderRadius: 'var(--border-radius)',
                            border: '1px solid var(--card-border-light)'
                        }}>
                            <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem', fontSize: '1rem' }}>🤖 AI/ML Development</h4>
                            <ul style={{ margin: '0', paddingLeft: '1rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
                                <li>Large Language Models & Fine-tuning</li>
                                <li>Vector Search & RAG Systems</li>
                                <li>Computer Vision & NLP</li>
                                <li>Agentic AI Frameworks</li>
                            </ul>
                        </div>

                        <div style={{
                            padding: '1rem',
                            backgroundColor: 'var(--card-bg-light)',
                            borderRadius: 'var(--border-radius)',
                            border: '1px solid var(--card-border-light)'
                        }}>
                            <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem', fontSize: '1rem' }}>☁️ Cloud & DevOps</h4>
                            <ul style={{ margin: '0', paddingLeft: '1rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
                                <li>AWS, GCP, Azure Services</li>
                                <li>Containerization & Orchestration</li>
                                <li>CI/CD Pipelines</li>
                                <li>Infrastructure as Code</li>
                            </ul>
                        </div>

                        <div style={{
                            padding: '1rem',
                            backgroundColor: 'var(--card-bg-light)',
                            borderRadius: 'var(--border-radius)',
                            border: '1px solid var(--card-border-light)'
                        }}>
                            <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem', fontSize: '1rem' }}>💻 Full-Stack Development</h4>
                            <ul style={{ margin: '0', paddingLeft: '1rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
                                <li>React, Next.js, Node.js</li>
                                <li>REST APIs & GraphQL</li>
                                <li>Database Design & Optimization</li>
                                <li>Performance & Security</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem', fontSize: '1.2rem' }}>What I'm Looking For</h3>
                    <p style={{ lineHeight: '1.7' }}>
                        I'm actively seeking opportunities to work on challenging projects that leverage AI/ML technologies to solve real-world problems. Whether it's building intelligent applications, optimizing cloud infrastructure, or contributing to open-source projects, I'm passionate about creating solutions that make a meaningful impact. I'm particularly interested in roles that combine my expertise in AI, cloud computing, and full-stack development.
                    </p>
                </div>

                <div style={{
                    padding: '1rem',
                    backgroundColor: 'var(--accent-color)',
                    borderRadius: 'var(--border-radius)',
                    color: 'white',
                    textAlign: 'center'
                }}>
                    <p style={{ margin: '0', fontWeight: '500' }}>
                        🚀 Ready to collaborate on innovative projects and contribute to cutting-edge technology solutions!
                    </p>
                </div>
            </div>
        </section>
    );
} 