import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <h1>Book store CMS</h1>

    <li className="li"><Link to="/" style={{ color: 'white' }}>Books</Link></li>
    <li className="li"><Link to="/categories" style={{ color: 'white' }}>Categories</Link></li>
  </div>
);

export default Header;
