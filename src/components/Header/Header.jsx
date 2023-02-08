import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Logo from "../../assets/images/logo-winehouse.png";
import Home from "../Home/Home";
import Products from "../Products/Products";
import NotFound from "../NotFound/NotFound";

function Header() {
  return (
    <React.Fragment>
      <div className="imagen-logo">
        <img src={Logo} alt="LogoWH" width="300px" />
      </div>
      <div>
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
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}

export default Header;
