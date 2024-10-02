//import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Logo from "../assets/Logo.png";
import {
  UserRoundPen,
  ChevronDown,
  ShoppingCart,
  Layers,
  Flag,
} from "lucide-react";

function NavBar() {
  return (
    <div className="navbar">
      <div className="layer1">
        <img src={Logo} alt="Logo" />
        <div className="nav-searchbar">
          <input type="text" placeholder="What Are We Buying Today?" />
          <button> Search</button>
        </div>
        <div className="dropdowns">
          <div className="download">
            <Layers color="#ffffff" />
            <ChevronDown color="#ffffff" />
          </div>
          <div className="country">
            <Flag color="#ffffff" />
            <ChevronDown color="#ffffff" />
          </div>
          <div className="profile">
            <UserRoundPen color="#ffffff" />
            <ChevronDown color="#ffffff" />
          </div>
          <div className="cart-img">
            <ShoppingCart color="#ffffff" />
            <ChevronDown color="#ffffff" />
          </div>
        </div>
      </div>
      <div className="layer2"></div>
    </div>
  );
}
export default NavBar;
