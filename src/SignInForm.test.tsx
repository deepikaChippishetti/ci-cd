import { render, fireEvent, waitFor } from '@testing-library/react';
import SignInForm from './SignInForm';

describe('SignInForm', () => {
  it('renders correctly', () => {
    const { getByText } = render(<SignInForm onSubmit={() => {}} />);
    expect(getByText('Email ID:')).toBeInTheDocument();
    expect(getByText('Password:')).toBeInTheDocument();
    expect(getByText('Sign In')).toBeInTheDocument();
  });

  it('calls onSubmit when form is submitted', () => {
    const handleSubmit = jest.fn();
    const { getByText } = render(<SignInForm onSubmit={handleSubmit} />);
    const form = getByText('Sign In');
    fireEvent.submit(form);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('displays success message after submission', () => {
    const handleSubmit = jest.fn();
    const { getByText } = render(<SignInForm onSubmit={handleSubmit} />);
    const form = getByText('Sign In');
    fireEvent.submit(form);
    waitFor(() => expect(getByText('Signed in successfully!')).toBeInTheDocument());
  });
});