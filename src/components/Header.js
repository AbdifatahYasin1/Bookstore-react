import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
  const links = [
    { id: 1, path: '/', text: 'Books' },
    { id: 2, path: '/categories', text: 'Categories' },
  ];
  return (
    <nav className="navigation">
      <h1 className="header">Bookstore CMS</h1>
      <ul className="navList">
        {links.map((link) => (
          <li key={link.id} className="nav-link">
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
      <button className="icon-button" type="button">
        <span className="material-icons primary-color">
          <FaUserAlt />
        </span>
      </button>
    </nav>
  );
};
export default Header;
