import React from 'react';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import AchievementsSection from '../components/AchievementsSection';
import EducationSection from '../components/EducationSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '2rem', marginTop: '96px' }}>
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <AchievementsSection />
            <EducationSection />
            <ContactSection />
        </main>
    );
} 