import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import LoginForm from '../components/LoginForm/LoginForm.js';

function Login() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/login', { username, password });
      if (response.status === 200) {
        history.push('/warehouses');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <LoginForm
        handleLogin={handleLogin}
        setUsername={setUsername}
        setPassword={setPassword}
      />
    </div>
  );
}

export default Login;
