import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RegistrationForm from './RegistrationForm';
import userEvent from '@testing-library/user-event';


const displayMessage = (message:string) => {
console.log(message);
}

const setup = () => {
  render(<RegistrationForm onMsgReceived={displayMessage}/>);

  const firstNameInput = screen.getByPlaceholderText('First Name') as HTMLInputElement;
  const lastNameInput = screen.getByPlaceholderText('Last Name');
  const phoneNrInput = screen.getByPlaceholderText('e.g. 0888888888');
  const submitBtnElement = screen.getByRole('button', {name: /submit/i});
  const resetBtnElement = screen.getByRole('button', {name: /reset/i});

  return {
    firstNameInput,
    lastNameInput,
    phoneNrInput,
    submitBtnElement,
    resetBtnElement,
  }

}

test('renders input fields', () => {
  const { firstNameInput } = setup();
  expect(firstNameInput).toBeInTheDocument();
});

test('renders buttons', () => {
  const { submitBtnElement } = setup();
  expect(submitBtnElement).toBeInTheDocument();
});

test('renders error messages', () => {
  const { submitBtnElement } = setup();
  userEvent.click(submitBtnElement);

  const errorMsg = screen.getByText('The field is required');
  expect(errorMsg).toBeInTheDocument();
});

test('verifies input fileds', () => {
  const { phoneNrInput, submitBtnElement } = setup();
  fireEvent.change(phoneNrInput, {target: {value: 'abc'}});
  userEvent.click(submitBtnElement);
  const errorMsg = screen.getByText('Please enter only digits');
  expect(errorMsg).toBeInTheDocument();
});

test('resets the form correctly', () => {
const { firstNameInput, resetBtnElement } = setup();
fireEvent.change(firstNameInput, {target: { value: 'Ivan'}});
expect(firstNameInput.value).toBe('Ivan');
userEvent.click(resetBtnElement);
expect(firstNameInput.value).toBe('');
})