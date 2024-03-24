import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ul className="Navbar" >
        <li className="Logo">
            <img src="./images/Trehouse.png" style={{width:"120%"}} />
        </li>
        <li>
            <ul className="nestedList">
                <li className="listItem">
                    <p>Home</p>
                </li>
                <li className="listItem">
                    <p>About Us</p>
                </li>
                <li className="listItem">
                    <p>Services <FaAngleDown style={{position:"relative", top:"2px", left:"4px"}}/></p>
                </li>
                <li className="listItem">
                    <p>Case Studies</p>
                </li>
                <li className="listItem">
                    <p>Blog</p>
                </li>
            </ul>
        </li>
        <li>
            <ul className="nestedList">
                <li className="listItem">
                    Sign In
                </li>
                <li className="listItem purpbtn" style={{marginLeft:"2.4vw"}}>
                    Start Free
                </li>
            </ul>
        </li>
    </ul>
  );
};

export default Navbar;