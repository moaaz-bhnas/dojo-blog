import { memo } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav aria-label="main" className="nav">
      <ul className="nav__list">
        <li>
          <Link className="nav__link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav__link" to="/create">
            New Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default memo(Navbar);
