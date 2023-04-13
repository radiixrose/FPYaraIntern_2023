import React from 'react';
import { Link } from 'react-router-dom';
import './LoginFormStyles.css';

function LoginForm(props) {
  const { handleLogin } = props;

  return (
    <div className="container body-lf">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <p>Please fill in this form to login into your account.</p>
        <hr />

        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          id="username"
          required
          {...props.usernameProps}
        />

        <label htmlFor="password">
          <b>Enter Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id="password"
          required
          {...props.passwordProps}
        />
        <hr />

        <button type="submit" className="button">
          Login
        </button>
        <div className="container signin">
          <p>
            Don't have an account? <Link to="/registration">Sign up</Link>.
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
