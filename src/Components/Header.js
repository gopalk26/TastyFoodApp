import { useState } from "react";
import { logo_url } from "../Utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const cart = useSelector((store)=>store.cart.items);
  
 
  return (
    <div className="flex justify-between items-center bg-orange-500 p-5 rounded-lg s shadow-lg shadow-rose-500/50 mb-2">
      <div className="logo">
        <img className="w-12 h-12 rounded-full" alt="logo" src={logo_url} />
      </div>
      <div className="nav-items ">
        <ul className="flex "> 
          <li>
            <Link to="/" 
            className="text-white mr-5 hover:text-orange-200">Home</Link>
          </li>
          <li>
            <Link to="/about"
             className="text-white mr-5 hover:text-orange-200">About</Link>
          </li>
          <li>
            <Link to="/contact" 
            className="text-white mr-5 hover:text-orange-200">Contact Us</Link>
          </li>
          <Link to ="/cartpage" className="text-white mr-5 hover:text-orange-200">Cart-({cart.length}items)</Link>
          <li>
         <li className="text-white mr-5 hover:text-orange-200"> login</li> 
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
