import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('React Axios GET', () => {
  render(<App />);
  const linkElement = screen.getByText('React Axios GET');
  expect(linkElement).toBeInTheDocument();
});

test('React Axios POST', () => {
  render(<App />);
  const linkElement = screen.getByText('React Axios POST');
  expect(linkElement).toBeInTheDocument();
});

test('React Axios example - netlify hihihihihih', () => {
  render(<App />);
  const linkElement = screen.getByText('React Axios example - netlify hihihihihih');
  expect(linkElement).toBeInTheDocument();
});

test('Title Placeholder', () => {
  render(<App />);
  const linkElement = screen.queryByPlaceholderText('Title')
  expect(linkElement).toBeInTheDocument();
});

test('Description Placeholder', () => {
  render(<App />);
  const linkElement = screen.queryByPlaceholderText('Description')
  expect(linkElement).toBeInTheDocument();
});
