import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>Manisha</h1>
      <main>
        <HashLink to={"/#home"} className="header-link">
          Home{" "}
        </HashLink>
        <Link to={"/contact"} className="header-link">
          Contact{" "}
        </Link>
        <HashLink to={"/#about"} className="header-link">
          About{" "}
        </HashLink>
        <HashLink to={"/#brands"} className="header-link">
          Brands{" "}
        </HashLink>

        <Link to={"/services"}>Services </Link>
      </main>
    </nav>
  );
};

export default Header;
