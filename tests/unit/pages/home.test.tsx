import { describe, it, expect } from 'vitest';
import { renderWithProviders, screen } from '../../utils/test-utils';
import HomePage from '@/app/page';

describe('Home Page', () => {
  it('should render the hero section', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('should have a call-to-action button', () => {
    renderWithProviders(<HomePage />);
    const ctaButtons = screen.getAllByRole('link');
    expect(ctaButtons.length).toBeGreaterThan(0);
  });

  it('should render features section', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText(/features|características/i)).toBeInTheDocument();
  });

  it('should render pricing section', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText(/pricing|precios/i)).toBeInTheDocument();
  });
});
