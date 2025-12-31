import { describe, it, expect } from 'vitest';
import { renderWithProviders, screen } from '../../utils/test-utils';
import FeaturesPage from '@/app/features/page';

describe('Features Page', () => {
  it('should render the page title', () => {
    renderWithProviders(<FeaturesPage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('should render multiple feature cards', () => {
    renderWithProviders(<FeaturesPage />);
    // Should have at least 4 features
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThanOrEqual(5); // 1 main title + 4+ features
  });

  it('should have icons for each feature', () => {
    const { container } = renderWithProviders(<FeaturesPage />);
    const svgElements = container.querySelectorAll('svg');
    expect(svgElements.length).toBeGreaterThan(0);
  });
});
