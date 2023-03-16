import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>)
  const button = screen.getByRole('button', {name: 'Change to blue'})
  expect(button).toHaveStyle({backgroundColor: 'red'})
});

// no need for this test since its in the test above
test('button has correct initial text', () => {
  render(<App/>)
})

test('button turns blue when clicked', () => {

})