import "./header.css";
import {
  background,
  iconMenu,
  iconClosed,
  facebook,
  instagram,
  whatsapp,
} from "../../assets/Javascript/images";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header>
        <div className="menu-mobile">
          <h1>Best coffe</h1>

          {location.pathname === "/login" ? (
            <Link to="/">
              <h1 className="home-link">Home</h1>
            </Link>
          ) : (
            <Link to="/login">
              <h1 className="login-link">Login</h1>
            </Link>
          )}

          <img src={iconMenu} alt="icon" onClick={toggleMenu} />
        </div>

        <div className={`container-mobile ${openMenu ? "open" : ""}`}>
          <div className="header-mobile">
            <h1>Many varieties</h1>
            <img src={iconClosed} alt="icon-closed" onClick={toggleMenu} />
          </div>

          <div className="navbar-mobile">
            <ul>
              <li>Drinks</li>
              <li>Coffe</li>
              <li>Specials</li>
              <li>All Menu</li>
            </ul>
          </div>

          <div className="container-socialMedia">
            <div>
              <h1>Social Media</h1>
            </div>

            <div className="icons-socialMedia">
              <img src={facebook} />
              <img src={instagram} />
              <img src={whatsapp} />
            </div>
          </div>
        </div>

        <div className="container-menuDesktop">
          <div>Best Coffe</div>
          <div>
            <ul>
              <li>Drinks</li>
              <li>Coffe</li>
              <li>Specials</li>
              <li>All Menu</li>
            </ul>
          </div>

          {location.pathname === "/login" ? (
            <Link to="/">
              <h1 className="home-link">Home</h1>
            </Link>
          ) : (
            <Link to="/login">
              <h1 className="login-link">Login</h1>
            </Link>
          )}

          <div>
            <button>Contact</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
