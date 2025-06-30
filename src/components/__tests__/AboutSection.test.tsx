import { render, screen } from '@testing-library/react';
import AboutSection from '../AboutSection';

describe('AboutSection', () => {
    it('renders the About Me heading', () => {
        render(<AboutSection />);
        expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
    });
    it('renders Core Expertise section', () => {
        render(<AboutSection />);
        expect(screen.getByText(/core expertise/i)).toBeInTheDocument();
    });
}); 