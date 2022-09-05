import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import { mount, shallow } from 'enzyme';
import SignIn from '../Components/signIn/SignIn';
import BookHotel from '../Components/Hotels/BookHotel';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders SignIn link', () => {
  render(<App />);
  const signInElement = screen.getByText(/SignIn/i);
  expect(signInElement).toBeInTheDocument();
});

test('Hotel Booking confirmation', () => {
  render(<BookHotel />);
  const button = screen.getByTestId('confirmButton');
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('Confirm Booking');
  expect(button).toBeDisabled();
  fireEvent.click(button);
});

test('SignIn fields', async () => {
  render(
    <Router>
      <SignIn />
    </Router>
  );
  const signInForm = screen.getByTestId('signin-form');
  expect(signInForm.tagName).toEqual('FORM');
  // const wrapper = shallow(
  //   <Router>
  //     <SignIn />
  //   </Router>
  // );
});
