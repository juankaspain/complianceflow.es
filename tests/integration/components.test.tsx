import { describe, it, expect } from 'vitest';
import { renderWithProviders, screen, userEvent } from '../utils/test-utils';
import { useState } from 'react';

// Mock components for integration testing
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <div>Thank you for your message!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit">Submit</button>
    </form>
  );
};

const PricingCard = ({ plan }: { plan: any }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div>
      <h3>{plan.name}</h3>
      <p>{plan.price}€/month</p>
      <button onClick={() => setSelected(true)}>
        {selected ? 'Selected' : 'Choose Plan'}
      </button>
    </div>
  );
};

describe('Component Integration', () => {
  describe('Contact Form', () => {
    it('should submit form and show success message', async () => {
      const user = userEvent.setup();
      renderWithProviders(<ContactForm />);

      await user.type(screen.getByPlaceholderText('Name'), 'John Doe');
      await user.type(screen.getByPlaceholderText('Email'), 'john@example.com');
      await user.type(screen.getByPlaceholderText('Message'), 'Hello!');
      await user.click(screen.getByRole('button', { name: /submit/i }));

      expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    });
  });

  describe('Pricing Card', () => {
    it('should select pricing plan', async () => {
      const user = userEvent.setup();
      const plan = { name: 'Pro', price: 99 };
      renderWithProviders(<PricingCard plan={plan} />);

      const button = screen.getByRole('button', { name: /choose plan/i });
      await user.click(button);

      expect(screen.getByText('Selected')).toBeInTheDocument();
    });
  });
});
