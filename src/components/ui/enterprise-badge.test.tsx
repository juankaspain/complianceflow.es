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
      expect(screen.getByText('GDPR Compliant')).toBeInTheDocument();
    });

    it('should display certifications', () => {
      renderWithProviders(<EnterpriseBadge variant="full" />);

      expect(screen.getByText('Information Security Management')).toBeInTheDocument();
      expect(screen.getByText('Security & Compliance')).toBeInTheDocument();
      expect(screen.getByText('Data Privacy Protection')).toBeInTheDocument();
    });

    it('should display feature cards', () => {
      renderWithProviders(<EnterpriseBadge variant="full" />);

      expect(screen.getByText('Zero-Trust Architecture')).toBeInTheDocument();
      expect(screen.getByText('Encryption at Rest & Transit')).toBeInTheDocument();
      expect(screen.getByText('Audit Trails Completos')).toBeInTheDocument();
    });

    it('should display statistics', () => {
      renderWithProviders(<EnterpriseBadge variant="full" />);

      expect(screen.getByText('Empresas Confiadas')).toBeInTheDocument();
      expect(screen.getByText('Países Cubiertos')).toBeInTheDocument();
      expect(screen.getByText('Datos Protegidos')).toBeInTheDocument();
    });
  });

  describe('Minimal Variant', () => {
    it('should render compact version', () => {
      renderWithProviders(<EnterpriseBadge variant="minimal" />);

      expect(screen.getByText('ComplianceFlow')).toBeInTheDocument();
      expect(screen.getByText('Enterprise Grade')).toBeInTheDocument();
    });

    it('should show enterprise badge indicator', () => {
      renderWithProviders(<EnterpriseBadge variant="minimal" />);

      expect(screen.getByText('Enterprise Grade')).toBeInTheDocument();
    });
  });

  describe('Compact Variant', () => {
    it('should render compact card', () => {
      renderWithProviders(<EnterpriseBadge variant="compact" />);

      expect(screen.getByText('ComplianceFlow')).toBeInTheDocument();
      expect(screen.getByText(/ISO 27001/)).toBeInTheDocument();
    });

    it('should display certifications in one line', () => {
      renderWithProviders(<EnterpriseBadge variant="compact" />);

      const element = screen.getByText(/ISO 27001/);
      expect(element).toBeInTheDocument();
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

      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
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
