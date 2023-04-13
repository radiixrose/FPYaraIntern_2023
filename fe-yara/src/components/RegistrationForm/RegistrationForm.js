import React from 'react';
import { Link } from 'react-router-dom';
import './RegistrationFormStyles.css';

function RegistrationForm(props) {
  const { handleFormSubmit } = props; // change to handleFormSubmit

  return (
    <div className="container body-lf">
      <form onSubmit={handleFormSubmit}>
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        {props.error && <div className="error">{props.error}</div>}
        <hr />

        <label htmlFor="firstname">
          <b>First name</b>
        </label>
        <input
          type="text"
          placeholder="Enter first name"
          name="firstname"
          id="firstname"
          required
          {...props.firstNameProps}
        />

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
          Register
        </button>
        <div className="container signin">
          <p>
            Already have an account? <Link to="/login">Sign in</Link>.
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
