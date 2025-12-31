import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Toast } from '@/components/ui/toast';

describe('Toast Component', () => {
  it('renders toast with title and description', () => {
    render(
      <Toast
        id="test-1"
        title="Success"
        description="Operation completed"
        type="success"
      />
    );

    expect(screen.getByText('Success')).toBeInTheDocument();
    expect(screen.getByText('Operation completed')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    render(
      <Toast
        id="test-2"
        title="Test"
        type="info"
        onClose={onClose}
      />
    );

    const closeButton = screen.getByRole('button');
    closeButton.click();

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('applies correct styles for error type', () => {
    const { container } = render(
      <Toast id="test-3" title="Error" type="error" />
    );

    const toast = container.firstChild;
    expect(toast).toHaveClass('bg-red-50');
  });
});