// import necessary react testing library helpers here
import { render, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);

  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = Number(screen.getByTestId('count').textContent);
  
  expect(initialCount).toBe(0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initialValue = Number(screen.getByTestId('count').textContent);
  const incrementButton = screen.getByRole('button', {name: '+'});
  userEvent.click(incrementButton);
  const incrementedValue = Number(screen.getByTestId('count').textContent);

  expect(incrementedValue).toBe(initialValue + 1);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initialValue = Number(screen.getByTestId('count').textContent);
  const decrementButton = screen.getByRole('button', {name: '-'});
  userEvent.click(decrementButton);
  const decrementedValue = Number(screen.getByTestId('count').textContent);

  expect(decrementedValue).toBe(initialValue - 1);
});
