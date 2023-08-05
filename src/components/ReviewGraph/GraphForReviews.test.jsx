import { render, screen, waitFor } from '@testing-library/react';
import GraphForReviews from './GraphForReviews';
import vitest from 'vitest'


jest.spyOn(global, 'fetch').mockResolvedValue({
  json: () =>
    Promise.resolve([
   
      {
        id: 1,
        recommendation: true,
        owned: 'Steam',
        date_posted: '2023-08-01T10:00:00Z',
        total_time: 50,
      },
      {
        id: 2,
        recommendation: false,
        owned: 'product Key',
        date_posted: '2023-07-20T08:00:00Z',
        total_time: 120,
      },
    ]),
});


describe('GraphForReviews component', () => {

  it('renders without errors', () => {
    render(<GraphForReviews />);
    expect(screen.getByText('Customer reviews')).toBeInTheDocument();
  });

  
  it('fetches and displays reviews', async () => {
    render(<GraphForReviews />);

    await waitFor(() => {
      expect(screen.getByText('Customer reviews')).toBeInTheDocument();
      expect(screen.getByText('Review 1')).toBeInTheDocument();
      expect(screen.getByText('Review 2')).toBeInTheDocument();
    });
  });

 
  it('toggles "expanded" state on click', async () => {
    render(<GraphForReviews />);
    expect(screen.queryByText('All Reviews')).not.toBeInTheDocument();
    expect(screen.queryByText('Recent Reviews')).not.toBeInTheDocument();

 
    screen.getByText('Expand').click();

  
    await waitFor(() => {
      expect(screen.getByText('All Reviews')).toBeInTheDocument();
      expect(screen.getByText('Recent Reviews')).toBeInTheDocument();
    });

   
    screen.getByText('Collapse').click();

   
    await waitFor(() => {
      expect(screen.queryByText('All Reviews')).not.toBeInTheDocument();
      expect(screen.queryByText('Recent Reviews')).not.toBeInTheDocument();
    });
  });
