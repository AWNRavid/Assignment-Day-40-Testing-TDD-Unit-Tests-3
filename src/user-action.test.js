import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostSection from './components/PostSection/view';
// import '@testing-library/jest-dom';

test('renders text title', async () => {
  const testText = 'lol';
  render(<PostSection />);

  const input = screen.getByTestId('title-input');
  userEvent.type(input, testText);

  const textElement = await screen.findByText(testText);
  expect(textElement.innerHTML).toBeInTheDocument();
});

// test('renders text title', async () => {
//   const testText = 'hehe';
//   render(<Some />);

//   const input = screen.getByTestId('title');
//   userEvent.type(input, testText);

//   const textElement = await screen.findByText(testText)
//   expect(textElement).toBeInTheDocument();
// });

// test('renders text desc', async () => {
//   const testText = 'haha';
//   render(<PostSection />);

//   const input = screen.getByTestId('desc');
//   userEvent.type(input, testText);

//   const textElement = await screen.findByText(testText)
//   expect(textElement).toBeInTheDocument();
// });

// test('clear button', async () => {
//   const testText = 'status';
//   render(<PostSection />);

//   const button = screen.getByTestId('post-button');
//   userEvent.click(button)

//   const textElement = await screen.findByText(testText)
//   expect(textElement).toBeInTheDocument();
// });
