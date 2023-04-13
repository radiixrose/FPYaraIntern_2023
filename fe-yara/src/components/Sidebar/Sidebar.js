import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarStyles.css';

function Sidebar({ setSelectedLink }) {
  return (
    <div className="sidebar">
      <ul className="sidebar">
        <li className="form-page">
          <Link to="#" className="a" onClick={() => setSelectedLink('form')}>
            Form
          </Link>
        </li>
        <li className="table-page">
          <Link to="#" className="a" onClick={() => setSelectedLink('table')}>
            Table
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
