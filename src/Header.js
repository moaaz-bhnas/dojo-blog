import { memo } from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">The Dojo Blog</h1>

      <Navbar />
    </header>
  );
};

export default memo(Header);
