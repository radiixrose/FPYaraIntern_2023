import React from 'react';
import './HomeStyles.css';
import { Link } from 'react-router-dom';

function HomeComp() {
  return (
    <div className="container-home">
      <h1 className="welcome">Welcome</h1>
      <div className="buttons">
        <Link to="/registration" className="button">
          Sign up
        </Link>
        <Link to="/login" className="button">
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default HomeComp;
