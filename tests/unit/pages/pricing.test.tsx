import { describe, it, expect } from 'vitest';
import { renderWithProviders, screen } from '../../utils/test-utils';
import PricingPage from '@/app/pricing/page';

describe('Pricing Page', () => {
  it('should render the page title', () => {
    renderWithProviders(<PricingPage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('should render pricing plans', () => {
    renderWithProviders(<PricingPage />);
    // Should have multiple pricing cards
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThanOrEqual(4); // Title + 3 plans
  });

  it('should display prices in euros', () => {
    renderWithProviders(<PricingPage />);
    expect(screen.getByText(/€/)).toBeInTheDocument();
  });

  it('should have CTA buttons for each plan', () => {
    renderWithProviders(<PricingPage />);
    const buttons = screen.getAllByRole('link');
    expect(buttons.length).toBeGreaterThanOrEqual(3);
  });
});
