import { describe, it, expect } from 'vitest';
import { renderWithProviders, screen } from '../../utils/test-utils';
import ContactPage from '@/app/contact/page';

describe('Contact Page', () => {
  it('should render the page title', () => {
    renderWithProviders(<ContactPage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('should render contact form', () => {
    renderWithProviders(<ContactPage />);
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
  });

  it('should have a submit button', () => {
    renderWithProviders(<ContactPage />);
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    expect(submitButton).toBeInTheDocument();
  });

  it('should display contact information', () => {
    renderWithProviders(<ContactPage />);
    expect(screen.getByText(/email/i)).toBeInTheDocument();
  });
});
