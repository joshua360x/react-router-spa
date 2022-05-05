import {
  screen,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
// import Header from './views/Header';

test('renders APP', async () => {
  render(
    <MemoryRouter initialEntries={['/']} intialIndex={0}>
      <App />
    </MemoryRouter>
  );

  // const find = await findByText()
  // await screen.findByText(/welcome!/i)
  // await screen.findByText(/welcome/i)

  //  await waitFor(() => {

  await screen.findByText(/loading/i);
  //   expect(findByText(/books/i)).toBeInTheDocument()
  // })
});

test('renders bible book detail', async () => {
  render(
    <MemoryRouter initialEntries={['/bookID/0']} initialIndex={0}>
      <App />
    </MemoryRouter>
  );
  // await waitForElementToBeRemoved(screen.getByText(/loading book.../i), {
  //   timeout: 3000
  // });
  await waitFor(() => {
    screen.getByText(/Genesis/i)}, { timeout: 3000 });
});
