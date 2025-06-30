import { render, screen } from '@testing-library/react';
import SkillsSection from '../SkillsSection';

describe('SkillsSection', () => {
    it('renders the Technical Skills heading', () => {
        render(<SkillsSection />);
        expect(screen.getByRole('heading', { name: /technical skills/i })).toBeInTheDocument();
    });
    it('renders a sample skill', () => {
        render(<SkillsSection />);
        expect(screen.getByText(/Python/)).toBeInTheDocument();
    });
}); 