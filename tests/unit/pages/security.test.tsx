import { describe, it, expect } from 'vitest';
import { renderWithProviders, screen } from '../../utils/test-utils';
import SecurityPage from '@/app/security/page';

describe('Security Page', () => {
  it('should render the page title', () => {
    renderWithProviders(<SecurityPage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('should display security certifications', () => {
    renderWithProviders(<SecurityPage />);
    expect(screen.getByText(/ISO 27001/i)).toBeInTheDocument();
    expect(screen.getByText(/SOC 2/i)).toBeInTheDocument();
  });

  it('should render security features', () => {
    renderWithProviders(<SecurityPage />);
    expect(screen.getByText(/cifrado|encryption/i)).toBeInTheDocument();
  });

  it('should have certification badges', () => {
    const { container } = renderWithProviders(<SecurityPage />);
    const badges = container.querySelectorAll('[class*="badge"], [class*="rounded"]');
    expect(badges.length).toBeGreaterThan(0);
  });
});
