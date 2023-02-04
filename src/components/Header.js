import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
        <h1>Book store CMS</h1>
        
        <li className="li"><Link to="/" style={{ color: 'blue' }}>Books</Link></li>
        <li className="li"><Link to="/categories" style={{ color: 'blue' }}>Categories</Link></li>
    </div>
  )
}

export default Header