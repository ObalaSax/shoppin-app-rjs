import { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
function NavBar() {
  const [currentPath, setCurrentPath] = useState("/");

  return (
    <div className="navBar">
      <div className="navBar-container">
        <img src={Logo} alt="Alijaba Logo" />
        <div className="navBar-links">
          <ul>
            <li
              onClick={() => {
                setCurrentPath("/home");
              }}
            >
              <a href="/">Home {currentPath === "/home" ? <hr /> : <></>}</a>
            </li>
            <li
              onClick={() => {
                setCurrentPath("/men");
              }}
            >
              <a href="/men">Men {currentPath === "/men" ? <hr /> : <></>}</a>
            </li>
            <li
              onClick={() => {
                setCurrentPath("/women");
              }}
            >
              <a href="/women">
                Women {currentPath === "/women" ? <hr /> : <></>}
              </a>
            </li>
            <li
              onClick={() => {
                setCurrentPath("/kids");
              }}
            >
              <a href="/kids">
                Kids {currentPath === "/kids" ? <hr /> : <></>}
              </a>
            </li>
            <li
              onClick={() => {
                setCurrentPath("/brands");
              }}
            >
              <a href="/brands">
                Brand {currentPath === "/brands" ? <hr /> : <></>}
              </a>
            </li>
          </ul>
        </div>
        <div className="navBar-button">
          <Link to="/signin">
            <button> Login</button>
          </Link>
          <Link to="/cart">
            <button> Cart Icon</button>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
}
export default NavBar;
