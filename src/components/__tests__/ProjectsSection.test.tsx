import { render, screen } from '@testing-library/react';
import ProjectsSection from '../ProjectsSection';

describe('ProjectsSection', () => {
    it('renders the Featured Projects heading', () => {
        render(<ProjectsSection />);
        expect(screen.getByRole('heading', { name: /featured projects/i })).toBeInTheDocument();
    });
    it('renders a sample project title', () => {
        render(<ProjectsSection />);
        expect(screen.getByText(/AI-Powered Resume Parser/i)).toBeInTheDocument();
    });
}); 