import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

function Registration() {
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await axios.post('/api/register', {
        firstName,
        username,
        password,
      });
      if (response.status === 200) {
        history.push('/login');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRegistration();
  };

  return (
    <RegistrationForm
      firstNameProps={{
        value: firstName,
        onChange: (e) => setFirstName(e.target.value),
      }}
      usernameProps={{
        value: username,
        onChange: (e) => setUsername(e.target.value),
      }}
      passwordProps={{
        value: password,
        onChange: (e) => setPassword(e.target.value),
      }}
      handleFormSubmit={handleFormSubmit} // change to handleFormSubmit
      error={error}
    />
  );
}

export default Registration;
