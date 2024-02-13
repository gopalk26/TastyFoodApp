
import { useState } from "react";
import { logo_url } from "../Utils/constants";
import { Link } from "react-router-dom";




const Header = () => {
  const [BtnName, setBtnName] = useState("login");

  return (
    <div className="header">
      <div className="logo">
        <img alt="logo" src={logo_url} />
      </div>
      <div className="nav-items">
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to ="/about">About</Link> </li>
           <li><Link to="/contact" >Contact Us</Link></li>
          <li>Cart</li>
          <li>
            <button className="login" onClick={() =>
               setBtnName("logout")}>
              {BtnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
