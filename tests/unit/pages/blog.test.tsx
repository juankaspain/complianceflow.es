import { describe, it, expect } from 'vitest';
import { renderWithProviders, screen } from '../../utils/test-utils';
import BlogPage from '@/app/blog/page';

describe('Blog Page', () => {
  it('should render the page title', () => {
    renderWithProviders(<BlogPage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('should render blog posts', () => {
    renderWithProviders(<BlogPage />);
    const articles = screen.getAllByRole('article');
    expect(articles.length).toBeGreaterThan(0);
  });

  it('should display post metadata (date, read time)', () => {
    renderWithProviders(<BlogPage />);
    expect(screen.getByText(/min/i)).toBeInTheDocument();
  });

  it('should have links to individual posts', () => {
    renderWithProviders(<BlogPage />);
    const links = screen.getAllByRole('link', { name: /leer más/i });
    expect(links.length).toBeGreaterThan(0);
  });
});
