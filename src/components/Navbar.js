import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import { FaAngleDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [windowDimension, setWindowDimension] = useState(null);

  const [openBar, setOpenBar] = useState(false);

  const [logostyle, setLogoStyle] = useState({width:"120%"})

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth)
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmallWindow = windowDimension <=1436;

  const isMobile = windowDimension <=1252;

  useEffect(()=>{
      console.log(isSmallWindow)
      if(isSmallWindow){
        setLogoStyle({width:"100%"})
      }else{
        setLogoStyle({width:"120%"})
      }

  },[isSmallWindow])


  return (
    <>
    {isMobile?<>
        <ul className="Navbar" >
        <li className="listItem" onClick={()=>setOpenBar(!openBar)}>
        <GiHamburgerMenu />     
        </li>

        <li className="Logo">
            <img src="./images/Trehouse.png" style={logostyle} />
        </li>
        
        <li className="listItem purpbtnm" style={{marginLeft:"2.4vw"}}>
                    Contact Us
        </li>
    </ul>
    {openBar&&
    <ul className="inlinenested">
                <li className="listItem">
                    <p>Home</p>
                </li>
                <li className="listItem">
                    <p><a className='ab' href='#ourmodel'>Our Model</a></p>
                </li>
                <li className="listItem">
                    <p><a className='ab' href='#Hww'>How we work</a></p>
                </li>
                <li className="listItem">
                    <p><a className='ab' href='#testimonials'>Testimonials</a></p>
                </li>
                
            </ul>
    }
    </>:<>
    <ul className="Navbar" >
        <li className="Logo">
            <img src="./images/Trehouse.png" style={logostyle} />
        </li>
        <li>
            <ul className="nestedList">
                <li className="listItem">
                    <p>Home</p>
                </li>
                <li className="listItem">
                    <p><a className='ab' href='#ourmodel'>Our Model</a></p>
                </li>
                <li className="listItem">
                    <p><a className='ab' href='#Hww'>How we work</a></p>
                </li>
                <li className="listItem">
                    <p><a className='ab' href='#testimonials'>Testimonials</a></p>
                </li>
            </ul>
        </li>
        <li>
            <ul className="nestedList">
                
                <li className="listItem purpbtn" style={{marginLeft:"2.4vw"}}>
                <a className='aw' href='#contact'>Contact Us</a>
                </li>
            </ul>
        </li>
    </ul>
    </>}

    </>
  );
};

export default Navbar;