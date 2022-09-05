import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SignIn link', () => {
  render(<App />);
  const linkElement = screen.getByText(/SignIn/i);
  expect(linkElement).toBeInTheDocument();
});
