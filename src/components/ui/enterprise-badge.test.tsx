import { describe, it, expect } from 'vitest';
import { renderWithProviders, screen } from '../../../tests/utils/test-utils';
import { EnterpriseBadge } from './enterprise-badge';

describe('EnterpriseBadge Component', () => {
  describe('Full Variant', () => {
    it('should render all sections', () => {
      renderWithProviders(<EnterpriseBadge variant="full" />);

      expect(screen.getByText('ComplianceFlow')).toBeInTheDocument();
      expect(screen.getByText('Enterprise Compliance APIs')).toBeInTheDocument();
      expect(screen.getByText('ISO 27001')).toBeInTheDocument();
      expect(screen.getByText('SOC 2 Type II')).toBeInTheDocument();
      expect(screen.getByText('GDPR')).toBeInTheDocument();
      expect(screen.getByText('SLA 99.99%')).toBeInTheDocument();
    });

    it('should display feature cards', () => {
      renderWithProviders(<EnterpriseBadge variant="full" />);

      expect(screen.getByText('Zero-Trust Security')).toBeInTheDocument();
      expect(screen.getByText('Encryption AES-256')).toBeInTheDocument();
      expect(screen.getByText('Complete Audit Logs')).toBeInTheDocument();
    });

    it('should display statistics', () => {
      renderWithProviders(<EnterpriseBadge variant="full" />);

      expect(screen.getByText('Companies')).toBeInTheDocument();
      expect(screen.getByText('Countries')).toBeInTheDocument();
      expect(screen.getByText('Data Protected')).toBeInTheDocument();
      expect(screen.getByText('+500')).toBeInTheDocument();
      expect(screen.getByText('45+')).toBeInTheDocument();
    });
  });

  describe('Minimal Variant', () => {
    it('should render compact version', () => {
      renderWithProviders(<EnterpriseBadge variant="minimal" />);

      expect(screen.getByText('ComplianceFlow')).toBeInTheDocument();
      expect(screen.getByText('Verified')).toBeInTheDocument();
    });
  });

  describe('Compact Variant', () => {
    it('should render compact card', () => {
      renderWithProviders(<EnterpriseBadge variant="compact" />);

      expect(screen.getByText('ComplianceFlow')).toBeInTheDocument();
      expect(screen.getByText(/ISO 27001/)).toBeInTheDocument();
    });
  });

  describe('Custom className', () => {
    it('should accept custom className prop', () => {
      const { container } = renderWithProviders(
        <EnterpriseBadge variant="full" className="custom-class" />
      );

      expect(container.querySelector('.custom-class')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      renderWithProviders(<EnterpriseBadge variant="full" />);

      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
      expect(
        screen.getAllByRole('heading', { level: 4 }).length
      ).toBeGreaterThan(0);
    });

    it('should have meaningful text content', () => {
      renderWithProviders(<EnterpriseBadge variant="full" />);

      expect(
        screen.getByText(/Infraestructura enterprise-grade/)
      ).toBeInTheDocument();
    });
  });
});
