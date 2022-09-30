import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import userEvent from '@testing-library/user-event';

test('renders form', () => {
  render(<App />);
const form = screen.getByRole('form', {name: /registration form/i});
expect(form).toBeInTheDocument();
});
