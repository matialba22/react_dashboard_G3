import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-winehouse.png";
import "./header.css";

function Header() {
  return (
    <React.Fragment>
      <div className="navBar">
        <div className="imagen-logo">
          <a href="/">
            <img src={Logo} alt="LogoWH" />
          </a>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link className="home" to="/" exact="true">
                Home
              </Link>
            </li>
            <li>
              <Link className="products" to="/products">
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
