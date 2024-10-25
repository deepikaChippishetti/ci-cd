import React, { useState } from 'react';
import './SignInForm.css';

interface SignInFormProps {
  onSubmit: (email: string, password: string) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(email, password);
    setSuccessMessage('Signed out successfully!');
    setEmail(''); 
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className="sign-in-form">
      <label className="label">
        Email ID:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="input-field"
        />
      </label>
      <label className="label">
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="input-field"
        />
      </label>
      <button type="submit" className="submit-btn">
        SignIn
      </button>
      {successMessage && (
        <p className="success-message">{successMessage}</p>
      )}
    </form>
  );
};

export default SignInForm;