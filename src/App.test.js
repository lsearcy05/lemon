import { fireEvent, getByRole, getByText, render, screen, userEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import { click } from '@testing-library/user-event/dist/click';
import { BrowserRouter } from 'react-router-dom';
describe('BookingForm Component', () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  const defaultProps = {
      dispatch: mockDispatch,
      submitForm: mockSubmitForm,
      availableTimes: { availableTimes: ['6:00 PM', '7:00 PM', '8:00 PM'] },
  };

  beforeEach(() => {
      jest.clearAllMocks();
  });

  it('renders the form elements correctly', () => {
      render(<BookingForm {...defaultProps} />);

      expect(screen.getByLabelText('Choose Date')).toBeInTheDocument();
      expect(screen.getByLabelText('Choose Time')).toBeInTheDocument();
      expect(screen.getByLabelText('Number of Guests:')).toBeInTheDocument();
      expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
      expect(screen.getByText('Make Your Reservation')).toBeInTheDocument();
  });

  it('renders the available time options', () => {
      render(<BookingForm {...defaultProps} />);
      
      const timeSelect = screen.getByLabelText('Choose Time');
      fireEvent.click(timeSelect); // Open the dropdown
      
      expect(screen.getByText('6:00 PM')).toBeInTheDocument();
      expect(screen.getByText('7:00 PM')).toBeInTheDocument();
      expect(screen.getByText('8:00 PM')).toBeInTheDocument();
  });

  it('handles date input change', () => {
      render(<BookingForm {...defaultProps} />);
      
      const dateInput = screen.getByLabelText('Choose Date');
      fireEvent.change(dateInput, { target: { value: '2025-01-15' } });

      expect(dateInput.value).toBe('2025-01-15');
      expect(mockDispatch).toHaveBeenCalledWith('2025-01-15');
  });

  it('handles time selection', () => {
      render(<BookingForm {...defaultProps} />);

      const timeSelect = screen.getByLabelText('Choose Time');
      fireEvent.change(timeSelect, { target: { value: '7:00 PM' } });

      expect(timeSelect.value).toBe('7:00 PM');
  });

  it('handles guests input change', () => {
      render(<BookingForm {...defaultProps} />);

      const guestsInput = screen.getByLabelText('Number of Guests:');
      fireEvent.change(guestsInput, { target: { value: '4' } });

      expect(guestsInput.value).toBe('4');
  });

  it('handles occasion selection', () => {
      render(<BookingForm {...defaultProps} />);

      const occasionSelect = screen.getByLabelText('Occasion');
      fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });

      expect(occasionSelect.value).toBe('Anniversary');
  });

  it('calls submitForm on form submission', () => {
      render(<BookingForm {...defaultProps} />);

      const form = screen.getByRole('form');
      fireEvent.submit(form);

      expect(mockSubmitForm).toHaveBeenCalled();
  });
});

test('Renders the Header heading', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const headingElement = screen.getByText("Reserve Table");
    expect(headingElement).toBeInTheDocument();

    const reserveButton = screen.getByRole("button");
    fireEvent.click(reserveButton);

    const headingElementNew = screen.getByText("Choose Date");
    expect(headingElementNew).toBeInTheDocument();
})

test('Initialize/Update Times', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const testTime = []
  userEvent.selectOptions(screen.getByLabelText("Choose Time"),screen.getByRole('option', { name: testTime}))
  expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);
})
