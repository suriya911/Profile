import React from 'react';
import { FaPython, FaJava, FaJs, FaNodeJs, FaDocker, FaAws, FaGit, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaLinux } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiFastapi, SiMongodb, SiPostgresql, SiRedis, SiGithubactions, SiKubernetes, SiTerraform, SiJupyter, SiPytorch, SiTensorflow, SiScikitlearn, SiNumpy, SiPandas, SiVercel, SiMicrosoftazure, SiGooglecloud, SiGraphql, SiNextdotjs, SiVsco, SiPostman, SiNginx } from 'react-icons/si';

const skillsData = [
    {
        category: 'Programming Languages',
        skills: [
            { icon: <FaPython size={32} />, name: 'Python' },
            { icon: <FaJs size={32} />, name: 'JavaScript' },
            { icon: <SiTypescript size={32} />, name: 'TypeScript' },
            { icon: <FaJava size={32} />, name: 'Java' },
            { icon: <span style={{ fontSize: 32 }}>C++</span>, name: 'C++' },
        ],
    },
    {
        category: 'AI/ML & Data Science',
        skills: [
            { icon: <span style={{ fontSize: 32 }}>🤖</span>, name: 'LLMs' },
            { icon: <span style={{ fontSize: 32 }}>🔎</span>, name: 'Vector Search' },
            { icon: <span style={{ fontSize: 32 }}>🧩</span>, name: 'RAG' },
            { icon: <span style={{ fontSize: 32 }}>🕹️</span>, name: 'Agentic Frameworks' },
            { icon: <span style={{ fontSize: 32 }}>🖼️</span>, name: 'Computer Vision' },
            { icon: <span style={{ fontSize: 32 }}>💬</span>, name: 'NLP' },
            { icon: <SiPytorch size={32} />, name: 'PyTorch' },
            { icon: <SiTensorflow size={32} />, name: 'TensorFlow' },
            { icon: <SiScikitlearn size={32} />, name: 'Scikit-learn' },
            { icon: <SiPandas size={32} />, name: 'Pandas' },
            { icon: <SiNumpy size={32} />, name: 'Numpy' },
        ],
    },
    {
        category: 'Cloud & DevOps',
        skills: [
            { icon: <FaAws size={32} />, name: 'AWS' },
            { icon: <SiGooglecloud size={32} />, name: 'GCP' },
            { icon: <SiMicrosoftazure size={32} />, name: 'Azure' },
            { icon: <FaDocker size={32} />, name: 'Docker' },
            { icon: <SiKubernetes size={32} />, name: 'Kubernetes' },
            { icon: <SiGithubactions size={32} />, name: 'GitHub Actions' },
            { icon: <span style={{ fontSize: 32 }}>🔁</span>, name: 'CI/CD' },
            { icon: <SiTerraform size={32} />, name: 'Terraform' },
            { icon: <span style={{ fontSize: 32 }}>⚡</span>, name: 'Serverless' },
        ],
    },
    {
        category: 'Web Development',
        skills: [
            { icon: <FaReact size={32} />, name: 'React' },
            { icon: <SiNextdotjs size={32} />, name: 'Next.js' },
            { icon: <FaNodeJs size={32} />, name: 'Node.js' },
            { icon: <SiExpress size={32} />, name: 'Express.js' },
            { icon: <SiFastapi size={32} />, name: 'FastAPI' },
            { icon: <SiGraphql size={32} />, name: 'GraphQL' },
            { icon: <FaHtml5 size={32} />, name: 'HTML' },
            { icon: <FaCss3Alt size={32} />, name: 'CSS' },
            { icon: <FaBootstrap size={32} />, name: 'Bootstrap' },
            { icon: <span style={{ fontSize: 32 }}>🔒</span>, name: 'Security' },
        ],
    },
    {
        category: 'Databases',
        skills: [
            { icon: <SiPostgresql size={32} />, name: 'PostgreSQL' },
            { icon: <SiMongodb size={32} />, name: 'MongoDB' },
            { icon: <SiRedis size={32} />, name: 'Redis' },
            { icon: <span style={{ fontSize: 32 }}>🌲</span>, name: 'Pinecone' },
            { icon: <span style={{ fontSize: 32 }}>🗄️</span>, name: 'Vector DBs' },
        ],
    },
    {
        category: 'Tools & Infra',
        skills: [
            { icon: <FaGit size={32} />, name: 'Git' },
            { icon: <SiVsco size={32} />, name: 'VS Code' },
            { icon: <SiJupyter size={32} />, name: 'Jupyter' },
            { icon: <SiPostman size={32} />, name: 'Postman' },
            { icon: <FaLinux size={32} />, name: 'Linux' },
            { icon: <SiNginx size={32} />, name: 'Nginx' },
            { icon: <span style={{ fontSize: 32 }}>🧑‍💻</span>, name: 'Agile/Scrum' },
        ],
    },
];

export default function SkillsSection() {
    return (
        <section className="card" style={{ width: '100%', padding: '2.5rem 2rem', margin: '2rem auto', boxShadow: 'var(--shadow-light)', borderRadius: 'var(--border-radius)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--card-border-light)', background: 'rgba(20,20,30,0.85)' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>Skills</h2>
                <div style={{ width: '60%', margin: '0.5rem auto 0', height: '3px', background: 'linear-gradient(90deg, #ff6b6b 0%, #b388ff 100%)', borderRadius: '2px' }} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem' }}>
                {skillsData.map((category, idx) => (
                    <div key={idx} style={{ minWidth: 260, flex: '1 1 320px', maxWidth: 400 }}>
                        <h3 style={{ color: 'white', fontWeight: 600, fontSize: '1.25rem', marginBottom: '1.2rem', textAlign: 'center', letterSpacing: '0.5px' }}>{category.category}</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', justifyContent: 'center' }}>
                            {category.skills.map((skill, sidx) => (
                                <div key={sidx} style={{
                                    background: 'rgba(40,40,60,0.95)',
                                    borderRadius: '12px',
                                    padding: '1.1rem 1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    minWidth: 100,
                                    minHeight: 80,
                                    boxShadow: '0 4px 24px 0 rgba(31,38,135,0.10)',
                                    border: '1px solid #222',
                                    color: 'white',
                                    fontWeight: 500,
                                    fontSize: '1rem',
                                    transition: 'transform 0.15s',
                                }}>
                                    {skill.icon}
                                    <span style={{ marginTop: '0.7rem', fontSize: '1rem', letterSpacing: '0.2px' }}>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 