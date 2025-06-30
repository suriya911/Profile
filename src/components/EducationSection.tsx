import React from 'react';

export default function EducationSection() {
    const education = [
        {
            degree: "Master of Science in General Engineering",
            school: "San José State University",
            period: "2023 - 2025 (Expected)",
            gpa: "3.85/4.0",
            focus: "AI and Cloud Computing",
            relevantCourses: [
                "Advanced Machine Learning",
                "Cloud Computing Architecture",
                "Distributed Systems",
                "Natural Language Processing",
                "Big Data Analytics",
                "Software Engineering"
            ]
        },
        {
            degree: "Bachelor of Technology in Computer Science",
            school: "Anna University",
            period: "2019 - 2023",
            gpa: "3.8/4.0",
            focus: "Software Engineering",
            relevantCourses: [
                "Data Structures & Algorithms",
                "Database Management Systems",
                "Computer Networks",
                "Operating Systems",
                "Web Technologies",
                "Software Testing"
            ]
        }
    ];

    const certifications = [
        {
            name: "AWS Solutions Architect Associate",
            issuer: "Amazon Web Services",
            date: "2024",
            credentialId: "AWS-SAA-2024"
        },
        {
            name: "Google Cloud Professional Data Engineer",
            issuer: "Google Cloud",
            date: "2023",
            credentialId: "GCP-PDE-2023"
        },
        {
            name: "Microsoft Azure AI Engineer Associate",
            issuer: "Microsoft",
            date: "2023",
            credentialId: "AZ-AI-2023"
        }
    ];

    return (
        <section className="card" style={{ width: '100%', padding: '2.5rem 2rem', margin: '2rem', boxShadow: 'var(--shadow-light)', borderRadius: 'var(--border-radius)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--card-border-light)' }}>
            <h2>Education & Certifications</h2>

            {/* Education */}
            <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Academic Background</h3>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {education.map((edu, index) => (
                        <div key={index} style={{
                            padding: '1.5rem',
                            backgroundColor: 'var(--card-bg-light)',
                            borderRadius: 'var(--border-radius)',
                            border: '1px solid var(--card-border-light)'
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                marginBottom: '0.5rem'
                            }}>
                                <div>
                                    <h4 style={{
                                        color: 'var(--accent-color)',
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        margin: '0 0 0.25rem 0'
                                    }}>
                                        {edu.degree}
                                    </h4>
                                    <p style={{
                                        margin: '0',
                                        fontWeight: '500',
                                        color: 'var(--text-primary)'
                                    }}>
                                        {edu.school}
                                    </p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{
                                        padding: '0.3rem 0.6rem',
                                        backgroundColor: 'var(--accent-color)',
                                        color: 'white',
                                        borderRadius: '15px',
                                        fontSize: '0.75rem',
                                        fontWeight: '500'
                                    }}>
                                        GPA: {edu.gpa}
                                    </span>
                                </div>
                            </div>
                            <p style={{
                                margin: '0.5rem 0',
                                color: 'var(--text-secondary)',
                                fontSize: '0.9rem'
                            }}>
                                <strong>Focus:</strong> {edu.focus} • {edu.period}
                            </p>
                            <div style={{ marginTop: '1rem' }}>
                                <p style={{
                                    margin: '0 0 0.5rem 0',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    color: 'var(--text-primary)'
                                }}>
                                    Relevant Coursework:
                                </p>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.5rem'
                                }}>
                                    {edu.relevantCourses.map((course, courseIndex) => (
                                        <span key={courseIndex} style={{
                                            padding: '0.3rem 0.6rem',
                                            backgroundColor: 'var(--accent-color)',
                                            color: 'white',
                                            borderRadius: '15px',
                                            fontSize: '0.75rem',
                                            fontWeight: '500'
                                        }}>
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications */}
            <div>
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Professional Certifications</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                    {certifications.map((cert, index) => (
                        <div key={index} style={{
                            padding: '1rem',
                            backgroundColor: 'var(--card-bg-light)',
                            borderRadius: 'var(--border-radius)',
                            border: '1px solid var(--card-border-light)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div>
                                <h4 style={{
                                    color: 'var(--accent-color)',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    margin: '0 0 0.25rem 0'
                                }}>
                                    {cert.name}
                                </h4>
                                <p style={{
                                    margin: '0',
                                    fontSize: '0.85rem',
                                    color: 'var(--text-secondary)'
                                }}>
                                    {cert.issuer} • {cert.credentialId}
                                </p>
                            </div>
                            <span style={{
                                padding: '0.3rem 0.6rem',
                                backgroundColor: 'var(--accent-color)',
                                color: 'white',
                                borderRadius: '15px',
                                fontSize: '0.75rem',
                                fontWeight: '500'
                            }}>
                                {cert.date}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 