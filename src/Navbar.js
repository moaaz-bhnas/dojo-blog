import { memo } from "react";

const Navbar = () => {
  return (
    <nav aria-label="main" className="nav">
      <ul className="nav__list">
        <li>
          <a className="nav__link" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="nav__link" href="/create">
            New Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default memo(Navbar);
