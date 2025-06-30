import React from 'react';

export default function AchievementsSection() {
    const achievements = [
        {
            title: "AWS Certified Solutions Architect",
            description: "Achieved AWS Solutions Architect Associate certification, demonstrating expertise in designing distributed systems on AWS.",
            year: "2024",
            icon: "🏆"
        },
        {
            title: "Dean's List Recognition",
            description: "Consistently maintained academic excellence with GPA above 3.8, earning Dean's List recognition for multiple semesters.",
            year: "2023-2024",
            icon: "🎓"
        },
        {
            title: "Hackathon Winner",
            description: "Led team to victory in university hackathon, developing an AI-powered accessibility tool for visually impaired users.",
            year: "2023",
            icon: "🚀"
        },
        {
            title: "Research Publication",
            description: "Co-authored research paper on 'Optimizing LLM Performance for Real-time Applications' presented at IEEE conference.",
            year: "2023",
            icon: "📚"
        },
        {
            title: "Open Source Contributor",
            description: "Active contributor to popular open-source projects, with 50+ commits and 10+ repositories on GitHub.",
            year: "2022-2024",
            icon: "💻"
        },
        {
            title: "Teaching Assistant",
            description: "Selected as Teaching Assistant for Advanced Machine Learning course, mentoring 30+ students in AI/ML concepts.",
            year: "2023-2024",
            icon: "👨‍🏫"
        }
    ];

    return (
        <section className="card" style={{ width: '100%', padding: '2.5rem 2rem', margin: '2rem', boxShadow: 'var(--shadow-light)', borderRadius: 'var(--border-radius)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--card-border-light)' }}>
            <h2>Achievements & Recognition</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                {achievements.map((achievement, index) => (
                    <div key={index} style={{
                        padding: '1.5rem',
                        backgroundColor: 'var(--card-bg-light)',
                        borderRadius: 'var(--border-radius)',
                        border: '1px solid var(--card-border-light)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem'
                    }}>
                        <div style={{
                            fontSize: '2rem',
                            lineHeight: '1'
                        }}>
                            {achievement.icon}
                        </div>
                        <div style={{ flex: '1' }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '0.5rem'
                            }}>
                                <h3 style={{
                                    color: 'var(--accent-color)',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    margin: '0'
                                }}>
                                    {achievement.title}
                                </h3>
                                <span style={{
                                    padding: '0.3rem 0.6rem',
                                    backgroundColor: 'var(--accent-color)',
                                    color: 'white',
                                    borderRadius: '15px',
                                    fontSize: '0.75rem',
                                    fontWeight: '500'
                                }}>
                                    {achievement.year}
                                </span>
                            </div>
                            <p style={{
                                margin: '0',
                                lineHeight: '1.5',
                                color: 'var(--text-secondary)',
                                fontSize: '0.9rem'
                            }}>
                                {achievement.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 