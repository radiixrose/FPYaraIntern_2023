import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './HeaderStyles.css';

function Header({ setSelectedLink }) {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
    window.location.reload();
  };

  return (
    <div className="container">
      <img src={Logo} alt="logo" className="logo" onClick={handleClick} />

      <div className="upper-nav">
        <h1>Page name</h1>
        <ul>
          <li>
            <Link to="#" className="a">
              Link 1
            </Link>
          </li>
          <li>
            <Link to="#" className="a">
              Link 2
            </Link>
          </li>
          <li>
            <Link to="#" className="a">
              Link 3
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
